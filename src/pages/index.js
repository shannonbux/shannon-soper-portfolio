import React from "react";
import { css } from "@emotion/react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { ContactButtons } from "../components/contact";
import { StaticImage } from "gatsby-plugin-image";

function FeaturedArticle({ to, company, title, excerpt, children }) {
  return (
    <Link
      to={to}
      css={css`
        color: inherit;
        display: grid;
        grid-template-columns: 448px minmax(0, 1fr);
        gap: 32px;
        text-align: left;
        text-decoration: none;

        :hover h2 {
          text-decoration: underline;
          text-decoration-thickness: 1px;
          text-underline-offset: 4px;
        }

        @media (max-width: 900px) {
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        }

        @media (max-width: 720px) {
          grid-template-columns: 1fr;
          gap: 24px;
        }

        > [data-gatsby-image-wrapper] {
          border: 1px solid #d3d3d3;
          border-radius: 4px;
          box-sizing: border-box;
          overflow: hidden;
        }
      `}
    >
      {children}
      <div
        css={css`
          align-self: start;
          padding-top: 24px;

          @media (max-width: 720px) {
            padding-top: 0;
          }
        `}
      >
        <p
          css={css`
            font-size: 14px;
            font-weight: 400;
            line-height: 1.2;
            margin: 0;
            text-transform: uppercase;
          `}
        >
          {company}
        </p>
        <h2
          css={css`
            color: #333333;
            font-family: BioRhyme, Georgia, serif;
            font-size: 24px;
            font-weight: 400;
            line-height: 1.2;
            margin: 12px 0 8px;
          `}
        >
          {title}
        </h2>
        <p
          css={css`
            font-weight: 400;
            margin: 0;
          `}
        >
          {excerpt}
        </p>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <Layout>
      <main>
        <section
          css={css`
            display: grid;
            grid-template-columns: 512px 1fr 400px;
            align-items: start;
            margin-top: 0;

            @media (max-width: 900px) {
              grid-template-columns: minmax(0, 1fr) 320px;
              gap: 48px;
            }

            @media (max-width: 720px) {
              grid-template-columns: 1fr;
              gap: 32px;
              margin-top: 0;
            }
          `}
        >
          <div
            css={css`
              grid-column: 1;

              @media (max-width: 720px) {
                grid-row: 2;
              }
            `}
          >
            <h1
              css={css`
                color: #333333;
                font-family: BioRhyme, Georgia, serif;
                font-size: 32px;
                font-weight: 400;
                letter-spacing: -0.01em;
                line-height: 1.2;
                margin: 0;
              `}
            >
              I design products that work for real users &amp; businesses.
            </h1>
            <p
              css={css`
                margin: 24px 0 0;
                font-weight: 400;
              `}
            >
              I’m Shannon Bryn Soper, a Product Designer with 8 years’
              experience designing durable solutions to users’ problems at
              devtools companies: Gatsby, Postman, and Trunk.io.
            </p>
            <p
              css={css`
                margin: 24px 0 0;
                font-weight: 400;
              `}
            >
              I currently live in Salt Lake City, Utah with my husband and two
              kids. I enjoy cooking and reading science fiction and classic
              literature.
            </p>
            <div
              css={css`
                padding-top: 24px;
              `}
            >
              <ContactButtons compact />
            </div>
          </div>
          <div
            css={css`
              grid-column: 3;

              @media (max-width: 900px) {
                grid-column: 2;
              }

              @media (max-width: 720px) {
                grid-column: 1;
                grid-row: 1;
              }
            `}
          >
            <StaticImage
              src="./images/profile-2019.JPG"
              aspectRatio={4 / 5}
              width={400}
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
              layout="constrained"
              alt="a photo of me in an orange jacket in front of stone buildings in Blockley, England."
              css={css`
                border-radius: 8px;
                overflow: hidden;

                img {
                  object-fit: contain !important;
                }

                @media (max-width: 720px) {
                  width: min(400px, 100%);
                }
              `}
            />
          </div>
        </section>

        <section
          css={css`
            margin-top: 72px;
            padding-bottom: 72px;
            text-align: left;
          `}
        >
          <h2
            css={css`
              color: #333333;
              font-family: BioRhyme, Georgia, serif;
              font-size: 32px;
              font-weight: 400;
              line-height: 1.2;
              margin: 0 0 20px;
            `}
          >
            Featured Design Work
          </h2>
          <div
            css={css`
              display: grid;
              gap: 48px;
            `}
          >
            <FeaturedArticle
              to="/trunk-quarantining/"
              company="TRUNK.IO"
              title="Quarantine Status Model"
              excerpt="I redesigned the quarantine feature with increased visibility, a simplified mental model, and a way to save why the status changed."
            >
              <StaticImage
                src="./trunk-quarantining/quarantine-preview.jpg"
                aspectRatio={1.5}
                placeholder="dominantColor"
                formats={["auto", "webp", "avif"]}
                layout="fullWidth"
                alt="Trunk's quarantine status interface"
                css={css`
                  border: 1px solid #d2d2d2;
                `}
              />
            </FeaturedArticle>
            <FeaturedArticle
              to="/postman-aha-moment/"
              company="POSTMAN"
              title="New-User Onboarding Flow"
              excerpt="This design helped more Postman users experience their first “aha!” moment."
            >
              <StaticImage
                src="./postman-aha-moment/header-image-postman-aha-moment.png"
                aspectRatio={1.5}
                placeholder="dominantColor"
                formats={["auto", "webp", "avif"]}
                layout="fullWidth"
                alt="Postman onboarding flow"
                css={css`
                  border: 1px solid #d2d2d2;
                `}
              />
            </FeaturedArticle>
            <FeaturedArticle
              to="/gatsby-builds-dashboard/"
              company="GATSBY"
              title="Builds Dashboard"
              excerpt="This revised dashboard enabled Gatsby to come out of beta and launch its commercial offering."
            >
              <StaticImage
                src="./gatsby-builds-dashboard/builds-final-thumbnail.png"
                aspectRatio={1.5}
                placeholder="dominantColor"
                formats={["auto", "webp", "avif"]}
                layout="fullWidth"
                alt="Gatsby Builds dashboard"
                css={css`
                  border: 1px solid #d2d2d2;
                `}
              />
            </FeaturedArticle>
            <FeaturedArticle
              to="/onboarding/"
              company="GATSBY"
              title="Cloud Onboarding Flow"
              excerpt="I redesigned Gatsby Cloud onboarding with smart defaults to reduce the user’s cognitive load."
            >
              <StaticImage
                src="./onboarding/first-time-user-zoom.png"
                aspectRatio={1.5}
                placeholder="dominantColor"
                formats={["auto", "webp", "avif"]}
                layout="fullWidth"
                alt="Gatsby Cloud onboarding flow"
                css={css`
                  border: 1px solid #d2d2d2;
                `}
              />
            </FeaturedArticle>
            <FeaturedArticle
              to="/library/"
              company="GATSBY"
              title="Plugin Library"
              excerpt="The library I designed has grown from 51 plugins to more than 3,000."
            >
              <StaticImage
                src="./library/plugin-tweet.png"
                aspectRatio={1.5}
                placeholder="dominantColor"
                formats={["auto", "webp", "avif"]}
                layout="fullWidth"
                alt="Gatsby Plugin Library announcement"
                css={css`
                  border: 1px solid #d2d2d2;
                `}
              />
            </FeaturedArticle>
            <Link
              to="/work/"
              css={css`
                color: #2c46a8;
                font-size: 16px;
                font-weight: 400;
                justify-self: start;
                text-decoration: underline;
                text-decoration-thickness: 1px;
                text-underline-offset: 4px;
              `}
            >
              See more
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
