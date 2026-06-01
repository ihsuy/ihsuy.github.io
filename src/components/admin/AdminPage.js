import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import GitHubAuth from './GitHubAuth';
import MarkdownEditor from './MarkdownEditor';
import { getToken, clearToken, saveDraft, loadDraft, listDrafts } from '../../utils/localStorage';
import { stringifyFrontmatter } from '../../utils/frontmatter';
import { publishPost } from '../../utils/githubApi';

const TopBar = styled.div`
  height: 60px;
  background: #1a1a2e;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  gap: 1rem;
  flex-shrink: 0;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.65);
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  cursor: pointer;
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  transition: all 0.15s;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    color: #ffffff;
  }
`;

const Spacer = styled.div`flex: 1;`;

const TitleInput = styled.input`
  flex: 1;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.4rem 0.9rem;
  outline: none;
  min-width: 0;

  &::placeholder { color: rgba(255, 255, 255, 0.3); }
  &:focus { border-color: #667eea; }
`;

const StatusBadge = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.25rem 0.6rem;
  border-radius: 5px;
  background: ${({ $published }) => $published ? 'rgba(40, 167, 69, 0.2)' : 'rgba(255, 193, 7, 0.2)'};
  color: ${({ $published }) => $published ? '#28a745' : '#ffc107'};
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
`;

const ActionButton = styled.button`
  background: ${({ $primary }) => $primary ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'rgba(255,255,255,0.08)'};
  border: ${({ $primary }) => $primary ? 'none' : '1px solid rgba(255,255,255,0.15)'};
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.4rem 1rem;
  border-radius: 7px;
  cursor: pointer;
  white-space: nowrap;
  transition: opacity 0.15s;

  &:hover:not(:disabled) { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: not-allowed; }
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1.5rem;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  flex-wrap: wrap;
`;

const MetaLabel = styled.label`
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  color: #6c757d;
  white-space: nowrap;
