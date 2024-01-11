import React from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

const Layout = ({ children }) => {
  const currentPath = window.location.pathname;
  const adminPath = currentPath.includes("admin");
  console.log("pathname:", adminPath);
  return (
    <div>
      {adminPath && (
        <>
          <Header />
          <Sidebar />
        </>
      )}
      {children}
    </div>
  );
};

export default Layout;
