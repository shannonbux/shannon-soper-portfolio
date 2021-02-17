import React from "react"
import { css } from "@emotion/react"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  return (
    <Layout>
      <div>
        <div
          css={css`
            color: #ec5800;
            margin-bottom: 4rem;
          `}
        >
          <h1>
            I’m a{" "}
            <span
              css={css`
                color: #ec5800;
              `}
            >
              Product Designer
            </span>{" "}
            with 3+ years experience designing{" "}
            <span
              css={css`
                color: #ec5800;
              `}
            >
              developer tools
            </span>
            , looking for my next role.{" "}
          </h1>
        </div>
        <div css={{ textAlign: `center` }}>
          <StaticImage
            src="./images/therapy-two.jpg"
            formats={["auto", "webp", "avif"]}
            maxWidth={400}
            layout="constrained"
            alt="UX therapy"
            css={{
              margin: `0 auto`,
              marginBottom: rhythm(1),
            }}
          />
        </div>
        <div
          css={css`
            text-align: center;
            display: block;
            font-style: italic;
            margin-bottom: 4rem;

            @media (min-width: 720px) {
              font-size: 20px;
            }
            font-size: 16px;
          `}
        >
          “So tell me, how did that landing page
          <br /> make you feel?”
        </div>
        <h2>Projects</h2>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                  text-decoration: underline;
                  color: #000000;
                `}
              >
                {node.frontmatter.title}
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
        <br></br>
        <br></br>
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
            <li>Zoom</li>
            <li>Usertesting.com</li>
            <li>FullStory</li>
            <li>Figma</li>
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
          <StaticImage
            src="./images/profile-2019.JPG"
            maxWidth={700}
            formats={["auto", "webp", "avif"]}
            layout="constrained"
            alt="empathy map for plugin library"
            css={{
              marginTop: rhythm(1),
              marginBottom: rhythm(1),
            }}
          />
          <p>
            After years of discussing, with anyone willing to listen, the
            particular failings of poorly designed things, I discovered I could
            get paid for this hobby. Other hobbies: joking w/ family and
            friends, asking my cute baby and dog "how did you get so cute?", and
            hiking w/ hubs.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
