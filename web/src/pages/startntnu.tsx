import React from "react";
import styled from 'styled-components';
import Layout from "../components/Layout";
import SEO from "../components/Seo";

export default function App({ data }) {
  return (
    <>
    <SEO title={'Start NTNU'}/>
    <Layout>
        <Title><div>HVEM ER <span style={{color: '#BD6631'}}>START</span> NTNU?</div></Title>
        <Article>
          Start NTNU er en non-profit studentorganisasjon som jobber for at
          innovasjonsmiljøet på NTNU skal vokse og bli enda bedre!
          <br /><br />
          Dette gjør vi gjennom å avholde små og store arrangement for å inspirere nettopp
          DEG.
          <br /><br />
          Vi ønsker å nå ut til flest mulig av studentene på NTNU og jobber
          for å opprettholde et bredt utvalg av tematikk. Sitter du med en idè
          eller lurer på om du har en gründer i magen? Kom på arrangementene og
          la deg inspirere!
        </Article>
        <SubTitle>
          Sjekk oss ut <a href="https://www.startntnu.no/" target="_blank">her</a>
        </SubTitle>
    </Layout>
    </>
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
    font-size: 30px;
  }
`;

const Article = styled.p`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 24px auto;
  max-width: 700px;
  @media (max-width: 1268px) {
    font-size: 16px;
  }
`;

const SubTitle = styled.h2`
  margin: 100px auto;
  justify-content: center;
  text-align: center;
`;
