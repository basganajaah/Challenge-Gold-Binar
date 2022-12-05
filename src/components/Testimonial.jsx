import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
import TestimonyImg1 from "../assets/img/carousel1.png";
import TestimonyImg2 from "../assets/img/carousel2.png";
import TestimonyImg3 from "../assets/img/carousel3.png";

import Star from "../assets/img/star.png";

const Testimonial = () => {
  return (
    <div className="my-5">
      <section id="testimony">
        <div className="container mb-3" style={{ marginTop: "80px" }}>
          <div className="row text-center">
            <div className="col">
              <h2 className="fw-bold">Testimonial</h2>
              <p className="fs-6">
                Berbagai review positif dari para pelanggan kami
              </p>
            </div>
          </div>
        </div>

        <div
          id="carouselExampleDark"
          class="carousel carousel-dark slide mx-5"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="container">
                <div className="test-card row justify-content-center align-items-center">
                  <div className="test1 col-lg-2 col-sm-12 my-3 text-center">
                    <img
                      classname="my-3"
                      src={TestimonyImg1}
                      alt="card1"
                      width={140}
                    />
                  </div>
                  <div className="col-lg-8 col-sm-12 mb-2">
                    <div className="star-img mb-3">
                      <img src={Star} alt="star" />
                      <img src={Star} alt="star" />
                      <img src={Star} alt="star" />
                      <img src={Star} alt="star" />
                      <img src={Star} alt="star" />
                    </div>
                    <div className="fw-bold star-img mb-3">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Totam minima magnam velit enim aut. Necessitatibus
                      officiis quaerat quas cupiditate ut error pariatur
                      repellat incidunt, earum dolorem eligendi voluptates
                      delectus expedita!
                    </div>
                    <div className="star-img mb-3">John Dee 32, Bromo</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="container">
                <div className="test-card row justify-content-center align-items-center">
                  <div className="test1 col-lg-2 col-sm-12 my-3 text-center">
                    <img
                      classname="test2 my-3"
                      src={TestimonyImg2}
                      alt="card2"
                      width={140}
                    />
                  </div>
                  <div className="col-lg-8 col-sm-12 mb-2">
                    <div className="star-img mb-3">
                      <img src={Star} alt="star" />
                      <img src={Star} alt="star" />
                      <img src={Star} alt="star" />
                      <img src={Star} alt="star" />
                      <img src={Star} alt="star" />
                    </div>
                    <div className="fw-bold star-img mb-3">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Totam minima magnam velit enim aut. Necessitatibus
                      officiis quaerat quas cupiditate ut error pariatur
                      repellat incidunt, earum dolorem eligendi voluptates
                      delectus expedita!
                    </div>
                    <div className="star-img mb-3">
                      Jessica Smith 27, Jakarta
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="container">
                <div className="test-card row justify-content-center align-items-center">
                  <div className="test1 col-lg-2 col-sm-12 my-3 text-center">
                    <img
                      classname="test3 my-3"
                      src={TestimonyImg3}
                      alt="card3"
                      width={140}
                      style={{ borderRadius: "80%" }}
                    />
                  </div>
                  <div className="col-lg-8 col-sm-12 mb-2">
                    <div className="star-img mb-3">
                      <img src={Star} alt="star" />
                      <img src={Star} alt="star" />
                      <img src={Star} alt="star" />
                      <img src={Star} alt="star" />
                      <img src={Star} alt="star" />
                    </div>
                    <div className="fw-bold star-img mb-3">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Totam minima magnam velit enim aut. Necessitatibus
                      officiis quaerat quas cupiditate ut error pariatur
                      repellat incidunt, earum dolorem eligendi voluptates
                      delectus expedita!
                    </div>
                    <div className="star-img mb-3">Sarah Johnson 35, Bali</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="slider-carousel carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="slider-carousel carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
