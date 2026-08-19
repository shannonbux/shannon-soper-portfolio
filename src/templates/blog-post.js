import React from "react";
import { css } from "@emotion/react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { TagList } from "../components/tags";

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div css={{ maxWidth: 800 }}>
        <TagList
          tags={post.frontmatter.tags}
          css={css`
            margin-bottom: 12px;
          `}
        />
        <h1>{post.frontmatter.title}</h1>
        <div
          css={css`
            color: gray;
            margin-bottom: 8px;
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
