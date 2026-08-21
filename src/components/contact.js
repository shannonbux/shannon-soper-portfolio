import React from "react";
import { css } from "@emotion/react";

export const RESUME_URL = "https://shannon-soper.com/Resume%202026.pdf";

// Stroke icons drawn inline rather than pulled from a package: three glyphs is
// not worth a dependency, and inline SVG inherits currentColor so the icons
// track the link colour on hover without extra rules.
const icon = css`
  flex: none;
  width: 18px;
  height: 18px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
`;

function LinkedInIcon() {
  return (
    <svg css={icon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg css={icon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg css={icon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Material filled button: 40dp tall, fully rounded, 24dp side padding. Hover and
// press darken the container, standing in for Material's state layers.
const button = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 24px;
  border: none;
  border-radius: 20px;
  background: #ec5800;
  color: #ffffff;
  font-family: Merriweather Sans, sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  :hover {
    background: #d44f00;
  }
  :active {
    background: #bd4600;
  }
`;

// Padding rather than margin, so the tap target covers the whole row.
const link = css`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  color: #333333;
  text-decoration: none;
  :hover {
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-thickness: 2px;
    text-decoration-color: #333333;
  }
`;

export function ResumeButton({ className }) {
  return (
    <a
      href={RESUME_URL}
      target="_blank"
      rel="noopener noreferrer"
      css={button}
      className={className}
    >
      Resume
    </a>
  );
}

export function ContactLinks({ className }) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      `}
      className={className}
    >
      <a
        href="https://www.linkedin.com/in/shannonsoper/"
        target="_blank"
        rel="noopener noreferrer"
        css={link}
      >
        <LinkedInIcon />
        /shannonsoper
      </a>
      <a href="mailto:shannon.soper@gmail.com" css={link}>
        <MailIcon />
        shannon.soper@gmail.com
      </a>
      <a
        href="https://www.instagram.com/discovered_ux/"
        target="_blank"
        rel="noopener noreferrer"
        css={link}
      >
        <InstagramIcon />
        @discovered_ux
      </a>
    </div>
  );
}
