import React from "react";
import "./Blog.css";
import blog1 from "./img/blog-01.jpg";
import blog2 from "./img/blog-02.jpg";
import blog3 from "./img/blog-03.jpg";

function Blog() {
  return (
    <div className="blog component__space" id="BLOG">
      <div className="heading">
        <h1 className="heading">LATEST NEWS</h1>
        <p className="heading p__color">
          “A person who never made a mistake never tried anything new"
        </p>
        <p className="heading p__color"> — ALBERT EINSTEIN.</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={blog1} alt="" className="project__img"></img>
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute ">
                <h5 className="project__text">HTML , CSS</h5>
                <h4 className="project__text">I AM GOOD WITH HTML AND CSS</h4>
                <a href="#" className="blog project__btn btn">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={blog2} alt="" className="project__img"></img>
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute ">
                <h5 className="project__text">JAVA SCRIPT , REACT</h5>
                <h4 className="project__text">
                  I AM GOOD WITH JAVA SCRIPT AND REACT
                </h4>
                <a href="#" className="blog project__btn btn">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={blog3} alt="" className="project__img"></img>
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute ">
                <h5 className="project__text">JAVA , SPRING BOOT</h5>
                <h4 className="project__text">
                  I AM GOOD WITH JAVA AND SPRING BOOT
                </h4>
                <a href="#" className="blog project__btn btn">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
