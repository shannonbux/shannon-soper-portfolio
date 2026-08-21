import React, { useState } from "react";
import { css } from "@emotion/react";
import { Link, graphql } from "gatsby";
import { rhythm } from "../../utils/typography";
import { space } from "../../utils/spacing";
import Layout from "../../components/layout";
import { TagFilter, TagList } from "../../components/tags";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Work({ data }) {
  const [selected, setSelected] = useState(null);

  const selectTag = (tag) =>
    setSelected((current) => (current === tag ? null : tag));

  const edges = data.allMarkdownRemark.edges;
  const visible =
    selected === null
      ? edges
      : edges.filter(({ node }) =>
          (node.frontmatter.tags || []).includes(selected)
        );

  return (
    <Layout>
      <div>
        <h1
          css={css`
            margin-bottom: 8px;
          `}
        >
          Work
        </h1>
        <p
          css={css`
            margin-bottom: 24px;
          `}
        >
          Curated case studies spanning developer experience, growth
          experiments, and AI &amp; agents.
        </p>
        <TagFilter
          selected={selected}
          onSelect={selectTag}
          onClear={() => setSelected(null)}
          css={css`
            margin-bottom: ${space(5)};
          `}
        />
        {visible.length === 0 ? (
          <p>No case studies match that tag.</p>
        ) : (
          <div
            css={css`
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
              column-gap: 32px;
              row-gap: 48px;
            `}
          >
            {visible.map(({ node }) => (
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
                <p
                  css={css`
                    margin-bottom: 12px;
                  `}
                >
                  {node.frontmatter.excerpt}
                </p>
                <TagList tags={node.frontmatter.tags} />
              </Link>
            ))}
          </div>
        )}
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
