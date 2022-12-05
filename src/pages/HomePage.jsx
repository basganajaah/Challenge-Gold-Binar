import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
import Header from "../components/Header";
import OurServices from "../components/OurServices";
import WhyUs from "../components/WhyUs";
import Testimonial from "../components/Testimonial";
import RentBanner from "../components/RentBanner";
import Question from "../components/Question";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
      <Header />
      <OurServices />
      <WhyUs />
      <Testimonial />
      <RentBanner />
      <Question />
      <Footer />
    </>
  );
};

export default Homepage;
