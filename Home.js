import React from "react";
import "./Home.css";

function Home() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });

  return (
    <div className="Home" id="Home">
      <div className="Home__bg">
        <div className="header d__flex align__items__center pxy__30">
          

          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">HOME</li>
              </a>
              <a href="#ABOUT">
                <li className="nav__items mx__15">ABOUT</li>
              </a>
              <a href="#SERVICES">
                <li className="nav__items mx__15">SERVICES</li>
              </a>
              <a href="#PORTFOLIO">
                <li className="nav__items mx__15">PROJECT</li>
              </a>
              <a href="#BLOG">
                <li className="nav__items mx__15">BLOG</li>
              </a>
              <a href="#CONTACT">
                <li className="nav__items mx__15">CONTACT</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
              <h2 className="home__text pz__10">HI, I'M VIGNESH M</h2>
              <h3 className="home__text sweet">FULL   STACK   WEB   DEVELOPER.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
