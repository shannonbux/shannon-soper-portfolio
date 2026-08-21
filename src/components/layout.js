import React from "react"
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"
import "./layout.css"
import { StaticImage } from "gatsby-plugin-image"

import { space, spaceValue, GUTTER, PAGE_MAX_WIDTH } from "../utils/spacing"

const HeaderLink = ({ to, children }) => {
  return (
    <Link
      css={{
        fontFamily: `Merriweather Sans, sans-serif`,
        fontSize: 16,
        fontWeight: 300,
        color: `#333333`,
        textDecoration: `none`,
        padding: 0,
        marginLeft: spaceValue(3),
        ":hover": {
          textDecoration: `underline`,
          textUnderlineOffset: `3px`,
          textDecorationThickness: `1px`,
          textDecorationColor: `#333333`,
        },
      }}
      activeStyle={{
        textDecoration: `underline`,
        textUnderlineOffset: `3px`,
        textDecorationThickness: `1px`,
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
        max-width: ${PAGE_MAX_WIDTH}px;
        padding: ${GUTTER.narrow};
        padding-top: ${space(1.5)};
        position: relative;
        @media (min-width: 720px) {
          padding: ${GUTTER.wide};
          padding-top: ${space(5)};
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
              marginRight: space(1),
            }}
          />
          <h3
            css={css`
              margin: 0;
              font-weight: 300;
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

      <div css={{ marginBottom: space(6) }} />
      {children}
    </div>
  )
}
