import React from "react";
import logo from "./images/logo2.png";
import bg from "./images/Background1.png";
import bg2 from "./images/background2.jpg";
import bg3 from "./images/background3.jpg";
import service from "./images/Service1.jpg";
import service2 from "./images/Service2.jpg";
import service3 from "./images/service3.jpg";
import service4 from "./images/service4.jpg";
import service5 from "./images/Service5.jpg";
import Service6 from "./images/Service6.jpg";
import feature2 from "./images/feature2.jpg";
import feature3 from "./images/feature3.jpg";
import feature4 from "./images/feature4.jpg";
import feature5 from "./images/feature5.jpg";
import pic1 from "./images/pic1.png";
import pic2 from "./images/pic2.png";
import pic3 from "./images/pic3.png";
import Swiper from "swiper";
import "./Home.css";

function Home() {
  let search = document.querySelector("#search");
  let myform = document.querySelector(".search-form");
  let menubar = document.querySelector("#menu-bar");
  let mymenubar = document.querySelector(".navbar");

  // search.onclick = () => {
  //   myform.classNameList.toggle("active");
  //   mymenubar.classNameList.remove("active");
  // };

  // menubar.onclick = () => {
  //   menubar.classNameList.toggle("fa-times");
  //   mymenubar.classNameList.toggle("active");
  //   myform.classNameList.remove("active");
  // };

  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  return (
    <>
      <section>
        <header>
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <nav className="navbar">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Gallery</a>
            <a href="#">contact</a>
            <a href="#">Blogs</a>
          </nav>

          <div className="myicons">
            <div id="menu-bar" className="fas fa-bars"></div>
            <div id="search" className="fas fa-search"></div>
          </div>

          <div id="searchform" className="search-form">
            <input type="search" />
          </div>
        </header>
      </section>

      <div className="home">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="main-slider">
                <div className="main-slider-text">
                  <div className="slider-text"></div>
                  <div className="slider-text">
                    <slider className="inner-text">
                      <h1>A Reliable Team</h1>
                      <p>
                        ipisicing elit. Est quaerat quis deserunt unde nihil in.
                        Quidem modi consequuntur repudiandae eum accusamus
                      </p>

                      <div className="slider-button">
                        <a href="#">Who we are</a>
                        <a href="#">what we do</a>
                      </div>
                    </slider>
                  </div>
                </div>
              </div>

              <img src={bg} alt="" />
            </div>
            <div className="swiper-slide">
              <img src={bg2} alt="" />
            </div>
            <div className="swiper-slide">
              <img src={bg3} alt="" />
            </div>
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>

      <div className="our-services">
        <div className="service-heading">
          <h1>Our services</h1>
          <div className="hr"></div>
        </div>

        <div className="main-services">
          <div className="main-inner-services">
            <div className="inner-services">
              <div className="services-images">
                <img src={service} alt="" />
              </div>

              <div className="service-inner-content">
                <h2>Painting & Architecture</h2>
                <p>
                  {" "}
                  sit amet consectetur adipisicing elit. Aut maiores voluptatum,
                </p>
              </div>
            </div>

            <div className="inner-services">
              <div className="services-images">
                <img src={service2} alt="" />
              </div>

              <div className="service-inner-content">
                <h2>Painting & Architecture</h2>
                <p>
                  {" "}
                  sit amet consectetur adipisicing elit. Aut maiores voluptatum,
                </p>
              </div>
            </div>

            <div className="inner-services">
              <div className="services-images">
                <img src={service5} alt="" />
              </div>

              <div className="service-inner-content">
                <h2>Painting & Architecture</h2>
                <p>
                  {" "}
                  sit amet consectetur adipisicing elit. Aut maiores voluptatum,
                </p>
              </div>
            </div>

            <div className="inner-services">
              <div className="services-images">
                <img src={service3} alt="" />
              </div>

              <div className="service-inner-content">
                <h2>Painting & Architecture</h2>
                <p>
                  {" "}
                  sit amet consectetur adipisicing elit. Aut maiores voluptatum,
                </p>
              </div>
            </div>

            <div className="inner-services">
              <div className="services-images">
                <img src={service4} alt="" />
              </div>

              <div className="service-inner-content">
                <h2>Painting & Architecture</h2>
                <p>
                  {" "}
                  sit amet consectetur adipisicing elit. Aut maiores voluptatum,
                </p>
              </div>
            </div>

            <div className="inner-services">
              <div className="services-images">
                <img src={Service6} alt="" />
              </div>

              <div className="service-inner-content">
                <h2>Painting & Architecture</h2>
                <p>
                  {" "}
                  sit amet consectetur adipisicing elit. Aut maiores voluptatum,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="why-us">
        <div className="why-us-heading">
          <h1>Why Us</h1>
        </div>

        <div className="main-why-us">
          <div className="main-inner-us">
            <div className="main-inner">
              <div className="icon-text-main">
                <div className="inner-content">
                  <div className="inner-icon">
                    <i className="fas fa-tools"></i>
                  </div>
                </div>

                <div className="inner-content">
                  <div className="inner-content-text">
                    <h2>We Got The Tools</h2>
                    <p>
                      {" "}
                      ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis omnis mollitia reprehenderit, quaerat
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="main-inner">
              <div className="icon-text-main">
                <div className="inner-content">
                  <div className="inner-icon">
                    <i className="fas fa-tools"></i>
                  </div>
                </div>

                <div className="inner-content">
                  <div className="inner-content-text">
                    <h2>We Got The Tools</h2>
                    <p>
                      {" "}
                      ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis omnis mollitia reprehenderit, quaerat
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="main-inner">
              <div className="icon-text-main">
                <div className="inner-content">
                  <div className="inner-icon">
                    <i className="fas fa-tools"></i>
                  </div>
                </div>

                <div className="inner-content">
                  <div className="inner-content-text">
                    <h2>We Got The Tools</h2>
                    <p>
                      {" "}
                      ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis omnis mollitia reprehenderit, quaerat
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="main-inner">
              <div className="icon-text-main">
                <div className="inner-content">
                  <div className="inner-icon">
                    <i className="fas fa-tools"></i>
                  </div>
                </div>

                <div className="inner-content">
                  <div className="inner-content-text">
                    <h2>We Got The Tools</h2>
                    <p>
                      {" "}
                      ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis omnis mollitia reprehenderit, quaerat
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="main-inner">
              <div className="icon-text-main">
                <div className="inner-content">
                  <div className="inner-icon">
                    <i className="fas fa-tools"></i>
                  </div>
                </div>

                <div className="inner-content">
                  <div className="inner-content-text">
                    <h2>We Got The Tools</h2>
                    <p>
                      {" "}
                      ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis omnis mollitia reprehenderit, quaerat
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="main-inner">
              <div className="icon-text-main">
                <div className="inner-content">
                  <div className="inner-icon">
                    <i className="fas fa-tools"></i>
                  </div>
                </div>

                <div className="inner-content">
                  <div className="inner-content-text">
                    <h2>We Got The Tools</h2>
                    <p>
                      {" "}
                      ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis omnis mollitia reprehenderit, quaerat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-featured">
        <div className="feture-heading">
          <h1>
            Our Featured <span>Work</span>{" "}
          </h1>
        </div>

        <div className="main-feautred">
          <div className="innter-featred">
            <div className="feature-icons">
              <i className="fas fa-share"></i>
              <i className="fas fa-eye"></i>
              <i className="fas fa-heart"></i>
            </div>
            <div className="feature-image">
              <img src={feature4} alt="" />
            </div>
          </div>

          <div className="innter-featred">
            <div className="feature-icons">
              <i className="fas fa-share"></i>
              <i className="fas fa-eye"></i>
              <i className="fas fa-heart"></i>
            </div>
            <div className="feature-image">
              <img src={feature2} alt="" />
            </div>
          </div>

          <div className="innter-featred">
            <div className="feature-icons">
              <i className="fas fa-share"></i>
              <i className="fas fa-eye"></i>
              <i className="fas fa-heart"></i>
            </div>
            <div className="feature-image">
              <img src={feature3} alt="" />
            </div>
          </div>

          <div className="innter-featred">
            <div className="feature-icons">
              <i className="fas fa-share"></i>
              <i className="fas fa-eye"></i>
              <i className="fas fa-heart"></i>
            </div>
            <div className="feature-image">
              <img src={feature4} alt="" />
            </div>
          </div>

          <div className="innter-featred">
            <div className="feature-icons">
              <i className="fas fa-share"></i>
              <i className="fas fa-eye"></i>
              <i className="fas fa-heart"></i>
            </div>
            <div className="feature-image">
              <img src={feature3} alt="" />
            </div>
          </div>

          <div className="innter-featred">
            <div className="feature-icons">
              <i className="fas fa-share"></i>
              <i className="fas fa-eye"></i>
              <i className="fas fa-heart"></i>
            </div>
            <div className="feature-image">
              <img src={feature5} alt="" />
            </div>
          </div>
        </div>
      </div>

      <section className="review" id="review">
        <h1 className="heading-review">
          {" "}
          our customers <span>reviews</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <img src={pic1} alt="" />
            <h3>john deo</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              delectus, ducimus facere quod ratione vel laboriosam? Est, maxime
              rem. Itaque.
            </p>
          </div>
          <div className="box">
            <img src={pic2} alt="" />
            <h3>john deo</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              delectus, ducimus facere quod ratione vel laboriosam? Est, maxime
              rem. Itaque.
            </p>
          </div>
          <div className="box">
            <img src={pic3} alt="" />
            <h3>john deo</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              delectus, ducimus facere quod ratione vel laboriosam? Est, maxime
              rem. Itaque.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- review section ends --> */}

      <div className="footer">
        <div className="main-footer">
          <div className="footer-inner-content">
            <h2>Our office</h2>
            <p>
              {" "}
              adipisicing elit. Accusantium optio vel libero ut molestiae quis
              vitae quas cumque molestias
            </p>
          </div>

          <div className="footer-inner-content">
            <h2>Important links</h2>
            <a href="#">Home</a>
            <a href="#">Home</a>
            <a href="#">Home</a>
            <a href="#">Home</a>
          </div>

          <div className="footer-inner-content">
            <h2>Office hours</h2>
            <p>Mon - 06:00 - 16:00</p>
            <p>Mon - 06:00 - 16:00</p>
            <p>Sunday - Off</p>
          </div>

          <div className="footer-inner-content">
            <h2>Main project</h2>
            <div className="main-project">
              <div className="inner-projects">
                <div className="project-image">
                  <img src={feature4} alt="" />
                </div>
                <div className="project-content">
                  <p className="project-content-p">
                    Maxime dicta officiis voluptates
                  </p>
                </div>
              </div>

              <div className="inner-projects">
                <div className="project-image">
                  <img src={feature4} alt="" />
                </div>
                <div className="project-content">
                  <p className="project-content-p">
                    Maxime dicta officiis voluptates
                  </p>
                </div>
              </div>

              <div className="inner-projects">
                <div className="project-image">
                  <img src={feature4} alt="" />
                </div>
                <div className="project-content">
                  <p className="project-content-p">
                    Maxime dicta officiis voluptates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
