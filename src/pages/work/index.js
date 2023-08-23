import React from "react"
import { css } from "@emotion/react"
import { Link, graphql } from "gatsby"
import { rhythm } from "../../utils/typography"
import Layout from "../../components/layout"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Work({ data }) {
  return (
    <Layout>
      <div css={{ maxWidth: 600 }}>
        <h1>Work</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                display: flex;
                align-items: flex-start;
                color: inherit;
                margin-bottom: 32px;
              `}
            >
              <GatsbyImage
                css={css`
                  margin-right: 24px;
                `}
                image={getImage(node.frontmatter.featuredImage)}
              />
              <div css={{ flex: 1 }}>
                <h2
                  css={css`
                    margin-bottom: 4px;
                    color: #000000;
                  `}
                >
                  {node.frontmatter.title}
                </h2>
                <p>{node.frontmatter.excerpt}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 128, height: 128)
              }
            }
            excerpt
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
