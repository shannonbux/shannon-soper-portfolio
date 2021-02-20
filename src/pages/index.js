import React from "react"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  return (
    <Layout>
      <div css={{ display: `flex`, paddingLeft: `10%` }}>
        <div css={{ marginTop: 32, flex: 1, paddingRight: 32 }}>
          <h1 css={{ fontWeight: 500, fontSize: 36, marginBottom: 48 }}>
            Hi! I’m Shannon.
          </h1>
          <h1 css={{ fontWeight: 500, fontSize: 36, marginBottom: 48 }}>
            I'm a{" "}
            <span
              css={css`
                color: #ec5800;
              `}
            >
              Product Designer
            </span>{" "}
            with 7+ years experience, looking for my next role.
          </h1>
          <div css={{ fontSize: 24 }}>
            Share your thoughts about my portfolio at shannon.soper@gmail.com
          </div>
        </div>
        <div css={{ flex: 1 }}>
          <StaticImage
            src="./images/profile-2019.JPG"
            aspectRatio={0.8333}
            width={400}
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
            layout="constrained"
            alt="a photo of me in an orange jacket in front of stone buildings in Blockley, England."
            css={{}}
          />
        </div>
      </div>
      <div
        css={{
          width: `66.6666%`,
          height: 264,
          position: `absolute`,
          background: `#FFF1E9`,
          top: 216,
          right: 64,
          "z-index": -1,
        }}
      />
    </Layout>
  )
}
