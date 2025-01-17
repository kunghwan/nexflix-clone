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
        className="bg-gray-900 text-gray-100 h-screen"
        style={{
          backgroundColor: OpenColor.gray[9],
          color: OpenColor.gray[0],
          paddingTop: 60,
          minheight: "100vh",
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
