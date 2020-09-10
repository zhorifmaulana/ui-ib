import React, { Component } from "react"
import { graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EventsPage from "../components/EventsPage"

export default class EventsTemplate extends Component {
  render() {
    const { eventsJson, imageSharp } = this.props.data
    const theme = {
      eventColor: eventsJson.color,
      topBgSrc: imageSharp.fluid.src
    }

    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <SEO title={eventsJson.name} />
          <div className="layout">
            {eventsJson.name && (
              <EventsPage event={eventsJson} />
            )}
          </div>
        </Layout>
      </ThemeProvider>
    )
  }
}

export const query = graphql`
  query EachEventQuery($slug: String!, $topBackground: String!) {
    eventsJson(slug: { eq: $slug }) {
      slug
      name
      shortdesc
      color
      longdesc
      guidebookPath
      video
      timelineImage
      whyTitle
      whyDesc {
        photo
        desc
      }
      faqList {
        title
        content
      }
    }
    imageSharp(fixed: {originalName: { eq: $topBackground }}) {
      fluid {
        src
      }
    }
  }
`
