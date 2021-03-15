// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const clientConfig = require("./client-config");

const isProd = process.env.NODE_ENV === "production";

const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: 'StartIT konferansen',
    titleTemplate: `%s | StartIT`,
    siteUrl: `https://www.startit2021.no`,
    description: `StartIT har som formål å motivere og inspirere
    studentene ved NTNU til å ville jobbe med å
    løse problemer ved hjelp av innovasjon og
    teknologien som de lærer her på NTNU.
    Vi ønsker å skifte fokuset fra “hvor kan man tjene
    mest penger” til “hvordan kan man være med
    å løse de mest spennende problemene vi står
    ovenfor i dag”.`,
    image: `/preview_img.png`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'StartIT',
        short_name: 'starter',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `fira code\:300,400,400i,700,900`,
          `karma\:400,700`,
        ],
        display: 'swap'
      }
    },
    "gatsby-plugin-typescript",
  ],
};
