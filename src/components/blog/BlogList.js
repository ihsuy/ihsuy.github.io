import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PostCard from './PostCard';

const Page = styled.div`
  min-height: 100vh;
  background: #ffffff;
`;

const Header = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 5rem 2rem 4rem;
  text-align: center;
`;

const HeaderTitle = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 0.75rem 0;
  letter-spacing: -0.02em;
`;

const HeaderSub = styled.p`
  font-family: 'Lora', Georgia, serif;
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
  font-style: italic;
`;

const BackLink = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.75);
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  cursor: pointer;
  padding: 0;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.2s;

  &:hover {
    color: #ffffff;
  }
`;

const Content = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 3rem 2rem;
`;

const Empty = styled.div`
  text-align: center;
  padding: 4rem 0;
  color: #6c757d;
  font-family: 'Lora', Georgia, serif;
  font-size: 1.1rem;
  font-style: italic;
`;

const LoadingSpinner = styled.div`
  text-align: center;
  padding: 4rem 0;
  color: #6c757d;
  font-family: 'Inter', sans-serif;
`;

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/posts/index.json')
      .then(r => {
        if (!r.ok) throw new Error('Could not load posts');
        return r.json();
      })
      .then(data => {
        const published = data.filter(p => p.status === 'published');
        published.sort((a, b) => new Date(b.date) - new Date(a.date));
        setPosts(published);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Page>
      <Header>
        <BackLink onClick={() => navigate('/')}>← Back to site</BackLink>
        <HeaderTitle>Writing</HeaderTitle>
        <HeaderSub>Notes on AI, engineering, and the occasional tangent.</HeaderSub>
      </Header>
      <Content>
        {loading && <LoadingSpinner>Loading posts...</LoadingSpinner>}
        {error && <Empty>Could not load posts. Check back soon.</Empty>}
        {!loading && !error && posts.length === 0 && (
          <Empty>No posts yet. Check back soon.</Empty>
        )}
        {posts.map(post => (
          <PostCard key={post.slug} post={post} />
        ))}
      </Content>
    </Page>
  );
}
