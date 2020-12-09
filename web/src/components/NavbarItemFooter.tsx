import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export default function NavbarItemFooter({ name, link }: NavbarItemProps) {
  return (
    <>
      <StyledLink to={`/${link}/`}>
        <span>{name}</span>
      </StyledLink>
    </>
  );
}

const StyledLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
  color: white;
  font-size: 2vh;
  line-height: 2;
`;