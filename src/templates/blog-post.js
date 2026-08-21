import React from "react";
import { css } from "@emotion/react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { space, CONTENT_MAX_WIDTH } from "../utils/spacing";

// Work articles carry My Role and Timeline where a blog post carries a date.
// Either line is skipped when its frontmatter is still empty, so a half-filled
// article shows what it has rather than a dangling label.
// Timeline is whatever the article's frontmatter says — "2018 (3 months)",
// "February 2024 - Ongoing", anything. It is printed verbatim rather than
// composed, so the phrasing stays the author's.
function Meta({ role, timeline }) {
  const rows = [
    [`Timeline`, timeline],
    [`My Role`, role],
  ].filter(([, value]) => value);

  if (!rows.length) {
    return null;
  }
  return (
    <div
      css={css`
        margin-bottom: ${space(4)};
      `}
    >
      {rows.map(([label, value]) => (
        <div
          key={label}
          css={css`
            margin-bottom: ${space(1)};
          `}
        >
          <div
            css={css`
              font-size: 12px;
              font-weight: 600;
              color: #767676;
            `}
          >
            {label}
          </div>
          <div css={{ fontSize: 16 }}>{value}</div>
        </div>
      ))}
    </div>
  );
}

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div css={{ maxWidth: CONTENT_MAX_WIDTH }}>
        {!post.frontmatter.isBlogPost && post.frontmatter.company && (
          <div
            css={css`
              font-size: 12px;
              letter-spacing: 0.08em;
              text-transform: uppercase;
              color: #333333;
              margin-bottom: ${space(1)};
            `}
          >
            {post.frontmatter.company}
          </div>
        )}
        <h1
          css={css`
            margin-bottom: ${space(1)};
          `}
        >
          {post.frontmatter.title}
        </h1>
        {post.frontmatter.isBlogPost ? (
          <div
            css={css`
              font-size: 12px;
              color: #333333;
              margin-bottom: ${space(3)};
            `}
          >
            {post.frontmatter.date}
          </div>
        ) : (
          <>
            {post.frontmatter.excerpt && (
              <p
                css={css`
                  font-size: 20px;
                  line-height: 1.5;
                  color: #767676;
                  margin-bottom: ${space(3)};
                `}
              >
                {post.frontmatter.excerpt}
              </p>
            )}
            <Meta
              role={post.frontmatter.role}
              timeline={post.frontmatter.timeline}
            />
          </>
        )}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
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
      }
    }
  }
`;
