import React, { Fragment } from "react";
import Header from "../components/Header";
import { GlobalStyle } from "../globalStyles";

export default function Blog({ data }) {
  return (
    <div className="App">
      <Fragment>
        <GlobalStyle></GlobalStyle>
        <Header />
      </Fragment>
    </div>
  );
}
