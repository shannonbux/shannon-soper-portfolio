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
          problems. I have 3+ years designing developer tools and 6+ years
          designing learning experiences.
        </p>
        <p>
          After years of discussing, with anyone willing to listen, the
          particular failings of poorly designed things, I discovered I could
          get paid for this hobby. Other hobbies: joking w/ family and friends,
          asking my cute baby and dog: “how did you get so cute?”, and hiking w/
          hubs.
        </p>
        <StaticImage
          src="../pages/images/profile-2019.JPG"
          width={700}
          layout="constrained"
          placeholder="blurred"
          formats={["auto", "webp", "avif"]}
          alt="empathy map for plugin library"
          css={{ marginBottom: rhythm(1) }}
        />

        <h2>Talks</h2>
        <div className="videoWrapper">
          <iframe
            title="Shannon Soper Talk"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?list=PLR38WdMdLF9sFCz15rbSQzMQrYYZ-ObiO"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=dTl817c6G_E&list=PLR38WdMdLF9sFCz15rbSQzMQrYYZ-ObiO&index=2">
              Gatsby UX Research by Shannon Soper presented at 2018{" "}
              <a href="https://www.contentful.com/">Contentful</a> meetup in
              Berlin
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=3VuZvTeXbKQ&list=PLR38WdMdLF9sFCz15rbSQzMQrYYZ-ObiO&index=3">
              ENCRYPT Conference 2020
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=Hp_cJGwT1Jc&list=PLR38WdMdLF9sFCz15rbSQzMQrYYZ-ObiO&index=4">
              Gatsby Admin Product Design — presented at Gatsby Conf 2020
            </a>
          </li>
        </ul>
        <br></br>
        <br></br>
        <h2>Side projects</h2>
        <div>
          <ul>
            <li>
              <a href="https://www.instagram.com/peptodismaldesigns/">
                Peptodismal Designs
              </a>
            </li>
            <li>
              <a href="http://watson.surge.sh/">Cute dog</a>
            </li>
          </ul>
        </div>
        <h2>Apps</h2>
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
              <a href="/shannon-soper-resume.pdf">Resume</a>
            </li>
            <li>MA in English: Rhetoric emphasis</li>
            <li>
              Instructional designer for online and face-to-face classes for 6
              years
            </li>
          </ul>
        </div>
        <div>
          <h2>Contact Info</h2>
          <ul>
            <li>
              <a href="https://github.com/shannonbux">Find me on GitHub</a>
            </li>
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
