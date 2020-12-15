import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
    font-family:'Arvo', serif;
    color: white;

 }
 body {
    overflow-x: hidden;
    min-height: 100vh;
    padding: 0px;
    width: 100%;
    height: 100%;
    margin: 0px;
    overflow-x: hidden;
    background-color: black;
 }

 main {
   min-height: 90vh;
 }
`;
