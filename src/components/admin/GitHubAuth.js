import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { setToken } from '../../utils/localStorage';

const CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID || '';
const DEVICE_CODE_URL = 'https://github.com/login/device/code';
const TOKEN_URL = 'https://github.com/login/oauth/access_token';
const SCOPE = 'public_repo';

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
  max-width: 440px;
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
  font-size: 0.95rem;
  color: #6c757d;
  margin: 0 0 2rem;
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
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;

const CodeBox = styled.div`
  background: #f0f0f8;
  border: 2px dashed #667eea;
  border-radius: 10px;
  padding: 1.25rem;
  margin: 1.5rem 0;
`;

const UserCode = styled.div`
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: #667eea;
  margin-bottom: 0.5rem;
`;

const CodeInstructions = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  color: #4a4a6a;
  margin: 0;
`;

const GHLink = styled.a`
  color: #667eea;
  font-weight: 600;
`;

const Status = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: #6c757d;
  margin: 1rem 0 0;
`;

const Error = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: #dc3545;
  margin: 1rem 0 0;
`;

export default function GitHubAuth({ onAuthenticated }) {
  const [stage, setStage] = useState('idle'); // idle | polling | error
  const [userCode, setUserCode] = useState('');
  const [verifyUrl, setVerifyUrl] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const pollRef = useRef(null);

  useEffect(() => () => clearInterval(pollRef.current), []);

  async function startDeviceFlow() {
    if (!CLIENT_ID) {
      setErrorMsg('REACT_APP_GITHUB_CLIENT_ID is not set. See setup instructions.');
      setStage('error');
      return;
    }
    setStage('polling');
    setErrorMsg('');

    try {
      const res = await fetch(DEVICE_CODE_URL, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ client_id: CLIENT_ID, scope: SCOPE }),
      });
      const data = await res.json();
      setUserCode(data.user_code);
      setVerifyUrl(data.verification_uri);

      const interval = Math.max((data.interval || 5) + 1, 6) * 1000;
      const deviceCode = data.device_code;

      pollRef.current = setInterval(async () => {
        try {
          const tokenRes = await fetch(TOKEN_URL, {
            method: 'POST',
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({
              client_id: CLIENT_ID,
              device_code: deviceCode,
              grant_type: 'urn:ietf:params:oauth:grant-type:device_code',
            }),
          });
          const tokenData = await tokenRes.json();
          if (tokenData.access_token) {
            clearInterval(pollRef.current);
            setToken(tokenData.access_token);
            onAuthenticated();
          } else if (tokenData.error === 'access_denied') {
            clearInterval(pollRef.current);
            setErrorMsg('Access denied. Please try again.');
            setStage('error');
          } else if (tokenData.error === 'expired_token') {
            clearInterval(pollRef.current);
            setErrorMsg('Code expired. Please try again.');
            setStage('idle');
          }
        } catch {
          // network error - keep polling
        }
      }, interval);
    } catch (err) {
      setErrorMsg('Failed to contact GitHub. Check your connection.');
      setStage('error');
    }
  }

  return (
    <Wrap>
      <Card>
        <Logo>✍️</Logo>
        <Title>Admin Login</Title>
        <Sub>Authenticate with GitHub to access the blog editor.</Sub>

        {stage === 'idle' && (
          <Button onClick={startDeviceFlow}>Login with GitHub</Button>
        )}

        {stage === 'polling' && userCode && (
          <>
            <CodeBox>
              <UserCode>{userCode}</UserCode>
              <CodeInstructions>
                Enter this code at{' '}
                <GHLink href={verifyUrl} target="_blank" rel="noreferrer">
                  github.com/login/device
                </GHLink>
              </CodeInstructions>
            </CodeBox>
            <Status>Waiting for GitHub approval...</Status>
          </>
        )}

        {(stage === 'error') && (
          <>
            <Error>{errorMsg}</Error>
            <Button style={{ marginTop: '1rem' }} onClick={() => setStage('idle')}>
              Try again
            </Button>
          </>
        )}
      </Card>
    </Wrap>
  );
}
