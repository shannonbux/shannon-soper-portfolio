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
  "SIDE PROJECTS"
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

function FilterChip({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      css={css`
        ${chip(active)};
        cursor: pointer;
        :hover {
          border-color: #ec5800;
        }
      `}
    >
      {label}
    </button>
  );
}

// One tag at a time: `selected` is a single tag string, or null for no filter.
// Choosing a tag replaces whatever was selected before, and choosing the
// already-selected tag clears it.
//
// ALL is a control rather than a tag: it is deliberately not part of TAGS, so
// it never lands on an article. It reads as active whenever no tag is
// selected, which is the state it returns you to.
export function TagFilter({ tags = TAGS, selected, onSelect, onClear, className }) {
  return (
    <div css={row} className={className}>
      <FilterChip label="ALL" active={selected === null} onClick={onClear} />
      {tags.map((tag) => (
        <FilterChip
          key={tag}
          label={tag}
          active={selected === tag}
          onClick={() => onSelect(tag)}
        />
      ))}
    </div>
  );
}
