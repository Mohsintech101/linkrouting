import React from "react";
import AdminLayout from "./components/adminLayout";

const Layout = ({ children }) => {
  const currentPath = window.location.pathname;
  const adminPath = currentPath.includes("admin");
  console.log("pathname:", adminPath);
  return (
    <div>
      {adminPath && (
        <>
          <AdminLayout children={children} />
        </>
      )}
    </div>
  );
};

export default Layout;
