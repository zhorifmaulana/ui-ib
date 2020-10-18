module.exports = {
  siteMetadata: {
    title: `Innovation Battlefield`,
    description: `Innovation Battlefield 2.0 merupakan kompetisi desain UX dengan rangkaian acara yang terdiri dari Masterclass, Battlefield, dan Exhibition.`,
    author: `@darklordace`,
    viewPortScale: `width=device-width, initial-scale=0.9, shrink-to-fit=no`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        pure: true,
        displayName: process.env.NODE_ENV !== "production",
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `innovation-battlefield-2020`,
        short_name: `innovation-battlefield`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo_favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
