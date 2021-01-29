import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

import data from "./data2";
import Individual from "./services/Individual";

import "./home.css";
function Home() {
  const [people] = useState(data);
  const [index, setIndex] = React.useState(0);

  var tempDate = new Date();
  var date =
    tempDate.getFullYear() +
    "-" +
    (tempDate.getMonth() + 1) +
    "-" +
    tempDate.getDate();

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > people.length - 1) {
        index = 0;
      }
      return index;
    });
  };
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = people.length - 1;
      }
      return index;
    });
  };

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
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > people.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index, people]);

  return (
    <>
      <div className="hero">
        <h1> Special Discount</h1>
        <h1>For You Today</h1>
        <h1>
          <span>{date}</span>
        </h1>
        <h3>
          <span>
            Call Us:
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>
          </span>{" "}
          (773)677-3348
        </h3>
      </div>
      <div className="mainInfo">
        <section className="title1">
          <div className="title">
            <h2>
              <span>/ </span>Our Services
            </h2>
          </div>
          <Individual />
          {/* <Scorporation />
          <Ccorporation />
          <Taxexempt />
          <Partnership /> */}
        </section>

        <section className="section title1">
          <div className="section-center">
            {people.map((person, personIndex) => {
              const { id, name, title, quote } = person;

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
                  <p className="title name-t">{title}</p>
                  <h4 className="name-t">{name}</h4>
                  <p className="text text-p">{quote}</p>
                  <FaQuoteRight className="icon" />
                </article>
              );
            })}

            <button className="prev" onClick={prevSlide}>
              <FiChevronLeft />
            </button>
            <button className="next" onClick={nextSlide}>
              <FiChevronRight />
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
