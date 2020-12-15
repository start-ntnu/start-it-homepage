import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

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
        <Title><div><span style={{color: '#BD6631'}}>Teamet</span> 2021</div></Title>
        <PictureContainer>
          <PersonContainer>
            <ImageWrapper>
              <Img fluid={data.Isabel.childImageSharp.fluid} alt="Isabel" />
            </ImageWrapper>
            <Name><div><span style={{color: '#BD6631'}}>Isabel</span>  Slorer</div></Name>
            <Email>isabel.slorer@startntnu.no </Email>
          </PersonContainer>
          <PersonContainer>
            <ImageWrapper>
              <Img fluid={data.Andreas.childImageSharp.fluid} alt="Andreas" />
            </ImageWrapper>
            <Name><div><span style={{color: '#BD6631'}}>Andreas</span> Rikheim</div></Name>
            <Email>andreas.rikheim@startntnu.no </Email>
          </PersonContainer>
          <PersonContainer>
            <ImageWrapper>
              <Img fluid={data.Mille.childImageSharp.fluid} alt="Mille" />
            </ImageWrapper>
            <Name><div><span style={{color: '#BD6631'}}>Mille</span>  Richardsen</div></Name>
            <Email>mille.richardsen@startntnu.no </Email>
          </PersonContainer>
          <PersonContainer>
            <ImageWrapper>
              <Img fluid={data.Snorre.childImageSharp.fluid} alt="Snorre" />
            </ImageWrapper>
            <Name><div><span style={{color: '#BD6631'}}>Snorre</span> Barku</div></Name>
            <Email>snorre.barku@startntnu.no</Email>
          </PersonContainer>
          <PersonContainer>
            <ImageWrapper>
              <Img fluid={data.Casper.childImageSharp.fluid} alt="Casper" />
            </ImageWrapper>
            <Name><div><span style={{color: '#BD6631'}}>Casper</span>  Feng</div></Name>
            <Email>casper.feng@startntnu.no</Email>
          </PersonContainer>
        </PictureContainer>
      </div>
    </Layout>
  );
}

const Name = styled.h2`
  font-weight: bold;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 0;
  @media (max-width: 1268px) {
    font-size: 18px;
  }
  @media (max-width: 800px) {
    font-size: 16px;
  }
  @media (max-width: 550px) {
    font-size: 14px;
  }
`;
const Email = styled.h2`
  margin-top: 0;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @media (max-width: 1268px) {
    font-size: 18px;
  }
  @media (max-width: 800px) {
    font-size: 16px;
  }
  @media (max-width: 550px) {
    font-size: 14px;
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
  @media (max-width: 550px) {
    font-size: 24px;
  }
`;

const PictureContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: auto;
  flex-wrap: wrap;
`;

const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 400px;
  @media (max-width: 800px) {
    width: 300px;
  }
`;

const ImageWrapper = styled.div`
  margin: 0 auto;
  max-width: 500px;
  min-width: 300px;
`;
