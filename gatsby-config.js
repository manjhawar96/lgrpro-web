module.exports = {
  siteMetadata: {
    title: 'LGR',
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        families: ['Open Sans', 'Nunito'],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'LGR',
        short_name: 'LGR',
        start_url: '/',
        icon: 'src/images/gatsby-icon.png',
      },
    },
  ],
};
