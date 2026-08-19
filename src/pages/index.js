import React from "react"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

// Peach block behind the hero. Flip to true to bring it back.
const showAccentBlock = false

export default function Home({ data }) {
  return (
    <Layout>
      <div
        css={{
          display: `flex`,
          position: `relative`,
          marginTop: 128,
          // Children are [text, photo]; column-reverse lifts the photo above
          // the text without changing reading order.
          "@media (max-width: 720px)": {
            flexDirection: `column-reverse`,
          },
        }}
      >
        <div
          css={{
            marginTop: 32,
            flex: 1,
            paddingRight: 32,
            "@media (max-width: 720px)": {
              paddingRight: 0,
            },
          }}
        >
          <h1 css={{ fontWeight: 500, fontSize: 36, marginBottom: 48 }}>
            Hi! I’m Shannon.
          </h1>
          <h1 css={{ fontWeight: 500, fontSize: 36, marginBottom: 48 }}>
            I’m a{" "}
            <span
              css={css`
                color: #ec5800;
              `}
            >
              Product Designer
            </span>{" "}
            with 8 years’ experience designing elegant solutions to complex problems.
          </h1>
        </div>
        <div
          css={{
            flex: 1,
            display: `flex`,
            justifyContent: `flex-end`,
          }}
        >
          <StaticImage
            src="./images/profile-2019.JPG"
            aspectRatio={0.8333333}
            width={400}
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
            layout="constrained"
            alt="a photo of me in an orange jacket in front of stone buildings in Blockley, England."
            css={{
              borderRadius: 8,
              overflow: `hidden`,
              "@media (max-width: 720px)": {
                width: `100%`,
              },
            }}
          />
        </div>
        {showAccentBlock && (
          <div
            css={{
              width: `66.6666%`,
              height: 264,
              position: `absolute`,
              background: `#FFF1E9`,
              top: 88,
              "z-index": -1,
              right: 0,
              "@media (min-width: 1280px)": {
                right: 64,
              },
            }}
          />
        )}
      </div>
    </Layout>
  )
}
