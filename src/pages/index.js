import React from "react"
import { css } from "@emotion/react"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            margin-bottom: 1em;
          `}
        >
          Welcome to my portfolio!
        </h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #555;
                  `}
                ></span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
        <br></br>
        <br></br>
        <h3>Talks</h3>
        <div className="videoWrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Hp_cJGwT1Jc?start=211"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <br></br>
        <br></br>
        <h3>Side projects</h3>
        <div>
          <a href="https://thenopegame.gtsb.io/">The Nope Game v0.1</a>
        </div>
        <div>
          <a href="https://www.instagram.com/peptodismaldesigns/">
            Peptodismal Designs
          </a>
        </div>
        <div>
          <a href="http://watson.surge.sh/">Cute dog</a>
        </div>
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
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
