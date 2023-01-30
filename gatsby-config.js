/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  // siteMetadata: {
  //   title: `Gatsby Starter Blog`,
  //   author: {
  //     name: `Kyle Mathews`,
  //     summary: `who lives and works in San Francisco building useful things.`,
  //   },
  //   description: `A starter blog demonstrating what Gatsby can do.`,
  //   siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
  //   social: {
  //     twitter: `kylemathews`,
  //   },
  // },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-postcss",
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://172.105.4.133:1337",
        accessToken:
          "90c49be52a27d0428665239902914280975a5ac7c35fe55e2e091580d3b0d97ac743930aa813cfcce4c5ea70d028e5b192400b64d8d000d54ef3438e11e18b1e7778768cec5defa58a44a8f710f78322160ec80235c2b734261fdb7eb7d323e9a58744fc222106612b0d09c4a09e36d48060c78968625689d6f2f781fd9fb3f1",
        collectionTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "article",
          "career",
          "testimonial",
          // {
          //   singularName: "article",
          //   queryParams: {
          //     publicationState:
          //       process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
          //     populate: {
          //       cover: "*",
          //       blocks: {
          //         populate: "*",
          //       },
          //     },
          //   },
          // },
          // {
          //   singularName: "author",
          // },
        ],
        singleTypes: [
          {
            singularName: "about",
            queryParams: {
              populate: {
                blocks: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "global",
            queryParams: {
              populate: {
                favicon: "*",
                blocks: {
                  populate: "*",
                },
              },
            },
          },
        ],
      },
    },
    // old plugins
    `gatsby-plugin-image`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Gatsby Starter Blog`,
    //     short_name: `Gatsby`,
    //     start_url: `/`,
    //     background_color: `#ffffff`,
    //     // This will impact how browsers show your PWA/website
    //     // https://css-tricks.com/meta-theme-color-and-trickery/
    //     // theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
  ],
}
