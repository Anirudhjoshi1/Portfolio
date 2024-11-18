import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../Hero/resume.pdf"

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>"Hello, I'm Anirudh Joshi </span> , Bringing Your Vision to the Web
      </h1>
      <p>
      "From clean code to captivating designs, I build websites that blend beauty with functionality. Let's create something extraordinary together."
      </p>
      <div className="hero-action">
      <div className="hero-connect"><AnchorLink className='' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
      <a href={resume} target="blank"><div className="hero-resume">My Resume</div></a>
      </div>
    </div>
  );
};
export default Hero;
