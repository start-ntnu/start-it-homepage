import React, { Fragment } from "react";
import Layout from "../components/Layout";
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

    Casper: file(relativePath: { eq: "members/Casper.jpg" }) {
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
    <Layout>
      <div className="App">
        <Title>The team</Title>
        <PictureContainer>
          <PersonContainer>
            <ImageWrapper>
              <Img fluid={data.Isabel.childImageSharp.fluid} alt="Isabel" />
            </ImageWrapper>
            <Name>Isabel</Name>
            <Email>isabel.slorer@startntnu.no </Email>
          </PersonContainer>
          <PersonContainer>
            <ImageWrapper>
              <Img fluid={data.Andreas.childImageSharp.fluid} alt="Andreas" />
            </ImageWrapper>
            <Name>Andreas</Name>
            <Email>andreas.rikheim@startntnu.no </Email>
          </PersonContainer>
          <PersonContainer>
            <ImageWrapper>
              <Img fluid={data.Mille.childImageSharp.fluid} alt="Mille" />
            </ImageWrapper>
            <Name>Mille</Name>
            <Email>mille.richardsen@startntnu.no </Email>
          </PersonContainer>
        </PictureContainer>
        <PictureContainer>
          <PersonContainer>
            <ImageWrapper>
              <Img fluid={data.Snorre.childImageSharp.fluid} alt="Snorre" />
            </ImageWrapper>
            <Name>Snorre</Name>
            <Email>snorre.barku@startntnu.no</Email>
          </PersonContainer>
          <PersonContainer>
            <ImageWrapper>
              <Img fluid={data.Casper.childImageSharp.fluid} alt="Casper" />
            </ImageWrapper>
            <Name>Casper</Name>
            <Email>casper.feng@startntnu.no</Email>
          </PersonContainer>
        </PictureContainer>
      </div>
    </Layout>
  );
}

const Name = styled.h2`
  font-weight: bold;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 0;
  @media (max-width: 1268px) {
    font-size: 26px;
  }
`;
const Email = styled.h2`
  margin-top: 0;
  font-weight: bold;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @media (max-width: 1268px) {
    font-size: 18px;
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
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 20%;
  height: 40%;
  @media (max-width: 800px) {
    flex-direction: column;
    width: 40%;
  }
`;

const ImageWrapper = styled.div`
  margin: auto;
  height: 100%;
  width: 100%;
`;
