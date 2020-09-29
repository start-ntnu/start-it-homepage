import React, { Fragment } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { GlobalStyle } from "../globalStyles";
export const query = graphql`
  query {
    StartNTNU: file(relativePath: { eq: "Startlogo.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    StartIT: file(relativePath: { eq: "logo.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default function App({ data }) {
  return (
    <div className="App">
      <Fragment>
        <GlobalStyle></GlobalStyle>
        <Header />
        <ImageWrapper>
          <StartITlogo>
            <Img
              fluid={data.StartIT.childImageSharp.fluid}
              alt="StartIt logo"
            />
          </StartITlogo>
          <Title>StartIT 2020</Title>
          <Article>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fringilla diam ac fringilla ornare. Maecenas in arcu consectetur,
            laoreet nunc quis, lacinia nisi. Duis suscipit hendrerit lorem, ac
            condimentum elit rutrum et. Quisque ultrices, dolor vitae suscipit
            scelerisque, nibh leo dignissim felis, non sollicitudin leo sem et
            nisi. Nullam mauris nulla, semper et neque at, dictum venenatis
            nisi. Fusce vestibulum elit eget urna sagittis sodales. Duis
            suscipit hendrerit lorem, ac condimentum elit rutrum et. Quisque
            ultrices, dolor vitae suscipit scelerisque, nibh leo dignissim
            felis, non sollicitudin leo sem et nisi. Nullam mauris nulla, semper
            et neque at, dictum venenatis nisi. Fusce vestibulum elit eget urna
            sagittis sodales.
          </Article>
          <StartNTNUlogo>
            <Img
              fluid={data.StartNTNU.childImageSharp.fluid}
              alt="StartNTNU logo"
            />
          </StartNTNUlogo>
        </ImageWrapper>
      </Fragment>
    </div>
  );
}

const Article = styled.p`
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1268px) {
    font-size: 24px;
  }
  @media (max-width: 800px) {
    font-size: 16px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6%;
  margin-left: auto;
  margin-right: auto;
  height: 70%;
  width: 70%;
`;

const StartNTNUlogo = styled.div`
  margin-top: 5%;
  margin-right: auto;
  margin-left: auto;
  width: 50%;
`;

const StartITlogo = styled.div`
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  margin-right: auto;
  margin-left: auto;
  width: 40%;
  height: 20%;
  animation: rotation 4s infinite linear;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 7%;
  @media (max-width: 1268px) {
    font-size: 40px;
  }
`;
