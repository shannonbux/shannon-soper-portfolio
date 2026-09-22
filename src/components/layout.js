import React from "react";
import { css } from "@emotion/react";
import { Link } from "gatsby";
import "./layout.css";

import { space, spaceValue, GUTTER, PAGE_MAX_WIDTH } from "../utils/spacing";
import logo from "../pages/images/icons/logo.png";

const HeaderLink = ({ to, children, trimActiveUnderline = false }) => {
  return (
    <Link
      css={css`
        color: #333333;
        font-family: Cabin, sans-serif;
        font-size: 18px;
        font-weight: 400;
        margin-left: ${spaceValue(3)}px;
        padding: 0;
        text-decoration: none;

        &:hover {
          color: #333333;
          text-decoration: none;
        }

        position: relative;

        &::after {
          background: #333333;
          bottom: 2px;
          content: "";
          height: 1px;
          left: 0;
          opacity: 0;
          position: absolute;
          transition: opacity 150ms ease;
          width: ${trimActiveUnderline ? `calc(100% - 9px)` : `100%`};
        }

        &:hover::after,
        &.active-nav-link::after {
          opacity: 1;
        }
      `}
      activeClassName="active-nav-link"
      activeStyle={{ textDecoration: `none` }}
      to={to}
    >
      {children}
    </Link>
  );
};

const shell = css`
  margin: 0 auto;
  max-width: ${PAGE_MAX_WIDTH}px;
  padding: ${GUTTER.narrow};
  padding-top: ${space(1.5)};
  position: relative;

  @media (min-width: 720px) {
    padding: ${GUTTER.wide};
    padding-top: ${space(5)};
  }
`;

const horizontalShell = css`
  margin: 0 auto;
  max-width: ${PAGE_MAX_WIDTH}px;
  padding: 0 ${GUTTER.narrow};
  position: relative;

  @media (min-width: 720px) {
    padding: 0 ${GUTTER.wide};
  }
`;

function Navigation() {
  return (
    <div
      css={css`
        align-items: center;
        display: flex;
        justify-content: space-between;
      `}
    >
      <Link
        to={`/`}
        aria-label="Shannon Bryn Soper home"
        css={css`
          align-items: center;
          display: flex;
          text-decoration: none;
        `}
      >
        <span
          aria-hidden="true"
          css={css`
            background: #333333;
            display: block;
            height: 22px;
            mask: url(${logo}) center / contain no-repeat;
            -webkit-mask: url(${logo}) center / contain no-repeat;
            width: 27px;
          `}
        />
      </Link>
      <div
        css={css`
          align-items: center;
          display: flex;
        `}
      >
        <HeaderLink to="/work/">Work</HeaderLink>
        <HeaderLink to="/blog/" trimActiveUnderline>
          Blog
        </HeaderLink>
        <HeaderLink to="/about/">Talks</HeaderLink>
      </div>
    </div>
  );
}

export default function Layout({
  children,
  contentTop = space(10),
  hero,
  heroBackground = `rgba(44, 70, 168, 0.08)`,
  heroTop = space(10),
}) {
  if (hero) {
    return (
      <div>
        <div css={{ background: heroBackground }}>
          <div
            css={css`
              ${shell};
              padding-bottom: 0;

              @media (min-width: 720px) {
                padding-bottom: 0;
              }
            `}
          >
            <Navigation />
            <div style={{ paddingTop: heroTop }}>{hero}</div>
          </div>
        </div>
        <div css={horizontalShell}>
          <div
            className="page-content"
            data-layout-content="true"
            style={{ paddingTop: contentTop }}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div css={shell}>
        <Navigation />

        <div
          className="page-content"
          data-layout-content="true"
          style={{ paddingTop: contentTop }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
