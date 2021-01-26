import React from "react";
import "./about.css";

function About() {
  return (
    <>
      <h1>About Us</h1>
      <div className="contactInfo">
        <div className="myImageDiv">
          <img className="myImage" src="/me-1.png" alt="" />
        </div>
        <div className="myInfo">
          <h3>Auditor</h3>
          <p>
            lorem ipsum dolor sit amet, consectetur lorem lorem Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
