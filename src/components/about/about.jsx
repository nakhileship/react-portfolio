import React from "react";
import "./about.css";
import ME from "../../assets/me-about1.jpg";
import { FaAward } from "react-icons/fa";
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <div>
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="about image" />
            </div>
          </div>
          <div className="about__content">

            <div className="about__cards">
            
              <article className="about__card">
              <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>
             
              <article className="about__card">
              <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>200+ Worldwide</small>
              </article>

              <article className="about__card">
              <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>80+ Completed</small>
              </article>
            </div>

            <p>
            Create React App doesn't handle backend logic or databases; it just creates a frontend build pipeline, so you can 
            use it with any backend you want. Under the hood,
             it uses Babel and webpack, but you don't 
            need to know anything about them.
            </p>

            <a href="#contact" className="btn btn-primary">Let's Tslk</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
