import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SignIn from "../components/SignIn"

const SignInPage = () => (
  <Layout noFooter={true}>
    <SEO title="Sign In" lang="en" />
    <SignIn />
  </Layout>
)

export default SignInPage
