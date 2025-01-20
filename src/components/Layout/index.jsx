import { Outlet } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import OpenColor from "open-color";

// children중괄호
const Layout = () => {
  return (
    <>
      <Header />

      <main
        style={{
          backgroundColor: OpenColor.gray[9],
          color: OpenColor.gray[0],
          paddingTop: 60,
          height: "100vh",
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
