import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

import Navbar from "./nav/Navbar";
import Sidebar from "./nav/Sidebar";

import { AppProvider } from "./context";
import data from "./pages/home/data2";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import Individual from "./pages/services/Individual";
import Scorporation from "./pages/services/Scorporation";
import Taxexempt from "./pages/services/Taxexempt";
import Partnership from "./pages/services/Partnership";
import Ccorporation from "./pages/services/Ccorporation";

import "./pages/home/home.css";

function App() {
  const [people] = useState(data);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <>
      <Router>
        <AppProvider>
          <Navbar />
          <Sidebar />
        </AppProvider>
        <Switch>
          <Route exact path="/">
            <Home>
              <section className="section">
                <div className="title">
                  <h2>
                    <span> Our Services</span>
                  </h2>
                </div>
                <div className="section-center">
                  {people.map((person, personIndex) => {
                    const { id, image, name, title2, quote } = person;

                    let position = "nextSlide";
                    if (personIndex === index) {
                      position = "activeSlide";
                    }
                    if (
                      personIndex === index - 1 ||
                      (index === 0 && personIndex === people.length - 1)
                    ) {
                      position = "lastSlide";
                    }

                    return (
                      <article className={position} key={id}>
                        <img src={image} alt={name} className="person-img" />
                        <h4>{name}</h4>
                        <p className="title">{title2}</p>
                        <p className="text">{quote}</p>
                        <FaQuoteRight className="icon" />
                      </article>
                    );
                  })}
                  <button className="prev" onClick={() => setIndex(index - 1)}>
                    <FiChevronLeft />
                  </button>
                  <button className="next" onClick={() => setIndex(index + 1)}>
                    <FiChevronRight />
                  </button>
                </div>
              </section>
            </Home>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/individual">
            <Individual />
          </Route>
          <Route path="/scorporation">
            <Scorporation />
          </Route>
          <Route path="/taxexempt">
            <Taxexempt />
          </Route>
          <Route path="/partnership">
            <Partnership />
          </Route>
          <Route path="/ccorporation">
            <Ccorporation />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
