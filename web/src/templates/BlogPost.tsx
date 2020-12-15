import React from "react";
import { graphql } from "gatsby";
import Blog from "../components/Blog";
import Layout from "../components/Layout";
import { toPlainText } from "../lib/helpers";
import SEO from "../components/SEO";

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        ...SanityImage
        alt
      }
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawBody(resolveReferences: { maxDepth: 5 })
      authors {
        _key
        author {
          image {
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
          name
        }
      }
    }
  }
`;

const BlogPostTemplate = (props) => {
  const { data, errors } = props;
  const post = data && data.post;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" image={undefined} />}
      {post && (
        <SEO
          title={post.title || "Untitled"}
          description={toPlainText(post._rawExcerpt)}
          image={post.mainImage}
        />
      )}

      {errors && <div> ERROR</div>}

      {post && <Blog {...post} />}
    </Layout>
  );
};

export default BlogPostTemplate;
