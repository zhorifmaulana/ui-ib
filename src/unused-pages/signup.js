import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SignUp from "../components/SignUp"

const SignUpPage = () => (
  <Layout noFooter={true}>
    <SEO title="Sign Up" lang="en" />
    <SignUp />
  </Layout>
)

export default SignUpPage
