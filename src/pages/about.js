import React from "react";
import { css } from "@emotion/react";

import Layout from "../components/layout";
import { CONTENT_MAX_WIDTH, space } from "../utils/spacing";

const externalLink = css`
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
`;

export default function About() {
  return (
    <Layout>
      <main
        css={css`
          display: flex;
          flex-direction: column;
          gap: ${space(3)};
          max-width: ${CONTENT_MAX_WIDTH}px;
        `}
      >
        <h1
          css={css`
            font-size: 32px;
            font-weight: 400;
            line-height: 1.2;
            margin: 0;
          `}
        >
          Talks
        </h1>
        <ul
          css={css`
            list-style: disc outside;
            margin: 0;
            padding-left: 1.25em;

            li {
              font-weight: 400;
              line-height: 1.5;
            }

            li + li {
              margin-top: ${space(1)};
            }
          `}
        >
          <li>
            <a
              css={externalLink}
              href="https://www.youtube.com/watch?v=ohWWW3XLg-s&t=758s"
            >
              How Gatsby Does High-Impact, Low-Effort UX Research (and You Can
              Too!)
            </a>{" "}
            — Gatsby
          </li>
          <li>
            <a
              css={externalLink}
              href="https://www.youtube.com/watch?v=PIhJtTboXZ0&t=1332s"
            >
              “How do you balance the needs of different user personas?”
            </a>{" "}
            — Evil Martians roundtable discussion
          </li>
          <li>
            <a
              css={externalLink}
              href="https://youtu.be/3VuZvTeXbKQ?list=PLR38WdMdLF9sFCz15rbSQzMQrYYZ-ObiO&t=122"
            >
              The Ethics of Product Design
            </a>{" "}
            — ENCRYPT Conference
          </li>
          <li>
            <a
              css={externalLink}
              href="https://www.youtube.com/watch?v=Hp_cJGwT1Jc&list=PLR38WdMdLF9sFCz15rbSQzMQrYYZ-ObiO&index=4"
            >
              Gatsby Admin Product Design
            </a>{" "}
            — Gatsby Conf
          </li>
        </ul>
      </main>
    </Layout>
  );
}
