const path = require(`path`)

const allSlugQuery = `
  query AllSlugQuery {
    allEventsJson {
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
  const { allEventsJson } = query.data

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
}
