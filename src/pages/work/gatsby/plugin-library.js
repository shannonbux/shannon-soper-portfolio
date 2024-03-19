import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../../components/layout"

export default function PluginLibrary() {
  return (
    <Layout>
      <div css={{ maxWidth: 700, marginBottom: 32 }}>
        <h1 css={{ marginBottom: 24 }}>Gatsby Plugin Library</h1>
        <StaticImage
          src="../../library/plugin-tweet.png"
          aspectRatio={3 / 2}
          width={700}
          alt="work stuff"
          css={{ marginBottom: 16 }}
        />
        <h2>Background & Impact</h2>
        <div css={{ marginBottom: 24 }}>
          <p>
            Zaddik: Are you interested in science? Dr. Rodney McKay: I'm not
            sure that's what I would call this, but yes.
          </p>
          <p>
            Dr. Rodney McKay: I'm sorry, medicine is about as much of a science
            as... oh, I don't know, voodoo?
          </p>
          <p>
            Elizabeth Weir, Ph. D.: [to Caldwell about Sheppard] You making
            sweeping changes to how Sheppard ran things only hours after
            assuming the position sends only one message; that he's not coming
            back!{" "}
          </p>
        </div>
        <div css={{ display: `flex`, justifyContent: `space-between` }}>
          <div>
            <h3 css={{ marginBottom: 8 }}>MY ROLES</h3>
            <ul css={{ listStyleType: `none`, marginLeft: 0 }}>
              <li css={{ marginBottom: 4 }}>UX Research</li>
              <li css={{ marginBottom: 4 }}>MVP Definition</li>
              <li css={{ marginBottom: 4 }}>Prototyping</li>
              <li css={{ marginBottom: 4 }}>Testing</li>
            </ul>
          </div>
          <div>
            <h3 css={{ marginBottom: 8 }}>LENGTH</h3>
            <ul css={{ listStyleType: `none`, marginLeft: 0 }}>
              <li css={{ marginBottom: 4 }}>4 months</li>
            </ul>
          </div>
          <div>
            <h3 css={{ marginBottom: 8 }}>SCOPE</h3>
            <ul css={{ listStyleType: `none`, marginLeft: 0 }}>
              <li css={{ marginBottom: 4 }}>Dynamic page, static tutorial</li>
            </ul>
          </div>
          <div>
            <h3 css={{ marginBottom: 8 }}>TEAM</h3>
            <ul css={{ listStyleType: `none`, marginLeft: 0 }}>
              <li css={{ marginBottom: 4 }}>Visual Designer, Flo</li>
              <li css={{ marginBottom: 4 }}>Developer, Cassie</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
