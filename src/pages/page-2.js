import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2. Scroll down.</p>
    <AniLink to="/" paintDrip hex={"#fc0000"}>
      Back to Homepage
    </AniLink>
  </Layout>
)

export default SecondPage
