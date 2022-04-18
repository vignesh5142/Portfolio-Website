import React from "react";
import "./About.css";
import aboutImg from "./img/about.jpg";
function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="ABOUT">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">ABOUT ME..,</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                I am a Information technology engineering student at APJ Abdul
                Kalam Technological University. Due to graduate in the coming
                months, I am eager to secure challenging roles in Information
                technology engineering.programming skills in C, C++, PYTHON, JAVA,
                JAVA SCRIPT, HTML, CSS, REACT, DJANGO. I solve problems in
                creative ways. At GECBH where I am focusing in Information
                Technology, I have learned and experienced the importance of
                applying creative strategies, ideal thinking, leadership and
                management in the projects. Passion in coding, innovation,
                prototyping, web designing, AI and cybersecurity careers.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="a">
                  <button className="about btn pointer">DOWNLOAD CV</button>
                </a>
                <a href="a">
                  <button className="about btn pointer">HIRE ME</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
