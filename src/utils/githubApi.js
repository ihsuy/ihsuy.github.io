import { getToken } from './localStorage';

const REPO_OWNER = 'ihsuy';
const REPO_NAME = 'ihsuy.github.io';
const BRANCH = 'master';
const API = 'https://api.github.com';

function headers() {
  return {
    Authorization: `Bearer ${getToken()}`,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'Content-Type': 'application/json',
  };
}

async function getFileSha(path) {
  const res = await fetch(
    `${API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}?ref=${BRANCH}`,
    { headers: headers() }
  );
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub API ${res.status}: ${await res.text()}`);
  const data = await res.json();
  return data.sha;
}

export async function putFile(path, content, commitMessage) {
  const sha = await getFileSha(path);
  const body = {
    message: commitMessage,
    content: btoa(unescape(encodeURIComponent(content))),
    branch: BRANCH,
  };
  if (sha) body.sha = sha;

  const res = await fetch(
    `${API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`,
    { method: 'PUT', headers: headers(), body: JSON.stringify(body) }
  );
  if (!res.ok) throw new Error(`GitHub API ${res.status}: ${await res.text()}`);
  return res.json();
}

export async function fetchPostsIndex() {
  const res = await fetch(
    `${API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/public/posts/index.json?ref=${BRANCH}`,
    { headers: headers() }
  );
  if (res.status === 404) return [];
  if (!res.ok) throw new Error(`GitHub API ${res.status}: ${await res.text()}`);
  const data = await res.json();
  return JSON.parse(decodeURIComponent(escape(atob(data.content.replace(/\n/g, '')))));
}

export async function publishPost(slug, markdownContent, metaEntry) {
  const index = await fetchPostsIndex();
  const existing = index.findIndex(p => p.slug === slug);
  const updatedIndex = existing >= 0
    ? index.map((p, i) => (i === existing ? metaEntry : p))
    : [...index, metaEntry];

  await putFile(
    `public/posts/${slug}.md`,
    markdownContent,
    `blog: publish "${metaEntry.title}"`
  );
  await putFile(
    'public/posts/index.json',
    JSON.stringify(updatedIndex, null, 2),
    `blog: update posts index for "${metaEntry.title}"`
  );
}
