import React from "react";
import { css } from "@emotion/react";

export const TAGS = ["DX", "GROWTH", "AI & AGENTS"];

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
