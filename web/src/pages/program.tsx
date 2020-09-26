import React, { Fragment } from "react";
import styled from "styled-components";
import Layout from "../components/Blog";

export default function App({ data }) {
  return (
    <Layout>
      <div className="App">
        <Title>Årets StartIT blir på Clarion, Brattøra 04.03.2021 </Title>
        <Program>
          <Article>
            17.00 dørene åpner og mingling starter <br></br>
            17.30 Workshop runden starter, 3 workshopper og en mingle stasjon
            <br></br>
            18.00 Bytte<br></br>
            18.30 Bytte<br></br>
            19.00 Bytte <br></br>
            19.30 Middag <br></br>
            20.00 Foredrag fra HSP 1<br></br>
            20.20 IT foredrag<br></br>
            20.50 Foredrag fra HSP 2<br></br>
            21.10 Inspirerende foredrag<br></br>
            21.40 Avslutning
          </Article>
        </Program>
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
  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

const Program = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  background: grey;
`;

const Article = styled.p`
  color: white;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin-left: 30%;
  margin-right: 10%;
  @media (max-width: 1268px) {
    font-size: 20px;
  }
  @media (max-width: 800px) {
    font-size: 16px;
  }
`;
