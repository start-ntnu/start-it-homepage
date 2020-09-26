import React, { Fragment } from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import styled from "styled-components";
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
  }
`;

export default function App({ data }) {
  return (
    <Layout>
      <div className="App">
        <ImageWrapper>
          <Img
            fluid={data.StartNTNU.childImageSharp.fluid}
            alt="StartNTNU logo"
          />
        </ImageWrapper>
        <Title>Hvem er vi?</Title>
        <Article>
          Start NTNU er en non-profitt studentorganisasjon som jobber for at
          innovasjonsmiljøet på NTNU skal vokse og bli enda bedre! Dette gjør vi
          gjennom å avholde små og store arrangement for å inspirere nettopp
          DEG. Vi ønsker å nå ut til flest mulig av studentene på NTNU og jobber
          for å opprettholde et bredt utvalg av tematikk. Sitter du med en idè
          eller lurer på om du har en gründer i magen? Kom på arrangementene og
          la deg inspirere!
        </Article>
      </div>
    </Layout>
  );
}

const ImageWrapper = styled.div`
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  height: 50%;
  width: 50%;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @media (max-width: 1268px) {
    font-size: 30px;
  }
`;

const Article = styled.p`
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-left: 10%;
  margin-right: 10%;
  @media (max-width: 1268px) {
    font-size: 20px;
  }
`;
