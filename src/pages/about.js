import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import { rhythm } from "../utils/typography"

export default function About({ data }) {
  return (
    <Layout>
      <div css={{ maxWidth: 700 }}>
        <h1>Nice to meet you :)</h1>
        <p>
          I’m a Product Designer with a passion for solving difficult design
          problems. I have a background in teaching college-level writing and creating online learning experiences. In 2017, I switched to product design and have loved designing developer tools.
        </p>
        <p>
          Other hobbies: cooking, reading science fiction and classic literature, playing piano and guitar, taking art and improv classes, and hiking with my family.
        </p>
        <h2>Talks</h2>
        <h3>How Gatsby Does High-Impact, Low-Effort UX Research (and You Can Too!)</h3>
        <div className="videoWrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ohWWW3XLg-s?start=758" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <h2>More Talks</h2>
        <ul>
          <li>
          <a href="https://www.youtube.com/watch?v=PIhJtTboXZ0&t=1332s">
              "How do you balance the needs of different user personas?"
            </a>{" "}  —  <a href="https://evilmartians.com/">Evil Martians</a> roundtable discussion 2023
          </li>
          <li>
            <a href="https://youtu.be/3VuZvTeXbKQ?list=PLR38WdMdLF9sFCz15rbSQzMQrYYZ-ObiO&t=122">
              The Ethics of Product Design
            </a>{" "} — ENCRYPT Conference 2020
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=Hp_cJGwT1Jc&list=PLR38WdMdLF9sFCz15rbSQzMQrYYZ-ObiO&index=4">
              Gatsby Admin Product Design
            </a>{" "} — Gatsby Conf 2020
          </li>
        </ul>
        <br></br>
        <h2>Side projects</h2>
        <div>
          <ul>
            <li>
              <a href="https://thenopegame.gatsbyjs.io/">The Nope Game</a>{" "} — play this when you want to decide how strongly to say yes or no to a request
            </li>
            <li>
              <a href="https://www.instagram.com/discovered_ux/">
                Discovered UX
              </a>{" "} — my Instagram account, chronicling software and physical designs that are delightful, dismal, and everything in between
            </li>
            <li>
              <a href="http://watson.surge.sh/">Guide to Taking Care of Our Dog, Watson</a>
            </li>
          </ul>
        </div>
        <h2>Skills</h2>
        <div>
          <ul>
            <li>
              <a href="https://www.figma.com/">Figma</a>
            </li>
            <li>
              <a href="https://www.usertesting.com/">Usertesting</a>
            </li>
            <li>
              <a href="https://www.fullstory.com/">FullStory</a>
            </li>
          </ul>
        </div>
        <h2>Background</h2>
        <div>
          <ul>
            <li>
              <a href="/Resume-2024-poem.pdf">Resume</a>
            </li>
            <li>
              Contract Senior Product Designer at <a href="https://buildbetter.ai/">BuildBetter.ai</a>{" "} — 2023-2024
            </li>
            <li>
              Product Designer at <a href="https://www.postman.com/">Postman</a>{" "} — 2 years — 2021-2023
            </li>
            <li>
              Product Designer at <a href="https://www.gatsbyjs.com/">GatsbyJS</a>{" "} — 4 years — 2017-2021
            </li>
            <li>
              Instructional designer for online and face-to-face classes for 6
              years
            </li>
            <li>MA in English: Rhetoric emphasis</li>
          </ul>
        </div>
        <div>
          <h2>Contact Info</h2>
          <ul>
            <li>
              <a href="https://twitter.com/shannonb_ux">Follow me on Twitter</a>
            </li>
            <li>shannon.soper@gmail.com</li>
          </ul>
        </div>
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
