import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great. But scroll down first</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, marginTop: 800 }}>
      <Image />
    </div>
    <AniLink to="/page-2/" paintDrip hex={"#fc0000"}>
      Go to page 2
    </AniLink>
  </Layout>
)

export default IndexPage
