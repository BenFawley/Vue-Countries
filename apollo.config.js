module.exports = {
    client: {
      service: {
        name: 'Rezkit Countries',
        // URL to the GraphQL API
        url: 'https://graphql.country/graphql',
      },
      // Files processed by the extension
      includes: [
        'src/**/*.vue',
        'src/**/*.js',
      ],
    },
  }