import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

export const query = graphql`
  query {
    Visma: file(relativePath: { eq: "partners/Visma.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  Iterate: file(relativePath: { eq: "partners/Iterate.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`;

export default function Partners({ data }) {
  return (
    <>
      <SEO title={"Samarbeidspartnere"} />
      <Layout>
        <Title><div>ÅRETS <span style={{color: '#BD6631'}}>SAMARBEIDS</span>PARTNERE</div></Title>
        <SubTitle>Hovedsamarbeidspartner - <span style={{color: '#BD6631'}}>Visma</span></SubTitle>
        <a href="https://www.visma.no/consulting/konsulenttjenester/" target="_blank"><ImageContainer fluid={data.Visma.childImageSharp.fluid} alt="Visma"/></a>
        <SubSubTitle>Samarbeidspartner - <span style={{color: '#BD6631'}}>Iterate</span></SubSubTitle>
        <a href="https://www.iterate.no/" target="_blank"><ImageContainer fluid={data.Iterate.childImageSharp.fluid} alt="Iterate"/></a>
      </Layout>
    </>)}

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

const SubTitle = styled.h2`
  text-align: center;
`;

const SubSubTitle = styled.h3`
  text-align: center;
`;

const ImageContainer = styled(Img)`
  width: 300px;
  margin: 32px auto;
`;
