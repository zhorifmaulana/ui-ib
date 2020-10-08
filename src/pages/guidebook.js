import React, { Component } from "react"
import { graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GuidebookPage from "../components/GuidebookPage"

export default class Guidebook extends Component {
  render() {
    const { imageSharp, allEventsJson } = this.props.data
    const theme = {
      topBgSrc: imageSharp.fluid.src
    }
    const eventsWhyDesc = allEventsJson.nodes.map((val) => val.whyDesc)
    let whyList = eventsWhyDesc[0]
    for (let i = 1; i < eventsWhyDesc.length; ++i) {
      whyList = whyList.concat(eventsWhyDesc[i])
    }

    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Guidebook" />
          <GuidebookPage whyList={whyList} />
        </Layout>
      </ThemeProvider>
    )
  }
}

export const query = graphql`
  query GuidebookQuery {
    allEventsJson {
      nodes {
        whyDesc {
          photo
          desc
        }
      }
    }
    imageSharp(fixed: {originalName: { eq: "guidebook_topbg.png" }}) {
      fluid {
        src
      }
    }
  }
`
