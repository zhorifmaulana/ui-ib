import React from "react"
import { graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExhibitionPage from "../components/ExhibitionPage"

const Exhibition = ({ data }) => {
  const { allDataJson, imageSharp } = data
  const event = allDataJson.nodes[0]

  const theme = {
    eventColor: event.color,
    topBgSrc: imageSharp.fluid.src
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Exhibition" />
        <div className="layout">
          <ExhibitionPage event={event} />
        </div>
      </Layout>
    </ThemeProvider>
  )
}

export const query = graphql`
  query ExhibitionPageQuery {
    allDataJson(filter: {name: {eq: "Exhibition"}}) {
      nodes {
        name
        shortdesc
        color
        longdesc
        exhibitions {
          photo
          title
          desc
        }
      }
    }
    imageSharp(fixed: {originalName: { eq: "event_3_topbg.png" }}) {
      fluid {
        src
      }
    }
  }
`

export default Exhibition
