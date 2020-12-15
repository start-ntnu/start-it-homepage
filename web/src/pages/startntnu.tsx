import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

export default function App({ data }) {
  return (
    <Layout>
      <div className="App">
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
