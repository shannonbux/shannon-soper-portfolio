import React from "react";
import { css } from "@emotion/react";

export const RESUME_URL = "https://shannon-soper.com/Resume%202026.pdf";

// Destinations live here once, so the button row and the link list below can
// never drift apart. `handle` is what the link list shows; `label` is what the
// buttons show. mailto entries deliberately carry no target.
const CONTACTS = [
  { key: "resume", label: "Resume", handle: "Resume", href: RESUME_URL, external: true },
  {
    key: "linkedin",
    label: "LinkedIn",
    handle: "/shannonsoper",
    href: "https://www.linkedin.com/in/shannonsoper/",
    external: true,
  },
  {
    key: "github",
    label: "GitHub",
    handle: "shannonbux",
    href: "https://github.com/shannonbux",
    external: true,
  },
  {
    key: "instagram",
    label: "Instagram",
    handle: "@discovered_ux",
    href: "https://www.instagram.com/discovered_ux/",
    external: true,
  },
  {
    key: "email",
    label: "Email",
    handle: "shannon.soper@gmail.com",
    href: "mailto:shannon.soper@gmail.com",
    external: false,
  },
];

// Official brand marks, filled single paths, rendered in currentColor so they
// take the link colour rather than brand colours:
//   LinkedIn  — Bootstrap Icons (MIT), 16x16 grid
//   Instagram, GitHub — Simple Icons (CC0 paths; marks remain trademarks), 24x24
//   Mail      — Material Symbols filled (Apache 2.0), 24x24
// LinkedIn is absent from Simple Icons, which dropped it at LinkedIn's request,
// hence the second source and the different viewBox.
const icon = css`
  flex: none;
  width: 18px;
  height: 18px;
  fill: currentColor;
`;

function LinkedInIcon() {
  return (
    <svg css={icon} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg css={icon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg css={icon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg css={icon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

// Material button pair. Both share the 40dp height, fully rounded shape and
// 24dp side padding; filled carries the primary action, outlined the rest.
// Hover and press use translucent overlays of the brand blue, standing in for
// Material's state layers.
const BLUE = `#2c46a8`;

const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 24px;
  border-radius: 20px;
  font-family: Merriweather Sans, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
`;

const filledButton = css`
  ${buttonBase};
  border: none;
  background: ${BLUE};
  color: #ffffff;
  :hover {
    background: #283f97;
  }
  :active {
    background: #233886;
  }
`;

const outlinedButton = css`
  ${buttonBase};
  border: 1px solid ${BLUE};
  background: transparent;
  color: ${BLUE};
  :hover {
    background: rgba(44, 70, 168, 0.08);
  }
  :active {
    background: rgba(44, 70, 168, 0.16);
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

const externalProps = (external) =>
  external ? { target: "_blank", rel: "noopener noreferrer" } : {};

export function ContactButtons({ className }) {
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
      `}
      className={className}
    >
      {CONTACTS.map(({ key, label, href, external }) => (
        <a
          key={key}
          href={href}
          css={key === "resume" ? filledButton : outlinedButton}
          {...externalProps(external)}
        >
          {label}
        </a>
      ))}
    </div>
  );
}

// Not currently rendered. Kept because it is the alternative treatment we
// costed out: text links showing the actual handle and address, each with its
// brand mark. Swap ContactButtons for this in index.js to bring it back.
export function ContactLinks({ className }) {
  const ICONS = {
    linkedin: LinkedInIcon,
    github: GitHubIcon,
    email: MailIcon,
    instagram: InstagramIcon,
  };
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      `}
      className={className}
    >
      {CONTACTS.filter(({ key }) => key !== "resume").map(
        ({ key, handle, href, external }) => {
          const Icon = ICONS[key];
          return (
            <a key={key} href={href} css={link} {...externalProps(external)}>
              <Icon />
              {handle}
            </a>
          );
        }
      )}
    </div>
  );
}
