import React, { Suspense } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import 'katex/dist/katex.min.css';
import vizRegistry from '../vizRegistry';

function VizBlock({ name }) {
  const Component = vizRegistry[name];
  if (!Component) {
    return (
      <div style={{
        background: '#f8f9fa',
        border: '1px dashed #dee2e6',
        borderRadius: '8px',
        padding: '2rem',
        textAlign: 'center',
        color: '#6c757d',
        fontFamily: 'monospace',
        fontSize: '0.875rem',
      }}>
        Unknown viz component: <strong>{name}</strong>
      </div>
    );
  }
  return (
    <Suspense fallback={<div style={{ textAlign: 'center', padding: '2rem', color: '#6c757d' }}>Loading visualization...</div>}>
      <Component />
    </Suspense>
  );
}

const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    const lang = match ? match[1] : '';

    if (!inline && lang === 'viz') {
      const name = String(children).trim();
      return <VizBlock name={name} />;
    }

    if (!inline && lang) {
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={lang}
          PreTag="div"
          customStyle={{
            borderRadius: '8px',
            fontSize: '0.875rem',
            margin: '1.5rem 0',
          }}
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      );
    }

    return (
      <code
        style={{
          background: '#f0f0f0',
          padding: '0.15em 0.4em',
          borderRadius: '4px',
          fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
          fontSize: '0.875em',
          color: '#e83e8c',
        }}
        {...props}
      >
        {children}
      </code>
    );
  },
};

const PLUGINS_REMARK = [remarkGfm, remarkMath];
const PLUGINS_REHYPE = [rehypeKatex];

export default function MarkdownRenderer({ children }) {
  return (
    <ReactMarkdown
      remarkPlugins={PLUGINS_REMARK}
      rehypePlugins={PLUGINS_REHYPE}
      components={components}
    >
      {children}
    </ReactMarkdown>
  );
}
