import { Link } from "gatsby";
import React from "react";
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
  font-size: 18px;
  line-height: 2;
`;
