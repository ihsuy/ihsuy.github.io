import React, { useCallback, useEffect, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import MarkdownRenderer from '../blog/MarkdownRenderer';

const EditorFonts = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: calc(100vh - 120px);
  gap: 0;
  border-top: 1px solid #e9ecef;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 50vh 50vh;
  }
`;

const PaneLabel = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #6c757d;
  padding: 0.5rem 1.25rem;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
`;

const EditorPane = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e9ecef;
  overflow: hidden;
`;

const PreviewPane = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Textarea = styled.textarea`
  flex: 1;
  border: none;
  outline: none;
  resize: none;
  padding: 1.5rem;
  font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;
  font-size: 0.9rem;
  line-height: 1.7;
  color: #2c3e50;
  background: #ffffff;
  tab-size: 2;

  &::placeholder { color: #adb5bd; }
`;

const PreviewBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem 2rem;

  font-family: 'Lora', Georgia, serif;
  font-size: 1.05rem;
  line-height: 1.85;
  color: #2c3e50;

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    color: #1a1a2e;
    margin: 2rem 0 0.75rem;
    line-height: 1.25;
  }

  h2 { font-size: 1.35rem; }
  h3 { font-size: 1.15rem; }

  p { margin: 0 0 1.25rem; }

  a { color: #667eea; }

  ul, ol {
    margin: 0 0 1.25rem;
    padding-left: 1.5rem;
    li { margin-bottom: 0.3rem; }
  }

  blockquote {
    border-left: 3px solid #667eea;
    margin: 1.25rem 0;
    padding: 0.6rem 1rem;
    background: #f8f8ff;
    border-radius: 0 6px 6px 0;
    font-style: italic;
    color: #4a4a6a;
    p { margin: 0; }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.25rem 0;
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    th, td {
      border: 1px solid #e9ecef;
      padding: 0.5rem 0.75rem;
    }
    th { background: #f8f9fa; font-weight: 600; }
  }

  .katex-display { overflow-x: auto; }
`;

const SaveStatus = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.7rem;
  color: #6c757d;
  padding: 0.5rem 1.25rem;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const AUTOSAVE_DELAY = 2000;

export default function MarkdownEditor({ value, onChange, onAutoSave, lastSavedAt }) {
  const timerRef = useRef(null);

  const handleChange = useCallback((e) => {
    const next = e.target.value;
    onChange(next);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      onAutoSave(next);
    }, AUTOSAVE_DELAY);
  }, [onChange, onAutoSave]);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  function formatSaveTime(ts) {
    if (!ts) return 'Not saved yet';
    const diff = Math.round((Date.now() - ts) / 1000);
    if (diff < 5) return 'Saved just now';
    if (diff < 60) return `Saved ${diff}s ago`;
    return `Saved ${Math.round(diff / 60)}m ago`;
  }

  return (
    <>
      <EditorFonts />
      <Container>
        <EditorPane>
          <PaneLabel>Markdown</PaneLabel>
          <SaveStatus>{formatSaveTime(lastSavedAt)}</SaveStatus>
          <Textarea
            value={value}
            onChange={handleChange}
            placeholder="Start writing in Markdown...&#10;&#10;Use ```viz&#10;ComponentName&#10;``` to embed visualizations.&#10;&#10;Math: $E = mc^2$ or $$\int_0^\infty e^{-x}\,dx$$"
            spellCheck
          />
        </EditorPane>
        <PreviewPane>
          <PaneLabel>Preview</PaneLabel>
          <PaneLabel style={{ background: '#fff', color: 'transparent', borderBottom: '1px solid #e9ecef' }}>-</PaneLabel>
          <PreviewBody>
            {value ? <MarkdownRenderer>{value}</MarkdownRenderer> : (
              <span style={{ color: '#adb5bd', fontStyle: 'italic', fontFamily: 'Lora, Georgia, serif' }}>
                Preview will appear here as you write.
              </span>
            )}
          </PreviewBody>
        </PreviewPane>
      </Container>
    </>
  );
}
