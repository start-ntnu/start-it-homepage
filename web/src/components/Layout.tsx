import React from "react";
import Header from "./Header";
import Footer from "./Footer"
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
      <Footer></Footer>
    </>
  );
};

export default Layout;
