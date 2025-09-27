module.exports = {
  siteMetadata: {
    title: 'JobSphere - Professional Job Board',
    description: `
      JobSphere connects talented professionals with great opportunities
    `,
    siteUrl: 'https://jobsphere.com',
    image: 'your og image url',
    author:  'JobSphere',
    organization: {
      name: 'JobSphere',
      url: 'https://jobsphere.com',
      logo: 'https://jobsphere.com/logo.svg',
    },
  },
  plugins: [
    'gatsby-plugin-sass',
    '@bumped-inc/gatsby-plugin-optional-chaining',
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-root-import',
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "open-job-board",
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
          // Setting this parameter is optional
          anonymize: true
        },
        facebookPixel: {
          pixelId: 'YOUR_FACEBOOK_PIXEL_ID'
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },
  ],
}