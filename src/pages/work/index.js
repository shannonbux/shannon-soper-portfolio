import React from "react";
import { css } from "@emotion/react";
import { Link, graphql } from "gatsby";
import { space } from "../../utils/spacing";
import Layout from "../../components/layout";
import { TAGS, TagNavigation } from "../../components/tags";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Work({ data }) {
  const edges = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <div>
        <h1
          css={css`
            margin-bottom: ${space(3)};
          `}
        >
          Work
        </h1>
        <p
          css={css`
            margin-bottom: 0;
          `}
        >
          Curated case studies spanning developer experience, growth
          experiments, and AI &amp; agents.
        </p>
        <div
          css={css`
            margin: ${space(5)} 0;
          `}
        >
          <TagNavigation />
        </div>
        <div
          css={css`
            display: grid;
          `}
        >
          {TAGS.map(({ id, key, label }) => {
            const articles = edges.filter(({ node }) =>
              (node.frontmatter.tags || []).includes(key)
            );

            return (
              <section
                key={id}
                id={id}
                css={css`
                  scroll-margin-top: 0;

                  &:not(:first-of-type) {
                    padding-top: ${space(8)};
                  }
                `}
              >
                <h2
                  css={css`
                    font-size: 32px;
                    margin: 0 0 ${space(3)};
                  `}
                >
                  {label}
                </h2>
                <div
                  css={css`
                    display: grid;
                    grid-template-columns: repeat(
                      auto-fit,
                      minmax(min(100%, 340px), 1fr)
                    );
                    column-gap: 32px;
                    row-gap: 48px;
                  `}
                >
                  {articles.map(({ node }) => (
                    <Link
                      key={node.id}
                      to={node.fields.slug}
                      css={css`
                        color: inherit;
                        display: block;
                        text-decoration: none;

                        &:hover {
                          color: #333333;
                        }

                        &:hover h2 {
                          text-decoration: underline;
                          text-decoration-thickness: 1px;
                          text-underline-offset: 4px;
                        }
                      `}
                    >
                      <GatsbyImage
                        css={css`
                          border: 1px solid #d3d3d3;
                          border-radius: 4px;
                          display: block;
                          margin-bottom: 16px;
                          overflow: hidden;
                          width: 100%;
                        `}
                        image={getImage(node.frontmatter.featuredImage)}
                      />
                      {node.frontmatter.company && (
                        <p
                          css={css`
                            font-size: 14px;
                            font-weight: 400;
                            line-height: 1.2;
                            margin: 0;
                            text-transform: uppercase;
                          `}
                        >
                          {node.frontmatter.company}
                        </p>
                      )}
                      <h2
                        css={css`
                          color: #333333;
                          font-family: BioRhyme, Georgia, serif;
                          font-size: 24px;
                          font-weight: 400;
                          line-height: 1.2;
                          margin: ${node.frontmatter.company
                            ? `12px 0 8px`
                            : `0 0 8px`};
                        `}
                      >
                        {node.frontmatter.title}
                      </h2>
                      <p
                        css={css`
                          font-weight: 400;
                          margin: 0;
                        `}
                      >
                        {node.frontmatter.excerpt}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
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
            company
            tags
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  width: 1100
                  aspectRatio: 1.5
                  sizes: "(max-width: 813px) 100vw, (max-width: 1253px) 45vw, 510px"
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
