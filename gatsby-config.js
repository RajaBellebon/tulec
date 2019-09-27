module.exports = {
  siteMetadata: {
    title: 'Down the Code',
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Nepal',
        link: '/nepal',
      },
      {
        name: 'Wedding Shooting',
        link: '/wedding-shooting',
      },
      {
        name: 'Western Australia',
        link: '/western-australia',
      },
      {
        name: 'New Zealand',
        link: '/new-zealand',
      },
      {
        name: 'Northern Territory',
        link: '/northern-territory',
      },
      {
        name: 'Data projects',
        link: '/data-projects',
      },
      {
        name: 'Blogs',
        link: '/blogs',
      },
      {
        name: 'About us',
        link: '/about-us',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `nepal`,
        path: `${__dirname}/src/images/nepal`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `wedding`,
        path: `${__dirname}/src/images/wedding`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `wa`,
        path: `${__dirname}/src/images/wa`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `nz`,
        path: `${__dirname}/src/images/nz`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `nt`,
        path: `${__dirname}/src/images/nt`,
      },
    },
    // https://github.com/RajaBellebon/tulec/issues/16
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/src/blogs`,
    //     name: `blogs`,
    //   },
    // },
    `gatsby-transformer-remark`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#375E97',
        theme_color: '#375E97',
        display: 'minimal-ui',
        icon: 'src/images/tulec.png', // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
