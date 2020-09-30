import React, { Fragment } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { GlobalStyle } from "../globalStyles";

export default function App({ data }) {
  return (
    <div className="App">
      <Fragment>
        <GlobalStyle></GlobalStyle>
        <Header />
        <Title>Start IT 2021 </Title>
        <Program>
          <Mingling>
            <ProgramTitle>Mingling</ProgramTitle>
            <ProgramTitle>17:00-17:30</ProgramTitle>
            <Article>
              Studentene får møtt bedrifter og start-ups på stands i
              mingleområdet.
            </Article>
          </Mingling>
          <InteraktivtOpplegg>
            <ProgramTitle>Interaktivt opplegg</ProgramTitle>
            <ProgramTitle>17:30-19:30</ProgramTitle>
            <Article>
              Løype gjennom ulike stasjoner <br></br>
              Hver gruppe har 3x30min workshops og 1x30 min mingling
            </Article>
          </InteraktivtOpplegg>
          <Bankett>
            <ProgramTitle>Bankett</ProgramTitle>
            <ProgramTitle>19:30-21:45</ProgramTitle>
            <Article>
              15 min per HSP2x30 min per speaker20min til servering av mat Alle
              er ute av lokalet kl. 22
            </Article>
          </Bankett>
        </Program>
      </Fragment>
    </div>
  );
}

const Title = styled.h1`
  font-weight: bold;
  font-size: 64px;
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
