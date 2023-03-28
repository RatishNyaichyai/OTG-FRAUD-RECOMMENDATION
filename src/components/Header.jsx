import React from "react";

const Header = () => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        borderBottom: "1px solid",
        borderColor: "lightgray",
      }}
    >
      <div
        style={{
          fontSize: "18px",
          fontWeight: "500",
        }}
      >
        Analytics
      </div>
      <button
        style={{
          color: "white",
          background: "black",
          border: "none",
          borderRadius: "8px",
          padding: "10px",
        }}
      >
        Export Report
      </button>
    </div>
  );
};

export default Header;