`;

const MetaInput = styled.input`
  background: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  padding: 0.25rem 0.6rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  color: #2c3e50;
  outline: none;
  min-width: 0;

  &:focus { border-color: #667eea; }
`;

const Toast = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: ${({ $error }) => $error ? '#dc3545' : '#28a745'};
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  z-index: 1000;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const DraftList = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding: 3rem 2rem;
  max-width: 720px;
  margin: 0 auto;
`;

const DraftCard = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 1.25rem 1.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  border: 1px solid #e9ecef;
  transition: border-color 0.15s;

  &:hover { border-color: #667eea; }
`;

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 80);
}

function useToast() {
  const [toast, setToast] = useState(null);
  const show = useCallback((msg, error = false) => {
    setToast({ msg, error });
    setTimeout(() => setToast(null), 3500);
  }, []);
  return [toast, show];
}

export default function AdminPage() {
  const { slug: routeSlug } = useParams();
  const navigate = useNavigate();
  const [authed, setAuthed] = useState(!!getToken());

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [tags, setTags] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('draft');
  const [lastSavedAt, setLastSavedAt] = useState(null);
  const [publishing, setPublishing] = useState(false);
  const [toast, showToast] = useToast();
  const [view, setView] = useState(routeSlug ? 'editor' : 'drafts');

  useEffect(() => {
    if (routeSlug && authed) {
      const draft = loadDraft(routeSlug);
      if (draft) {
        setTitle(draft.title || '');
        setSlug(routeSlug);
        setTags(Array.isArray(draft.tags) ? draft.tags.join(', ') : (draft.tags || ''));
        setExcerpt(draft.excerpt || '');
        setBody(draft.body || '');
        setStatus(draft.status || 'draft');
        setLastSavedAt(draft.savedAt || null);
        setView('editor');
      }
    }
  }, [routeSlug, authed]);

  function handleTitleChange(val) {
    setTitle(val);
    if (!routeSlug) setSlug(slugify(val));
  }

  function currentSlug() {
    return slug || slugify(title) || 'untitled';
  }

  function saveDraftNow(bodyOverride) {
    const s = currentSlug();
    const tagArr = tags.split(',').map(t => t.trim()).filter(Boolean);
    saveDraft(s, {
      title,
      body: bodyOverride ?? body,
      tags: tagArr,
      excerpt,
      status,
    });
    setLastSavedAt(Date.now());
  }

  function handleAutoSave(bodyVal) {
    if (!title && !bodyVal) return;
    saveDraftNow(bodyVal);
  }

  async function handlePublish() {
    if (!title.trim()) { showToast('Please add a title before publishing.', true); return; }
    setPublishing(true);
    try {
      const s = currentSlug();
      const tagArr = tags.split(',').map(t => t.trim()).filter(Boolean);
      const meta = {
        title,
        slug: s,
        date: new Date().toISOString().split('T')[0],
        excerpt: excerpt || body.slice(0, 160).replace(/\n/g, ' '),
        tags: tagArr,
        status: 'published',
      };
      const markdown = stringifyFrontmatter(meta, body);
      await publishPost(s, markdown, meta);
      setStatus('published');
      saveDraft(s, { title, body, tags: tagArr, excerpt, status: 'published' });
      showToast('Published! GitHub Actions will deploy in ~2 minutes.');
    } catch (err) {
      showToast(`Publish failed: ${err.message}`, true);
    } finally {
      setPublishing(false);
    }
  }

  function newPost() {
    setTitle('');
    setSlug('');
    setTags('');
    setExcerpt('');
    setBody('');
    setStatus('draft');
    setLastSavedAt(null);
    setView('editor');
  }

  if (!authed) return <GitHubAuth onAuthenticated={() => setAuthed(true)} />;

  if (view === 'drafts') {
    const drafts = listDrafts();
    return (
      <>
        <TopBar>
          <NavButton onClick={() => navigate('/')}>← Site</NavButton>
          <NavButton onClick={() => navigate('/blog')}>Blog</NavButton>
          <Spacer />
          <ActionButton $primary onClick={newPost}>+ New Post</ActionButton>
          <ActionButton onClick={() => { clearToken(); setAuthed(false); }}>Logout</ActionButton>
        </TopBar>
        <DraftList>
          <h2 style={{ fontFamily: 'Inter', fontWeight: 800, color: '#1a1a2e', marginBottom: '1.5rem' }}>
            Drafts & Posts
          </h2>
          {drafts.length === 0 && (
            <p style={{ color: '#6c757d', fontFamily: 'Lora, Georgia, serif', fontStyle: 'italic' }}>
              No saved drafts. Create your first post!
            </p>
          )}
          {drafts.map(d => (
            <DraftCard key={d.slug} onClick={() => { navigate(`/admin/${d.slug}`); setView('editor'); }}>
              <div style={{ fontFamily: 'Inter', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.25rem' }}>
                {d.title || 'Untitled'}
              </div>
              <div style={{ fontFamily: 'Inter', fontSize: '0.8rem', color: '#6c757d' }}>
                {d.status === 'published' ? '✅ Published' : '📝 Draft'} · Saved {new Date(d.savedAt).toLocaleDateString()}
              </div>
            </DraftCard>
          ))}
        </DraftList>
      </>
    );
  }

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopBar>
        <NavButton onClick={() => setView('drafts')}>← Drafts</NavButton>
        <TitleInput
          value={title}
          onChange={e => handleTitleChange(e.target.value)}
          placeholder="Post title..."
        />
        <StatusBadge
          $published={status === 'published'}
          onClick={() => setStatus(s => s === 'published' ? 'draft' : 'published')}
        >
          {status === 'published' ? 'Published' : 'Draft'}
        </StatusBadge>
        <ActionButton onClick={() => saveDraftNow()}>Save</ActionButton>
        <ActionButton $primary onClick={handlePublish} disabled={publishing}>
          {publishing ? 'Publishing...' : 'Publish'}
        </ActionButton>
      </TopBar>
      <MetaRow>
        <MetaLabel>Slug:</MetaLabel>
        <MetaInput
          value={slug || slugify(title)}
          onChange={e => setSlug(e.target.value)}
          placeholder="auto-from-title"
          style={{ width: '200px' }}
        />
        <MetaLabel>Tags:</MetaLabel>
        <MetaInput
          value={tags}
          onChange={e => setTags(e.target.value)}
          placeholder="ai, visualization, ..."
          style={{ width: '200px' }}
        />
        <MetaLabel>Excerpt:</MetaLabel>
        <MetaInput
          value={excerpt}
          onChange={e => setExcerpt(e.target.value)}
          placeholder="Short summary (optional)"
          style={{ flex: 1, minWidth: '200px' }}
        />
      </MetaRow>
      <MarkdownEditor
        value={body}
        onChange={setBody}
        onAutoSave={handleAutoSave}
        lastSavedAt={lastSavedAt}
      />
      {toast && <Toast $error={toast.error}>{toast.msg}</Toast>}
    </div>
  );
}
