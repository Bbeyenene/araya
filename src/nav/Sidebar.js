import React from "react";
import { FaTimes } from "react-icons/fa";
import logo from "../pages/services/logo.svg";
import { useGlobalContext } from "../context";
import { links } from "../pages/services/data";
import "./sidebar.css";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header">
        <img src={logo} className="logo" alt="coding addict" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links2">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a className="ancker" href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
