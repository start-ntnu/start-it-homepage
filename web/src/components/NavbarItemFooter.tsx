import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

export default function NavbarItemFooter({ name, link, directLink }: NavbarItemProps) {
  return (
    <>
  { directLink ?  <StyledDirectLink to={`/${link}/`}>
        <span>{name}</span>
      </StyledDirectLink> :
      <StyledLink to={`/${link}/`}>
        <span>{name}</span>
      </StyledLink>
}
    </>
  );
}

const StyledLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  line-height: 2;
`;

const StyledDirectLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 18px;
  line-height: 2;
`;
