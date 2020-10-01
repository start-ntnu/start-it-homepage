import { format, distanceInWords, differenceInDays } from "date-fns";
import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import PortableText from "./PortableText";
import styled from "styled-components";

function BlogPost(props) {
  const { _rawBody, title, mainImage, publishedAt } = props;
  return (
    <article>
      {mainImage && mainImage.asset && (
        <ImageWrapper>
          <StyledImage
            src={
              imageUrlFor(buildImageObj(mainImage))
                .width(600)
                .height(Math.floor((9 / 16) * 600))
                .fit("crop")
                .auto("format")
                .url()!
            }
            alt={mainImage.alt}
          />
        </ImageWrapper>
      )}
      <div>
        <div>
          <div>
            <Title>{title}</Title>
            <Article>{_rawBody && <PortableText blocks={_rawBody} />}</Article>
          </div>
          <aside>
            {publishedAt && (
              <div>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), "MMMM Do, YYYY")}
              </div>
            )}
          </aside>
        </div>
      </div>
    </article>
  );
}

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
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

const Article = styled.p`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-left: 10%;
  margin-right: 10%;
  @media (max-width: 1268px) {
    font-size: 20px;
  }
  @media (max-width: 800px) {
    font-size: 16px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const ImageWrapper = styled.div`
  justify-content: center;
  align-content: center;
  margin-left: auto;
  margin-right: auto;
`;
const StyledImage = styled.img`
  margin-left: 20%;
  margin-right: 20%;
  width: 60%;
`;

export default BlogPost;