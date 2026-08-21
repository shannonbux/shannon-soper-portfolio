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
              font-size: 12px;
              font-weight: 300;
              text-transform: uppercase;
              color: #767676;
              margin-bottom: 2px;
            `}
          >
            {label}
          </div>
          <div
            css={css`
              font-size: 12px;
              font-weight: 400;
              color: #333333;
            `}
          >
            {value}
          </div>
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
              company={post.frontmatter.company}
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
