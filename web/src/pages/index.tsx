import { graphql } from "gatsby";
import React from "react";
import Typing from 'react-typing-animation';
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

export const query = graphql`
  query {
    StartNTNU: file(relativePath: { eq: "Startlogo.jpg" }) {
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
    <>
    <SEO />
    <Layout>
      <Container>
        <Title><span style={{color: '#BD6631'}}>START</span>IT 2021</Title>
        <Typing>
        <SubTitle>En innovativ konferanse.</SubTitle>
        </Typing>
        <Article>
          {" "}
          På NTNU utdannes det for øyeblikket mange tusen studenter som snart
          skal ut i jobb og må finne ut hva de vil jobbe med.
          StartIT har som formål å motivere og inspirere studentene ved NTNU til
          å ville jobbe med å løse problemer ved hjelp av innovasjon og
          teknologien som de lærer her på NTNU.
          <br /><br />
        Vi ønsker å skifte fokuset fra “hvor kan man tjene mest
          penger” til “hvordan kan man være med å løse de mest spennende
          problemene vi står ovenfor i dag”.
         Dette forsøker vi å gjøre ved å vise mulighetene
          som finnes til å jobbe med innovasjon innenfor teknologi. Det kan være
          alt fra å vise frem de mest innovative inhouse bedriftene, de mest
          kreative konsulentselskapene, de kuleste startupsene, eller hvordan
          man kan starte noe eget.
        </Article>
        </Container>
    </Layout>
    </>
  );
}

const SubTitle = styled.h2`
  margin: 0 auto;
  justify-content: center;
  text-align: center;
`;

const Article = styled.p`
  font-size: 20px;
  line-height: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 24px auto 10px auto;
  @media (max-width: 1268px) {
    font-size: 16px;
  }
  @media (max-width: 800px) {
    font-size: 16px;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 50px;
  text-align: center;
  margin-top: 7%;
  @media (max-width: 1268px) {
    font-size: 30px;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  align-content: center;
  flex-direction: column;
  max-width: 900px;
`
