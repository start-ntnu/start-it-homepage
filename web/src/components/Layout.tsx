import React from "react";
import Header from "./Header";
import { GlobalStyle } from "../globalStyles";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
