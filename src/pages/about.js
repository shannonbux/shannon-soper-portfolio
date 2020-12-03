import React from "react"
import { graphQL } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import { rhythm } from "../utils/typography"

export default function About({ data }) {
  return (
    <Layout>
      <h1>Nice to meet you :)</h1>
      <p>
        I'm a product designer with 3+ years of doing remote research and design
        for developer tools.
      </p>

      <StaticImage
        src="../pages/images/profile-2019.JPG"
        maxWidth={700}
        layout="constrained"
        placeholder="dominantColor"
        alt="empathy map for plugin library"
        css={{ marginBottom: rhythm(1) }}
      />

      <h2>Apps:</h2>
      <div>
        <ul>
          <li>Zoom</li>
          <li>Usertesting.com</li>
          <li>FullStory</li>
          <li>Figma</li>
          <li>
            <a href="https://github.com/shannonbux">Find me on GitHub</a>
          </li>
          <li>
            <a href="https://twitter.com/shannonb_ux">Follow me on Twitter</a>
          </li>
        </ul>
      </div>
      <br></br>
      <h2>Background:</h2>
      <div>
        <ul>
          <li>MA in English: Rhetoric emphasis</li>
          <li>
            Instructional designer for online and face-to-face classes for 6
            years
          </li>
          <li>
            After years of discussing, with anyone willing to listen, the
            particular failings of poorly designed things, Shannon discovered
            she could get paid for this strange hobby. Other hobbies: joking w/
            family and friends, asking her cute dog "how did you get so cute?",
            and hiking w/ hubs.
          </li>
        </ul>
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
