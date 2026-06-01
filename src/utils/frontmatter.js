const FENCE = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;

export function parseFrontmatter(raw) {
  const match = raw.match(FENCE);
  if (!match) return { meta: {}, body: raw };

  const meta = {};
  for (const line of match[1].split('\n')) {
    const colon = line.indexOf(':');
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    const val = line.slice(colon + 1).trim().replace(/^['"]|['"]$/g, '');
    if (key === 'tags') {
      meta[key] = val
        .replace(/^\[|\]$/g, '')
        .split(',')
        .map(t => t.trim().replace(/^['"]|['"]$/g, ''))
        .filter(Boolean);
    } else {
      meta[key] = val;
    }
  }
  return { meta, body: match[2] };
}

export function stringifyFrontmatter(meta, body) {
  const lines = Object.entries(meta).map(([k, v]) => {
    if (Array.isArray(v)) return `${k}: [${v.map(t => `"${t}"`).join(', ')}]`;
    return `${k}: "${v}"`;
  });
  return `---\n${lines.join('\n')}\n---\n\n${body}`;
}
