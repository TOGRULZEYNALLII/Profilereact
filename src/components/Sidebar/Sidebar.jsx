import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

import SubMenu from "./SubMenu";

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>Bootstrap Sidebar</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <p>Admin</p>
        <SubMenu title="Home" icon={faHome} items={submenus[0]} />
      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "Profil",
      target: "profile",
    },
    {
      title: "Isciler",
      target: "workers",
    },
  ],
  [],
];

export default SideBar;
