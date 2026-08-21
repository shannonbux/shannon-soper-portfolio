import React from "react";
import { css } from "@emotion/react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { space, CONTENT_MAX_WIDTH } from "../utils/spacing";
import { TagList } from "../components/tags";

// Work articles carry My Role and Timeline where a blog post carries a date.
// Either line is skipped when its frontmatter is still empty, so a half-filled
// article shows what it has rather than a dangling label.
function Meta({ role, months, year }) {
  const timeline = [months && `${months} months`, year].filter(Boolean).join(`, `);
  const rows = [
    [`My Role`, role],
    [`Timeline`, timeline],
  ].filter(([, value]) => value);

  if (!rows.length) {
    return null;
  }
  return (
    <>
      {rows.map(([label, value]) => (
        <div key={label}>
          <strong>{label}:</strong> {value}
        </div>
      ))}
    </>
  );
}

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div css={{ maxWidth: CONTENT_MAX_WIDTH }}>
        <TagList
          tags={post.frontmatter.tags}
          css={css`
            margin-bottom: ${space(1.5)};
          `}
        />
        <h1
          css={css`
            margin-bottom: ${space(1)};
          `}
        >
          {post.frontmatter.title}
        </h1>
        <div
          css={css`
            font-size: 12px;
            color: #333333;
            margin-bottom: ${space(3)};
          `}
        >
          {post.frontmatter.isBlogPost ? (
            post.frontmatter.date
          ) : (
            <Meta
              role={post.frontmatter.role}
              months={post.frontmatter.months}
              year={post.frontmatter.year}
            />
          )}
        </div>
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
        year: timeline(formatString: "YYYY")
        isBlogPost
        role
        months
        tags
      }
    }
  }
`;
