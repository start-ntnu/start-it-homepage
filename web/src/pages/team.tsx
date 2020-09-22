import React, { Component } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { graphql } from "gatsby";
import Img from "gatsby-image";

export const membersQuery = graphql`
  query {
    Isabel: file(relativePath: { eq: "members/Isabel.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    Andreas: file(relativePath: { eq: "members/Andreas.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    Mille: file(relativePath: { eq: "members/Mille.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    Snorre: file(relativePath: { eq: "members/Snorre.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    Casper: file(relativePath: { eq: "members/Casper.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default function Team({ data }) {
  return (
    <div className="App">
      <Header />
      <Title>The team</Title>
      <PictureContainer>
        <PersonContainer>
          <ImageWrapper>
            <Img fluid={data.Isabel.childImageSharp.fluid} alt="Isabel" />
          </ImageWrapper>
          <Name>Isabel</Name>
        </PersonContainer>
        <PersonContainer>
          <ImageWrapper>
            <Img fluid={data.Andreas.childImageSharp.fluid} alt="Andreas" />
          </ImageWrapper>
          <Name>Andreas</Name>
        </PersonContainer>
        <PersonContainer>
          <ImageWrapper>
            <Img fluid={data.Mille.childImageSharp.fluid} alt="Mille" />
          </ImageWrapper>
          <Name>Mille</Name>
        </PersonContainer>
      </PictureContainer>
      <PictureContainer>
        <PersonContainer>
          <ImageWrapper>
            <Img fluid={data.Snorre.childImageSharp.fluid} alt="Snorre" />
          </ImageWrapper>
          <Name>Snorre</Name>
        </PersonContainer>
        <PersonContainer>
          <ImageWrapper>
            <Img fluid={data.Casper.childImageSharp.fluid} alt="Casper" />
          </ImageWrapper>
          <Name>Casper</Name>
        </PersonContainer>
      </PictureContainer>
    </div>
  );
}

const Name = styled.h2`
  font-weight: bold;
  font-size: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @media (max-width: 1268px) {
    font-size: 26px;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @media (max-width: 1268px) {
    font-size: 42px;
  }
  @media (max-width: 800px) {
    font-size: 30px;
  }
`;

const PictureContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: auto;
`;

const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 20%;
  height: 40%;
`;

const ImageWrapper = styled.div`
  margin: auto;
  height: 100%;
  width: 100%;
  @media (max-width: 1268px) {
    height: 50%;
    width: 50%;
  }
`;
