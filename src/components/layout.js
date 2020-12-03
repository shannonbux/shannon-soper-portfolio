import React from "react"
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"
import "./layout.css"

import { rhythm } from "../utils/typography"
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
        max-width: 700px;
        padding: ${rhythm(3 / 4)};
        padding-top: ${rhythm(1 / 2)};
        @media (min-width: 720px) {
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        }
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          position: absolute;
          top: ${rhythm(1 / 2)};
          right: ${rhythm(1 / 2)};
          @media (min-width: 720px) {
            float: right;
            position: relative;
            top: 0;
            right: 0;
          }
        `}
      >
        About
      </Link>
      <div css={{ marginBottom: rhythm(2) }} />
      {children}
    </div>
  )
}
