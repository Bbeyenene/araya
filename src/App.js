import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data2";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import Individual from "./services/Individual";
import Scorporation from "./services/Scorporation";
import Taxexempt from "./services/Taxexempt";
import Partnership from "./services/Partnership";
import Ccorporation from "./services/Ccorporation";
import "./home.css";

// import { BsGrid3X3GapFill } from "react-icons/bs";
// import { useGlobalContext } from "./context";
// import { AppProvider } from "./context";
// import Sidebar from "./Sidebar";
// import Modal from "./Modal";

function App() {
  // const { openSidebar } = useGlobalContext();
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
        <Navbar />
        <Switch>
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
          Ccorporation
          <Route exact path="/">
            <Home>
              {/* <button onClick={openSidebar} className="sidebar-toggle">
                <BsGrid3X3GapFill />
              </button> */}
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
        </Switch>
      </Router>
      {/* <AppProvider>
        <Home />
        <Sidebar />
        <Modal />
      </AppProvider> */}
    </>
  );
}

export default App;
