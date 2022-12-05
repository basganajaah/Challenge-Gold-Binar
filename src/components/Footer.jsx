import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
import IconFb from "../assets/img/icon-fb.png";
import IconIg from "../assets/img/icon-ig.PNG";
import IconTwitter from "../assets/img/icon-twt.PNG";
import IconEmail from "../assets/img/icon-email.PNG";
import IconTwitch from "../assets/img/icon-twitch.PNG";
import LogoImage from "../assets/img/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container" style={{ marginTop: "90px" }}>
        <div className="row">
          <div className="col-lg-3">
            <p className="footer" style={{ fontWeight: "700" }}>
              Jalan Suroyo No. 161 Mayangan Kota <br />
              Probolonggo 672000 <br />
              <br />
              binarcarrental@gmail.com <br />
              <br />
              081-233-334-808
            </p>
          </div>
          <div className="col-lg-3">
            <p className="footer">
              <a href="#ourService" className="footer-link">
                Our Services
              </a>
              <br />
              <br />
              <a href="#ourService" className="footer-link">
                Why Us
              </a>
              <br />
              <br />
              <a href="#ourService" className="footer-link">
                Testimonial
              </a>
              <br />
              <br />
              <a href="#ourService" className="footer-link">
                FAQ
              </a>
            </p>
          </div>
          <div className="col-lg-3" style={{ fontWeight: "700" }}>
            <p className="footer">
              Connect with us <br />
              <br />
              <img
                src={IconFb}
                width="30"
                height="30"
                style={{ marginBottom: "20px" }}
                alt="fb"
              />
              <img
                src={IconIg}
                width="30"
                height="30"
                style={{ marginBottom: "20px", marginLeft: "12px" }}
                alt="ig"
              />
              <img
                src={IconTwitter}
                width="30"
                height="30"
                style={{ marginBottom: "20px", marginLeft: "12px" }}
                alt="twt"
              />
              <img
                src={IconEmail}
                width="30"
                height="30"
                style={{ marginBottom: "20px", marginLeft: "12px" }}
                alt="email"
              />
              <img
                src={IconTwitch}
                width="30"
                height="30"
                style={{ marginBottom: "20px", marginLeft: "12px" }}
                alt="twitch"
              />
            </p>
          </div>
          <div className="col-lg-3" style={{ fontWeight: "700" }}>
            <p className="footer">
              Copyright Binar 2022 <br />
              <br />
              <a href="/" ><img src={LogoImage} alt="Logo"/></a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
