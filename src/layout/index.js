import React from "react";
import NavBar from "./navbar/NavBar";
import SideBar from "./sidebar/SideBar";
import StyledLayout from "./StyledLayout.styles";

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <SideBar />
      <div className="main-wrapper">
        <nav>
          <NavBar />
        </nav>
        <main>{children}</main>
      </div>
    </StyledLayout>
  );
};

export default Layout;
