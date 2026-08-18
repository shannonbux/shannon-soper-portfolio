import React from "react";
import { css } from "@emotion/react";
import { Link, graphql } from "gatsby";
import { rhythm } from "../../utils/typography";
import Layout from "../../components/layout";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Work({ data }) {
  return (
    <Layout>
      <div
        css={css`
          width: 66.6667%;
          @media (max-width: 720px) {
            width: 100%;
          }
        `}
      >
        <h1
          css={css`
            margin-bottom: 2.1rem;
          `}
        >
          Work
        </h1>
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 32px;
            row-gap: 48px;
            @media (max-width: 720px) {
              grid-template-columns: 1fr;
            }
          `}
        >
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Link
              key={node.id}
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
                display: block;
              `}
            >
              <GatsbyImage
                css={css`
                  display: block;
                  width: 100%;
                  margin-bottom: 16px;
                  border: 1px solid #d3d3d3;
                  border-radius: 4px;
                  overflow: hidden;
                `}
                image={getImage(node.frontmatter.featuredImage)}
              />
              <h2
                css={css`
                  margin-bottom: 4px;
                  color: #000000;
                `}
              >
                {node.frontmatter.title}
              </h2>
              <div
                css={css`
                  display: block;
                  margin-bottom: 8px;
                  color: gray;
                `}
              >
                {node.frontmatter.date}
              </div>
              <p>{node.frontmatter.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { isBlogPost: { ne: true }, hidden: { ne: true } }
      }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  width: 900
                  aspectRatio: 1.5
                  sizes: "(max-width: 720px) 100vw, 33vw"
                )
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
`;
