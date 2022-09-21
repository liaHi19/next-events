import React from "react";

import MainHeader from "./mainHeader/MainHeader";

const Layout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
};

export default Layout;
