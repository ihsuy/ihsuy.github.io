const DRAFT_PREFIX = 'blog_draft_';
const DRAFTS_INDEX = 'blog_drafts_index';

export function saveDraft(slug, { title, body, tags, excerpt, status = 'draft' }) {
  const payload = { slug, title, body, tags, excerpt, status, savedAt: Date.now() };
  localStorage.setItem(DRAFT_PREFIX + slug, JSON.stringify(payload));
  const index = listDraftSlugs();
  if (!index.includes(slug)) {
    localStorage.setItem(DRAFTS_INDEX, JSON.stringify([...index, slug]));
  }
}

export function loadDraft(slug) {
  const raw = localStorage.getItem(DRAFT_PREFIX + slug);
  return raw ? JSON.parse(raw) : null;
}

export function listDrafts() {
  return listDraftSlugs()
    .map(slug => loadDraft(slug))
    .filter(Boolean)
    .sort((a, b) => b.savedAt - a.savedAt);
}

export function deleteDraft(slug) {
  localStorage.removeItem(DRAFT_PREFIX + slug);
  const index = listDraftSlugs().filter(s => s !== slug);
  localStorage.setItem(DRAFTS_INDEX, JSON.stringify(index));
}

function listDraftSlugs() {
  const raw = localStorage.getItem(DRAFTS_INDEX);
  return raw ? JSON.parse(raw) : [];
}

export const GITHUB_TOKEN_KEY = 'github_access_token';

export function getToken() {
  return localStorage.getItem(GITHUB_TOKEN_KEY);
}

export function setToken(token) {
  localStorage.setItem(GITHUB_TOKEN_KEY, token);
}

export function clearToken() {
  localStorage.removeItem(GITHUB_TOKEN_KEY);
}
