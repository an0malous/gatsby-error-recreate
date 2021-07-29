module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "DFJ Gatsby Typescript Starter",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-typescript",
    "gatsby-plugin-typegen",
    "gatsby-plugin-testing",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
