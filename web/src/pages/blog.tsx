import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import BlogPostPreviewList from "../components/BlogPostPreviewList";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import {
  filterOutDocsPublishedInTheFuture, filterOutDocsWithoutSlugs, mapEdgesToNodes
} from "../lib/helpers";

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return <Layout>ERROR</Layout>;
  }

  const site = (data || {}).site;
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
        image={undefined}
      />
      <div>
        <Title hidden><span style={{color: '#BD6631'}}>NYHETER</span></Title>
        {/*add styling*/}
        {postNodes && (
          <BlogPostPreviewList
            title="Blogginnlegg"
            nodes={postNodes}
            browseMoreHref="/archive/"
          />
        )}
      </div>
    </Layout>
  );
};

const Title = styled.h1`
  font-weight: bold;
  font-size: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @media (max-width: 1268px) {
    font-size: 36px;
  }
  @media (max-width: 800px) {
    font-size: 26px;
  }
`;

export default IndexPage;
