import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Card = styled.article`
  padding: 2rem 0;
  border-bottom: 1px solid #e9ecef;
  cursor: pointer;
  transition: transform 0.15s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    transform: translateX(4px);
  }
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
`;

const DateLabel = styled.span`
  font-size: 0.8rem;
  color: #6c757d;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  letter-spacing: 0.03em;
  text-transform: uppercase;
`;

const TagList = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: #f0f0f8;
  color: #667eea;
  border-radius: 4px;
  padding: 0.1rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
`;

const Title = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 0.6rem 0;
  line-height: 1.3;
`;

const Excerpt = styled.p`
  font-family: 'Lora', Georgia, serif;
  font-size: 1rem;
  color: #4a4a4a;
  line-height: 1.7;
  margin: 0;
`;

const ReadMore = styled.span`
  display: inline-block;
  margin-top: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  color: #667eea;
  letter-spacing: 0.02em;
`;

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function PostCard({ post }) {
  const navigate = useNavigate();
  const tags = Array.isArray(post.tags) ? post.tags : [];

  return (
    <Card onClick={() => navigate(`/blog/${post.slug}`)}>
      <Meta>
        <DateLabel>{formatDate(post.date)}</DateLabel>
        {tags.length > 0 && (
          <TagList>
            {tags.map(t => <Tag key={t}>{t}</Tag>)}
          </TagList>
        )}
      </Meta>
      <Title>{post.title}</Title>
      {post.excerpt && <Excerpt>{post.excerpt}</Excerpt>}
      <ReadMore>Read more →</ReadMore>
    </Card>
  );
}
