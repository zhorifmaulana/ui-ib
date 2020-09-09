import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPage from "../components/LandingPage"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LandingPage />
  </Layout>
)

export default IndexPage
