import { format } from "date-fns";
import { Link } from "gatsby";
import React from "react";
import { buildImageObj, cn, getBlogUrl } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import styled from "styled-components";
import PortableText from "./PortableText";

function BlogPostPreview(props) {
  return (
    <StyledLink to={getBlogUrl(props.slug.current)}>
      <div>
        {props.mainImage && props.mainImage.asset && (
          <StyledImage
            src={
              imageUrlFor(buildImageObj(props.mainImage))
                .width(450)
                .height(Math.floor((9 / 16) * 450))
                .auto("format")
                .url()!
            }
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <BlogInfo>
        <ExcerptTitle>{props.title}</ExcerptTitle>
        {props._rawExcerpt && (
          <ExcerptText>
            <PortableText blocks={props._rawExcerpt} />
          </ExcerptText>
        )}
        <ExcerptText>Publisert {format(props.publishedAt, "MMMM Do, YYYY")}</ExcerptText>
      </BlogInfo>
    </StyledLink>
  );
}

const BlogInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  width: 60%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const ExcerptTitle = styled.h3`
  font-size: 1.5rem;
  @media (max-width: 800px) {
    font-size: 1rem;
  }
  @media (max-width: 500px) {
    font-size: 1.1rem;
  }
`;
const ExcerptText = styled.div`
  font-size: 1.2rem;
  @media (max-width: 800px) {
    font-size: 0.7rem;
  }
  @media (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

const StyledImage = styled.img`
  margin-left: 3%;
  margin-right: 3%;
  width: 80%;
`;

const StyledLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  color: black;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export default BlogPostPreview;
