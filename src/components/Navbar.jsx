import React from "react";
import "./styles/Navbar.css";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Icon icon="ph:dots-nine-bold" />
        <span>OTG</span>/<span>FRAUD DETECTION</span>
      </div>
      <div>
        <img src="" alt="" />
        <span>Pratik Maharjan</span>
      </div>
    </nav>
  );
};

export default Navbar;
