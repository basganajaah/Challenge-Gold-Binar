import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
import LogoImage from "../assets/img/logo.png";
import CarImage from "../assets/img/car-img.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="bg-primary bg-opacity-10">
        <nav
          className="navi navbar navbar-expand-md"
          style={{ backgroundColor: "#f1f3ff" }}
        >
          <div className="container-md">
            <a className="navbar-brand" href="/">
              <img
                src={LogoImage}
                alt="Logo"
                className="d-inline-block align-text-top"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse flex-grow-0"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-hover nav-link"
                    aria-current="page"
                    href="#ourService"
                  >
                    Our Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-hover nav-link " href="#whyUs">
                    Why Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-hover nav-link " href="#testimony">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-hover nav-link " href="#question">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section className="welcome-banner">
          <div className="container">
            <div className="row align-items-center flex-column flex-md-row">
              <div className="col">
                <h1 className="display-4">
                  Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                </h1>
                <p className="lead">
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>

                <Link to="/search-car">
                  <button
                    as={Link}
                    to="/search-car"
                    type="button"
                    className="btn-sewa mb-3 fw-bold"
                    // data-bs-toggle="modal"
                    // data-bs-target="#exampleModal"
                  >
                    Mulai Sewa Mobil
                  </button>
                </Link>
              </div>
              <div className="col p-0 text-end">
                <img src={CarImage} alt="car-img" class="w-100" />
              </div>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Header;
