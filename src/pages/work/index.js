import React, { useState } from "react";
import { css } from "@emotion/react";
import { Link, graphql } from "gatsby";
import { rhythm } from "../../utils/typography";
import Layout from "../../components/layout";
import { TagFilter, TagList } from "../../components/tags";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Work({ data }) {
  const [selected, setSelected] = useState([]);

  const toggleTag = (tag) =>
    setSelected((current) =>
      current.includes(tag)
        ? current.filter((t) => t !== tag)
        : [...current, tag]
    );

  const edges = data.allMarkdownRemark.edges;
  const visible =
    selected.length === 0
      ? edges
      : edges.filter(({ node }) =>
          (node.frontmatter.tags || []).some((tag) => selected.includes(tag))
        );

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
          onToggle={toggleTag}
          css={css`
            margin-bottom: 2.1rem;
          `}
        />
        {visible.length === 0 ? (
          <p>No case studies match those tags.</p>
        ) : (
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
                <div
                  css={css`
                    display: block;
                    margin-bottom: 8px;
                    color: gray;
                  `}
                >
                  {node.frontmatter.date}
                </div>
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
            date(formatString: "DD MMMM, YYYY")
            tags
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
