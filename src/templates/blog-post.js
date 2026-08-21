import React from "react";
import { css } from "@emotion/react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { space, CONTENT_MAX_WIDTH } from "../utils/spacing";
import { TagList } from "../components/tags";

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
            color: gray;
            margin-bottom: ${space(3)};
          `}
        >
          {post.frontmatter.date}
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
        isBlogPost
        tags
      }
    }
  }
`;
