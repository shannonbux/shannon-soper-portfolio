import React from "react";
import { css } from "@emotion/react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { space } from "../utils/spacing";

// Work articles carry My Role and Timeline where a blog post carries a date.
// Either line is skipped when its frontmatter is still empty, so a half-filled
// article shows what it has rather than a dangling label.
// Timeline is whatever the article's frontmatter says — "2018 (3 months)",
// "February 2024 - Ongoing", anything. It is printed verbatim rather than
// composed, so the phrasing stays the author's.
function Meta({ company, role, timeline }) {
  const rows = [
    [`Company`, company],
    [`Timeline`, timeline],
    [`My Role`, role],
  ].filter(([, value]) => value);

  if (!rows.length) {
    return null;
  }
  return (
    <div
      css={css`
        font-family: Cabin, sans-serif;
        margin-bottom: ${space(4)};
      `}
    >
      {rows.map(([label, value]) => (
        <div
          key={label}
          css={css`
            margin-bottom: ${space(1.5)};
          `}
        >
          <div
            css={css`
              font-family: Cabin, sans-serif;
              font-size: 16px;
              font-weight: 400;
              color: #767676;
              margin-bottom: 2px;
            `}
          >
            {label}
          </div>
          <div
            css={css`
              font-family: Cabin, sans-serif;
              font-size: 16px;
              font-weight: 400;
              color: #333333;
            `}
          >
            {label === `Company` ? value.toUpperCase() : value}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  const isWorkArticle = !post.frontmatter.isBlogPost;
  const preserveFullImages =
    post.fields.slug === `/docs-discoverability/` ||
    post.fields.slug === `/gatsby-tutorial/` ||
    post.frontmatter.company === `HOME`;
  const featuredImage = getImage(post.frontmatter.featuredImage);
  const heroImage = featuredImage && (
    <GatsbyImage
      image={featuredImage}
      alt={post.frontmatter.title}
      fetchpriority="high"
      loading="eager"
      objectPosition="left top"
      css={css`
        display: block;
        width: 100%;
      `}
    />
  );
  const hero = heroImage && (
    <div
      css={css`
        border: 1px solid #d3d3d3;
        border-radius: 4px;
        box-sizing: border-box;
        max-height: 560px;
        overflow: hidden;
        width: 100%;
      `}
    >
      {heroImage}
    </div>
  );

  if (isWorkArticle) {
    return (
      <Layout hero={hero} contentTop={featuredImage ? 0 : space(10)}>
        <header
          css={css`
            display: grid;
            grid-template-columns: minmax(0, 2fr) minmax(220px, 1fr);
            column-gap: ${space(8)};
            margin-top: ${space(6)};
            row-gap: 1rem;

            @media (max-width: 720px) {
              grid-template-columns: 1fr;
              row-gap: ${space(4)};
            }
          `}
        >
          <div
            css={css`
              grid-column: 1 / -1;
            `}
          >
            {post.frontmatter.company && (
              <p
                css={css`
                  color: #333333;
                  font-size: 14px;
                  font-weight: 400;
                  line-height: 1.4;
                  margin: 0 0 1rem;
                `}
              >
                {post.frontmatter.company.toUpperCase()}
              </p>
            )}
            <h1
              css={css`
                font-size: 48px;
                font-weight: 400;
                line-height: 1.2;
                margin: 0;

                @media (max-width: 720px) {
                  font-size: 36px;
                }
              `}
            >
              {post.frontmatter.title}
            </h1>
          </div>
          {post.frontmatter.excerpt && (
            <p
              css={css`
                color: #767676;
                font-size: 24px;
                font-weight: 400;
                grid-column: 1;
                line-height: 1.45;
                margin: 0;

                @media (max-width: 720px) {
                  font-size: 20px;
                }
              `}
            >
              {post.frontmatter.excerpt}
            </p>
          )}
          <aside
            css={css`
              grid-column: 2;
              grid-row: ${post.frontmatter.excerpt ? 2 : 1};

              @media (max-width: 720px) {
                grid-column: 1;
                grid-row: auto;
              }
            `}
          >
            <Meta
              role={post.frontmatter.role}
              timeline={post.frontmatter.timeline}
            />
          </aside>
        </header>
        <article
          className={`article-content${
            preserveFullImages ? ` article-content--full-images` : ``
          }`}
          css={css`
            margin-top: ${space(6)};
          `}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Layout>
    );
  }

  return (
    <Layout>
      <article
        className={`article-content${
          preserveFullImages ? ` article-content--full-images` : ``
        }`}
      >
        <h1
          css={css`
            margin-bottom: ${space(1)};
          `}
        >
          {post.frontmatter.title}
        </h1>
        <div
          css={css`
            font-size: 16px;
            font-family: Cabin, sans-serif;
            color: #333333;
            margin-bottom: ${space(3)};
          `}
        >
          {post.frontmatter.date}
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        isBlogPost
        company
        excerpt
        role
        timeline
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 1600
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP]
            )
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;
