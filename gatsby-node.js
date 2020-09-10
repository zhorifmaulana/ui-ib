const path = require(`path`)

const allSlugQuery = `
  query AllSlugQuery {
    allEventsJson {
      nodes {
        slug
        topBackground
      }
    }
    allGuidebooksJson {
      nodes {
        slug
        topBackground
      }
    }
  }
`

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const query = await graphql(allSlugQuery)
  const {
    allEventsJson,
    allGuidebooksJson
  } = query.data

  allEventsJson.nodes.forEach(({ slug, topBackground }) => {
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/events.js`),
      context: {
        slug: slug,
        topBackground: topBackground
      },
    })
  })

  allGuidebooksJson.nodes.forEach(({ slug, topBackground }) => {
    console.log(topBackground)
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/guidebooks.js`),
      context: {
        slug: slug,
        topBackground: topBackground
      },
    })
  })
}
