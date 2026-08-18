import React from "react";
import { css } from "@emotion/react";

// The tag vocabulary. This array controls which chips appear in the Work
// page filter bar, and in what order.
//
// A tag an article carries must match an entry here exactly — the strings are
// compared literally, so "dx" will not match "DX". A tag in an article's
// frontmatter but missing here still renders on tiles and article pages, but
// gets no filter chip. A tag here that no article carries gets a chip that
// always filters down to nothing.
//
// Per-article tags live in each src/pages/<slug>/index.md frontmatter:
//   tags: ["DX", "GROWTH"]   several
//   tags: ["DX"]             one
//   tags: []                 none — hidden whenever any filter is active
export const TAGS = [
  "DX",
  "GROWTH",
  "AI & AGENTS",
  "SIDE PROJECTS",
  "ONBOARDING",
];

const row = css`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const chip = (active) => css`
  display: inline-block;
  font-family: Merriweather Sans, sans-serif;
  font-size: 12px;
  font-weight: normal;
  letter-spacing: 0.06em;
  line-height: 1.3;
  padding: 4px 10px;
  border-radius: 4px;
  border: 1px solid ${active ? `#ec5800` : `#d3d3d3`};
  background: ${active ? `#FFF1E9` : `transparent`};
  color: ${active ? `#ec5800` : `#333333`};
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

export function TagFilter({ tags = TAGS, selected, onToggle, className }) {
  return (
    <div css={row} className={className}>
      {tags.map((tag) => {
        const active = selected.includes(tag);
        return (
          <button
            key={tag}
            type="button"
            onClick={() => onToggle(tag)}
            aria-pressed={active}
            css={css`
              ${chip(active)};
              cursor: pointer;
              :hover {
                border-color: #ec5800;
              }
            `}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}
