import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a passionate web enthusiast, adept in HTML, CSS, JavaScript,
              and React.js, with a strong dedication to crafting visually
              appealing and highly user-friendly websites. With a focus on
              clean, efficient code and responsive design
            </p>
            <p>
              "Additionally, I possess a strong foundation in cybersecurity,
              which complements my web development skills and allows me to
              approach each project with a security-first mindset. This diverse
              skill set enables me to create captivating web experiences that
              are not only visually engaging and user-friendly but also robustly
              secure."
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>Htmk & Css</p>
              <hr style={{ width: "50%" }} />
            </div>

            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>

            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "60%" }} />
            </div>

            <div className="about-skill">
              <p>Node Js</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>6+</h1>
          <p>Months Of Intense Learning </p>
        </div>
        <hr />

        <div className="about-achievement">
          <h1>5+</h1>
          <p>Academic & Personal Projects</p>
        </div>
        <hr />

        <div className="about-achievement">
          <h1>&infin;</h1>
          <p>Developer on a Journey of Discovery</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
