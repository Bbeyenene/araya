import React from "react";
import {
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/individual",
    text: "Individual",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "/taxexempt",
    text: "Taxexempt",
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: "/partnership",
    text: "Partnership",
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: "/ccorporation",
    text: "Ccorporation",
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: "/documents",
    text: "documents",
    icon: <FaWpforms />,
  },
];
