import React from "react";
import "./about.css";

function About() {
  return (
    <>
      <h1>About Us</h1>

      <div className="myCard" style={{ marginLeft: "0 auto" }}>
        <div class="card mb-6" style={{ maxWidth: "100%" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img class="cardImg" src="./me-1.jpg" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Your Position</h5>
                <p class="card-text">
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
                <p class="card-text">
                  <small class="text-muted">some secondary info if any</small>
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
