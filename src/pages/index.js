import React from "react"
import { css } from "@emotion/react"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  return (
    <Layout>
      <div>
        <div
          css={css`
            color: #ec5800;
            margin-bottom: 4rem;
          `}
        >
          <h1>
            I'm a{" "}
            <span
              css={css`
                color: #ec5800;
              `}
            >
              Product Designer
            </span>{" "}
            with a passion for{" "}
            <span
              css={css`
                color: #ec5800;
              `}
            >
              UX Research
            </span>
            .
          </h1>
        </div>
        <div css={{ textAlign: `center` }}>
          <StaticImage
            src="../pages/images/therapy-two.jpg"
            maxWidth={400}
            layout="constrained"
            alt="UX therapy"
            css={{
              margin: `0 auto`,
              marginBottom: rhythm(1),
            }}
          />
        </div>
        <div
          css={css`
            text-align: center;
            display: block;
            font-style: italic;
            margin-bottom: 4rem;

            @media (min-width: 720px) {
              font-size: 20px;
            }
            font-size: 16px;
          `}
        >
          “So tell me, how did that landing page
          <br /> make you feel?”
        </div>
        <h2>Projects</h2>
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
                  text-decoration: underline;
                  color: #000000;
                `}
              >
                {node.frontmatter.title}
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
        <br></br>
        <br></br>
        <h2>Talks</h2>
        <div className="videoWrapper">
          <iframe
            title="Shannon Soper Talk"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?list=PLR38WdMdLF9sFCz15rbSQzMQrYYZ-ObiO"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <br></br>
        <br></br>
        <h2>Side projects</h2>
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
