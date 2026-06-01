import React, { useState } from 'react';
import styled from 'styled-components';
import { setToken } from '../../utils/localStorage';

const Wrap = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 3rem;
  max-width: 480px;
  width: 100%;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  text-align: center;
`;

const Logo = styled.div`
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 14px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 0.5rem;
`;

const Sub = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #6c757d;
  margin: 0 0 0.5rem;
`;

const InstructionLink = styled.a`
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  color: #667eea;
  display: block;
  margin-bottom: 1.75rem;
`;

const TokenInput = styled.input`
  width: 100%;
  border: 1.5px solid #dee2e6;
  border-radius: 10px;
  padding: 0.75rem 1rem;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.85rem;
  color: #2c3e50;
  outline: none;
  box-sizing: border-box;
  margin-bottom: 1rem;
  transition: border-color 0.15s;

  &:focus { border-color: #667eea; }
  &::placeholder { color: #adb5bd; font-family: 'Inter', sans-serif; font-size: 0.875rem; }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.875rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  border: none;
  border-radius: 10px;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover:not(:disabled) { opacity: 0.88; }
  &:disabled { opacity: 0.45; cursor: not-allowed; }
`;

const Error = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  color: #dc3545;
  margin: 0.75rem 0 0;
`;

const PAT_URL = 'https://github.com/settings/tokens/new?scopes=public_repo&description=ihsuy+blog+admin';

export default function GitHubAuth({ onAuthenticated }) {
  const [token, setTokenInput] = useState('');
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const trimmed = token.trim();
    if (!trimmed) return;
    setVerifying(true);
    setError('');
    try {
      const res = await fetch('https://api.github.com/user', {
        headers: { Authorization: `Bearer ${trimmed}`, Accept: 'application/vnd.github+json' },
      });
      if (!res.ok) throw new Error('Invalid token - GitHub returned ' + res.status);
      setToken(trimmed);
      onAuthenticated();
    } catch (err) {
      setError(err.message);
    } finally {
      setVerifying(false);
    }
  }

  return (
    <Wrap>
      <Card>
        <Logo>✍️</Logo>
        <Title>Admin Login</Title>
        <Sub>Paste a GitHub Personal Access Token with <code>public_repo</code> scope.</Sub>
        <InstructionLink href={PAT_URL} target="_blank" rel="noreferrer">
          Generate one at github.com/settings/tokens →
        </InstructionLink>
        <form onSubmit={handleSubmit}>
          <TokenInput
            type="password"
            value={token}
            onChange={e => setTokenInput(e.target.value)}
            placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
            autoFocus
          />
          <Button type="submit" disabled={!token.trim() || verifying}>
            {verifying ? 'Verifying...' : 'Login'}
          </Button>
        </form>
        {error && <Error>{error}</Error>}
      </Card>
    </Wrap>
  );
}
