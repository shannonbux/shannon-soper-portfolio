import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import { rhythm } from "../utils/typography"

export default function About({ data }) {
  return (
    <Layout>
      <h1>Nice to meet you :)</h1>
      <p>
        I'm a Product Designer with a passion for UX Research. I have 3+ years
        designing developer tools and 6+ years designing learning experiences.
      </p>
      <StaticImage
        src="../pages/images/profile-2019.JPG"
        width={700}
        layout="constrained"
        formats={["auto", "webp", "avif"]}
        alt="empathy map for plugin library"
        css={{ marginBottom: rhythm(1) }}
      />

      <h2>Apps</h2>
      <div>
        <ul>
          <li>Zoom</li>
          <li>Usertesting.com</li>
          <li>FullStory</li>
          <li>Figma</li>
        </ul>
      </div>
      <h2>Links</h2>
      <div>
        <ul>
          <li>
            <a href="https://github.com/shannonbux">Find me on GitHub</a>
          </li>
          <li>
            <a href="https://twitter.com/shannonb_ux">Follow me on Twitter</a>
          </li>
          <li>
            <a href="/shannon-soper-resume.pdf">Resume</a>
          </li>
        </ul>
      </div>
      <h2>Background</h2>
      <div>
        <ul>
          <li>MA in English: Rhetoric emphasis</li>
          <li>
            Instructional designer for online and face-to-face classes for 6
            years
          </li>
        </ul>
      </div>
      <div>
        <h2>How I became a designer</h2>
        <p>
          After years of discussing, with anyone willing to listen, the
          particular failings of poorly designed things, I discovered I could
          get paid for this hobby. Other hobbies: joking w/ family and friends,
          asking my cute baby and dog "how did you get so cute?", and hiking w/
          hubs.
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
