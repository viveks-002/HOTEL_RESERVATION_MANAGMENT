import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to KHAANA KHAZANA  — where passion meets the plate. We're more than just a place to eat; we're a place to experience real flavor, heartfelt hospitality, and unforgettable meals.

At the heart of our kitchen is a simple belief: quality food made with love brings people together. We use only the freshest ingredients, time-tested recipes, and a touch of creativity to serve dishes that not only satisfy hunger but create lasting memories.

Whether you're joining us for a casual bite or a special celebration, we’re here to make every meal feel like home. Come hungry, leave happy — that’s our promise to you.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
