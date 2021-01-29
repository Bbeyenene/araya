import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Contact Information</h1>
      <div className="contactMe">
        <h2>Araya Elma</h2>
        <h3>Chicago, IL</h3>
        <h3>
          Phone Number: <span>(773)677-3348</span>
        </h3>
        <h3>
          Email: <a href="mailto:aelma1961@gmail.com">aelma1961@gmail.com</a>
        </h3>
        <form
          name="contact-form"
          id="my-form-id"
          method="post"
          action="https://api.formcake.com/api/form/e2ccce6c-6bcd-481b-b043-7db7b60f5d2f/submission"
        >
          <div className="row">
            <div className="col-md-6">
              <div className="md-form mb-0">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Your name"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="md-form mb-0">
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Your email"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="md-form mb-0">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="md-form">
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  rows="2"
                  className="form-control md-textarea"
                  placeholder="Message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
