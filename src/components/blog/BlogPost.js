import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { parseFrontmatter } from '../../utils/frontmatter';
import MarkdownRenderer from './MarkdownRenderer';

const BlogFonts = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=JetBrains+Mono:wght@400;500&display=swap');
`;

const Page = styled.div`
  min-height: 100vh;
  background: #ffffff;
`;

const TopBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid #e9ecef;
  padding: 0.875rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BackLink = styled.button`
  background: none;
  border: none;
  color: #667eea;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.2s;

  &:hover {
    color: #764ba2;
  }
`;

const SiteName = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #6c757d;
`;

const Article = styled.article`
  max-width: 680px;
  margin: 0 auto;
  padding: 3.5rem 2rem 6rem;
`;

const PostHeader = styled.header`
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e9ecef;
`;

const TagList = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
`;

const Tag = styled.span`
  background: #f0f0f8;
  color: #667eea;
  border-radius: 4px;
  padding: 0.15rem 0.55rem;
  font-size: 0.75rem;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
`;

const PostTitle = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  color: #1a1a2e;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin: 0 0 1.25rem 0;
`;

const PostMeta = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: #6c757d;
`;

const PostBody = styled.div`
  font-family: 'Lora', Georgia, serif;
  font-size: 1.125rem;
  line-height: 1.85;
  color: #2c3e50;

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    color: #1a1a2e;
    margin: 2.5rem 0 1rem;
    line-height: 1.25;
    letter-spacing: -0.01em;
  }

  h2 { font-size: 1.5rem; }
  h3 { font-size: 1.25rem; }

  p { margin: 0 0 1.5rem; }

  a {
    color: #667eea;
    text-decoration: underline;
    text-underline-offset: 3px;

    &:hover { color: #764ba2; }
  }

  ul, ol {
    margin: 0 0 1.5rem;
    padding-left: 1.75rem;

    li { margin-bottom: 0.4rem; }
  }

  blockquote {
    border-left: 3px solid #667eea;
    margin: 1.5rem 0;
    padding: 0.75rem 1.25rem;
    background: #f8f8ff;
    border-radius: 0 6px 6px 0;
    font-style: italic;
    color: #4a4a6a;

    p { margin: 0; }
  }

  img {
    max-width: 100%;
    border-radius: 8px;
    margin: 1.5rem 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;

    th, td {
      border: 1px solid #e9ecef;
      padding: 0.6rem 0.9rem;
      text-align: left;
    }

    th {
      background: #f8f9fa;
      font-weight: 600;
    }

    tr:nth-child(even) td {
      background: #fafafa;
    }
  }

  hr {
    border: none;
    border-top: 1px solid #e9ecef;
    margin: 3rem 0;
  }

  .katex-display {
    overflow-x: auto;
    padding: 0.5rem 0;
  }
`;

const NotFound = styled.div`
  text-align: center;
  padding: 6rem 2rem;
  color: #6c757d;
  font-family: 'Lora', Georgia, serif;
  font-size: 1.1rem;
`;

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`/posts/${slug}.md`)
      .then(r => {
        if (!r.ok) throw new Error('not found');
        return r.text();
      })
      .then(raw => {
        const { meta, body } = parseFrontmatter(raw);
        setPost({ ...meta, body });
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [slug]);

  return (
    <Page>
      <BlogFonts />
      <TopBar>
        <BackLink onClick={() => navigate('/blog')}>← All posts</BackLink>
        <SiteName>ihsuy.github.io</SiteName>
      </TopBar>
      {loading && (
        <Article>
          <div style={{ color: '#6c757d', fontFamily: 'Inter', textAlign: 'center', paddingTop: '4rem' }}>
            Loading...
          </div>
        </Article>
      )}
      {notFound && (
        <NotFound>
          Post not found. <BackLink onClick={() => navigate('/blog')} style={{ display: 'inline', color: '#667eea' }}>Back to all posts</BackLink>
        </NotFound>
      )}
      {post && (
        <Article>
          <PostHeader>
            {Array.isArray(post.tags) && post.tags.length > 0 && (
              <TagList>
                {post.tags.map(t => <Tag key={t}>{t}</Tag>)}
              </TagList>
            )}
            <PostTitle>{post.title}</PostTitle>
            <PostMeta>{formatDate(post.date)}</PostMeta>
          </PostHeader>
          <PostBody>
            <MarkdownRenderer>{post.body}</MarkdownRenderer>
          </PostBody>
        </Article>
      )}
    </Page>
  );
}
