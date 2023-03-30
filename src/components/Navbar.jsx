import React from "react";
import "./styles/Navbar.css";
import { Icon } from "@iconify/react";
import Image from "../images/potrait.jpg";

const Navbar = (props) => {
  return (
    <nav className="nav">
      <div
        style={{
          display: "flex",
        }}
      >
        <Icon
          icon="ph:dots-nine-bold"
          style={{
            fontSize: "40px",
            paddingTop: "5px",
          }}
        />
        <Icon
          icon="radix-icons:divider-vertical"
          style={{
            fontSize: "40px",
            paddingTop: "5px",
          }}
        />
        <span
          style={{
            margin: "12px 10px 0 0",
            color: "darkgray",
            fontSize: "18px",
          }}
        >
          OTG /
        </span>
        <span
          style={{
            marginTop: "12px",
            fontSize: "18px",
          }}
        >
          {props.title}
        </span>
      </div>

      <div
        className="user-container"
        style={{
          display: "flex",
        }}
      >
        <img src={Image} alt="" className="avatar" />
        <span
          style={{
            margin: "10px",
          }}
        >
          Pratik Maharjan
        </span>
        <Icon
          icon="ri:arrow-drop-down-line"
          style={{
            fontSize: "40px",
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
