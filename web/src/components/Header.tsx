import * as React from "react";
import { Link } from "gatsby";
import Navbar from "./Navbar";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderStyle>
      <StyledLink to="/">
        <h1>StartIT</h1>
      </StyledLink>
      <Navbar></Navbar>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  padding-left: 32px;
  background-color: black;
`;

const StyledLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
  color: white;
  font-size: 2vh;
  line-height: 2;
  margin-left: 2vh;
`;
