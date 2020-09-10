import React, { Component } from "react"
import { graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GuidebooksPage from "../components/GuidebooksPage"

export default class GuidebooksTemplate extends Component {
  render() {
    const { guidebooksJson, imageSharp } = this.props.data
    const theme = {
      topBgSrc: imageSharp.fluid.src
    }

    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <SEO title={guidebooksJson.title} />
          {guidebooksJson.title && (
            <GuidebooksPage guidebook={guidebooksJson} />
          )}
        </Layout>
      </ThemeProvider>
    )
  }
}

export const query = graphql`
  query EachGuidebookQuery($slug: String!, $topBackground: String!) {
    guidebooksJson(slug: { eq: $slug }) {
      slug
      title
      shortdesc
      filename
      hadiahList {
        imgName
      }
    }
    imageSharp(fixed: {originalName: { eq: $topBackground }}) {
      fluid {
        src
      }
    }
  }
`
