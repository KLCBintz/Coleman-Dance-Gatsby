module.exports = {
  siteMetadata: {
    title: 'The Coleman School of Dance',
    author: '@creativeswirl',
    description:
      'A Dance School in New Rochelle, New York instilling a love of dance and encouraging creativity in the community',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'The Coleman School of Dance',
        short_name: 'Coleman Dance',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
