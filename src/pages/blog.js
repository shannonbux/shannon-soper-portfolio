import React from "react";
import { css } from "@emotion/react";
import { Link, graphql } from "gatsby";
import { space, CONTENT_MAX_WIDTH } from "../utils/spacing";
import Layout from "../components/layout";
import { rhythm } from "../utils/typography";

export default function Blog({ data }) {
  return (
    <Layout>
      <div css={{ maxWidth: CONTENT_MAX_WIDTH }}>
        <h1
          css={css`
            margin-bottom: ${space(3)};
          `}
        >
          Blog posts
        </h1>
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
              <div css={{ flex: 1 }}>
                <h2
                  css={css`
                    margin-bottom: 0px;
                    color: #000000;
                  `}
                >
                  {node.frontmatter.title}
                </h2>
                <div
                  css={css`
                    display: block;
                    margin-top: ${space(0.5)};
                    margin-bottom: 8px;
                    font-size: 12px;
                    color: #333333;
                  `}
                >
                  {node.frontmatter.date}
                </div>
                <p>{node.frontmatter.excerpt}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { isBlogPost: { eq: true }, hidden: { ne: true } }
      }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
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
