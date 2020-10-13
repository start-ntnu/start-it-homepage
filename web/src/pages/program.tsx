import React, { Fragment } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

export default function App({ data }) {
  return (
    <Layout>
      <div className="App">
        <Title>
          Årets StartIT er under planlegging
          <br></br>
          Tentativt program{" "}
        </Title>
        <Program>
          <Mingling>
            <ProgramTitle>Nettside og stand</ProgramTitle>
            <ProgramTitle>Hele uka</ProgramTitle>
            <Article>
              Samarbeidspartnere vil få legge ut videoer på nettsiden,
               ulike konkurranser og mulighet til å hente premier på stand.
            </Article>
          </Mingling>
          <InteraktivtOpplegg>
            <ProgramTitle>Interaktivt opplegg</ProgramTitle>
            <ProgramTitle>Torsdag dagtid</ProgramTitle>
            <Article>
              Samarbeidspartenere vil ha sine interaktive opplegg 
              rundt omkring på campus
            </Article>
          </InteraktivtOpplegg>
          <Bankett>
            <ProgramTitle>Bankett</ProgramTitle>
            <ProgramTitle>Torsdag kveldstid</ProgramTitle>
            <Article>
              HSP med foredrag om sine bedrifter og hva de gjør for innovasjon.
              <br></br>
              Speakers snakker om hvorfor innovasjon i IT er viktig
            </Article>
          </Bankett>
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
    font-size: 46px;
  }
  @media (max-width: 800px) {
    font-size: 25px;
  }
`;

const ProgramTitle = styled.h3`
  margin-top: 2vh;
  margin-bottom: 2vh;
  font-weight: bold;
  font-size: 26px;
  justify-content: center;
  text-align: center;
  @media (max-width: 1268px) {
    font-size: 22px;
  }
  @media (max-width: 800px) {
    font-size: 20px;
  }
  @media (max-width: 550px) {
    font-size: 16px;
  }
`;

const Program = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Mingling = styled.div`
  margin: 2vh auto auto auto;
  height: 20rem;
  width: 25%;
  display: flex;
  flex-direction: column;
  border: solid 10px #9fbfdf;
  @media (max-width: 800px) {
    width: 35%;
  }
  @media (max-width: 550px) {
    width: 50%;
  }
`;

const InteraktivtOpplegg = styled.div`
  margin: 2vh auto auto auto;
  height: 20rem;
  width: 35%;
  display: flex;
  flex-direction: column;
  border: solid 12px #9fbfdf;
  @media (max-width: 550px) {
    width: 50%;
  }
`;

const Bankett = styled.div`
  margin: 2vh auto auto auto;
  height: 20rem;
  width: 25%;
  display: flex;
  flex-direction: column;
  border: solid 12px #9fbfdf;
  @media (max-width: 800px) {
    width: 35%;
  }
  @media (max-width: 550px) {
    width: 50%;
  }
`;

const Article = styled.p`
  margin: 3vh 1vh 5vh 1vh;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @media (max-width: 1268px) {
    font-size: 20px;
  }
  @media (max-width: 800px) {
    font-size: 16px;
    line-height: 2;
  }
  @media (max-width: 550px) {
    font-size: 12px;
  }
`;
