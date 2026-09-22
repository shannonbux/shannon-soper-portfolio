import React from "react";
import { css } from "@emotion/react";

// The tag vocabulary controls the Work overview's sections and anchor links.
// A tag an article carries must match `key` exactly.
//
// Per-article tags live in each src/pages/<slug>/index.md frontmatter:
//   tags: ["DX", "GROWTH"]   several
//   tags: ["DX"]             one
//   tags: []                 none — omitted from the categorized overview
export const TAGS = [
  { id: "dx", key: "DX", label: "DX" },
  { id: "growth", key: "GROWTH", label: "Growth" },
  { id: "ai-agents", key: "AI & AGENTS", label: "AI & Agents" },
  { id: "side-projects", key: "SIDE PROJECTS", label: "Side Projects" },
];

const row = css`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

// Outline and label stay constant across states; only the container fill
// changes. Material filter chip metrics: 32dp container, 8dp radius, 8dp
// between elements, 16dp side padding. Height includes the 1px outline,
// hence border-box.
const chip = (active) => css`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  height: 32px;
  padding: 0 16px;
  font-family: Cabin, sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.06em;
  line-height: 1.3;
  text-transform: uppercase;
  border-radius: 8px;
  border: 1px solid #aab7e0;
  background: ${active ? `#eef1fb` : `transparent`};
  color: #2c46a8;
`;

export function TagList({ tags, className }) {
  if (!tags || tags.length === 0) {
    return null;
  }
  return (
    <div css={row} className={className}>
      {tags.map((tag) => (
        <span key={tag} css={chip(false)}>
          {tag}
        </span>
      ))}
    </div>
  );
}

export function TagNavigation({ tags = TAGS, className }) {
  return (
    <nav aria-label="Work categories" css={row} className={className}>
      {tags.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          css={css`
            ${chip(false)};
            cursor: pointer;
            text-decoration: none;

            :hover {
              background: #eef1fb;
              color: #5268bd;
            }
          `}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
