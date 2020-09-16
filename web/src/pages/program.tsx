import React, { Component } from "react";
import Header from "../components/Header";
import styled from "styled-components";

export default function App({ data }) {
  return (
    <div className="App">
      <Header />
      <Title>Årets StartIT blir på Clarion, Brattøra 04.03.2021 </Title>
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
    font-size: 42px;
  }
  @media (max-width: 800px) {
    font-size: 30px;
  }
`;

const Program = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  background: grey;
`;
