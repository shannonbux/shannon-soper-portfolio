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
  font-family: Merriweather Sans, sans-serif;
  font-size: 12px;
  font-weight: normal;
  letter-spacing: 0.06em;
  line-height: 1.3;
  border-radius: 8px;
  border: 1px solid #E5C2A5;
  background: ${active ? `#FEF2E8` : `transparent`};
  color: #A95207;
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
          background: #FFE8D4;
        }
        /* Replaces the tap highlight suppressed in layout.css, so a press is
           still acknowledged before React re-renders. Deeper than hover,
           because on touch the hover fill sticks after the tap lands. */
        :active {
          background: #E5C2A5;
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
