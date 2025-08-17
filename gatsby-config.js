```javascript
module.exports = {
  siteMetadata: {
    title: 'My Portfolio',
    description: 'A personal portfolio website showcasing my work',
    author: '@yourusername',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'My Portfolio',
        short_name: 'Portfolio',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // Path to your icon
      },
    },
    'gatsby-plugin-sass',
  ],
};
```

FILENAME: src/pages/index.js