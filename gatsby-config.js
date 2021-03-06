module.exports = {
  siteMetadata: {
    title: 'The Coleman School of Dance',
    author: '@creativeswirl',
    description:
      'A Dance School in New Rochelle, New York instilling a love of dance and encouraging creativity in the community',
    url: 'https://www.thecolemandance.com',
    image: 'images/pic04.jpg',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'The Coleman School of Dance',
        short_name: 'Coleman Dance',
        start_url: '/',
        background_color: '#119da4',
        theme_color: '#119da4',
        display: 'standalone',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
