import React from "react";
import "./about.css";

function About() {
  return (
    <>
      <h1>About Us</h1>

      <div className="myCard" style={{ marginLeft: "0 auto" }}>
        <div className="card mb-6" style={{ maxWidth: "100%" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img className="cardImg" src="./me-1.jpg" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Your Position</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer. This is a wider card with supporting text below as a
                  natural lead-in to additional content. This content is a
                  little bit longer. This is a wider card with supporting text
                  below as a natural lead-in to additional content. This content
                  is a little bit longer. This is a wider card with supporting
                  text below as a natural lead-in to additional content. This
                  content is a little bit longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    some secondary info if any
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
