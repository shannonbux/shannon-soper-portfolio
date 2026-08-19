import React from "react"
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"
import "./layout.css"
import { StaticImage } from "gatsby-plugin-image"

import { rhythm } from "../utils/typography"

const HeaderLink = ({ to, children }) => {
  return (
    <Link
      css={{
        fontFamily: `Merriweather Sans, sans-serif`,
        fontSize: 16,
        textTransform: `uppercase`,
        letterSpacing: `0.06em`,
        color: `#333333`,
        textDecoration: `none`,
        padding: 0,
        marginLeft: 24,
        ":hover": {
          color: `#1A1A1A`,
        },
      }}
      activeStyle={{
        color: `#000000`,
        textDecoration: `underline`,
        textUnderlineOffset: `3px`,
        textDecorationThickness: `2px`,
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
          <StaticImage
            src="../pages/images/icons/hello.png"
            width={16}
            height={16}
            layout="fixed"
            placeholder="none"
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
              letter-spacing: 0.06em;
              text-transform: uppercase;
              color: #333;
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
