import React from "react";

import "./styles/Header.css";
const Header = () => {
  return (
    <div className="container">
      <div className="header-title">Analytics</div>
      <button className="export-button">Export Report</button>
    </div>
  );
};

export default Header;
