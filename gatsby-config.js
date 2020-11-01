module.exports = {
  siteMetadata: {
    title: `Julians Bastelecke`,
    author: {
      name: `Julian Stobbe`,
      summary: `some guy`,
    },

    description: `Algorithms and stuff.`,
    siteUrl: `http://78.46.228.140`,
    social: {
      twitter: ``,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`,
            },
          },
          `gatsby-remark-source-name`,

          {
          resolve: `gatsby-source-git`,
            options: {
              name: `Series Acceleration`,
              remote: `https://github.com/Atomtomate/SeriesAcceleration`,
              branch: `main`,
              // Only import the docs folder from a codebase.
              patterns: `docs/Article_**`
            }
          },
          {
            resolve: `gatsby-source-git`,
            options: {
              name: `Julia Tutorial`,
              remote: `https://github.com/Atomtomate/JuliaTutorial`,
              branch: `main`,
              // Only import the docs folder from a codebase.
              patterns: `docs/Article_**`
            }
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Julians Bastelecke`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
