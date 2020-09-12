import React, { Component } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { graphql } from "gatsby";
import Img from "gatsby-image";

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
      <Header />
      <ImageWrapper>
        <StartITlogo>
          <Img fluid={data.StartIT.childImageSharp.fluid} alt="StartIt logo" />
        </StartITlogo>
        <Title>StartIT 2020</Title>
        <StartNTNUlogo>
          <Img
            fluid={data.StartNTNU.childImageSharp.fluid}
            alt="StartNTNU logo"
          />
        </StartNTNUlogo>
      </ImageWrapper>
    </div>
  );
}

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
