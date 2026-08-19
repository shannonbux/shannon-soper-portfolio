import React from "react"
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"
import "./layout.css"
import logo from "../pages/images/icons/hello.png"

import { rhythm } from "../utils/typography"

const HeaderLink = ({ to, children }) => {
  return (
    <Link
      css={{
        fontFamily: `Merriweather Sans, sans-serif`,
        fontSize: 16,
        color: `#333333`,
        textDecoration: `none`,
        padding: 0,
        marginLeft: 24,
        ":hover": {
          textDecoration: `underline`,
          textUnderlineOffset: `3px`,
          textDecorationThickness: `2px`,
          textDecorationColor: `#333333`,
        },
      }}
      activeStyle={{
        textDecoration: `underline`,
        textUnderlineOffset: `3px`,
        textDecorationThickness: `2px`,
        textDecorationColor: `#333333`,
      }}
      to={to}
    >
      {children}
    </Link>
  )
}
export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 1152px;
        padding: ${rhythm(3 / 4)};
        padding-top: ${rhythm(1 / 2)};
        position: relative;
        @media (min-width: 720px) {
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        }
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <Link
          to={`/`}
          css={css`
            display: flex;
            align-items: center;
            text-decoration: none;
          `}
        >
          {/* Plain img on purpose: gatsby-plugin-image fades each mount in
              over 250ms, and Layout remounts on every route change, so the
              logo appeared to reload whenever a nav item was clicked. */}
          <img
            src={logo}
            alt=""
            width={16}
            height={16}
            css={{
              marginRight: rhythm(1 / 4),
            }}
          />
          <h3
            css={css`
              margin: 0;
              font-weight: 400;
              font-style: normal;
              font-size: 16px;
              line-height: 1.2;
              color: #333333;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <HeaderLink to="/work/">Work</HeaderLink>
          <HeaderLink to="/blog/">Blog</HeaderLink>
          <HeaderLink to="/about/">About</HeaderLink>
        </div>
      </div>

      <div css={{ marginBottom: rhythm(2) }} />
      {children}
    </div>
  )
}
