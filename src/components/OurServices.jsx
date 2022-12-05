import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
import ServicesImg from "../assets/img/services.png";
import CheklistImg from "../assets/img/checklist.png";

const OurServices = () => {
  return (
    <div>
      <section className="ourService" id="ourService">
        <div className="container" style={{ marginTop: 70 }}>
          <div className="row">
            <div className="col-lg-6 col-xs-12">
              <img
                src={ServicesImg}
                alt="services-img"
                style={{ alignItems: "center", justifyContent: "center" }}
                className="img-fluid"
                width="374"
                height="562"
              />
            </div>
            <div className="col-lg-6 col-xs-12">
              <h1 className="display-6">
                Best Car Rental for any kind of trip in <br />
                (Lokasimu)
              </h1>
              <p className="lead">
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <p className="list">
                <img src={CheklistImg} width="20" height="20" alt="list" />
                &nbsp;&nbsp;Sewa mobil dengan supir di Jakarta 12 Jam
              </p>
              <p className="list">
                <img src={CheklistImg} width="20" height="20" alt="list" />
                &nbsp;&nbsp;Sewa mobil lepas kunci di Jakarta 24 Jam
              </p>
              <p className="list">
                <img src={CheklistImg} width="20" height="20" alt="list" />
                &nbsp;&nbsp;Sewa mobil jangka panjang Bulanan
              </p>
              <p className="list">
                <img src={CheklistImg} width="20" height="20" alt="list" />
                &nbsp;&nbsp;Gratis Antar - Jemput Mobil di Bandara
              </p>
              <p className="list">
                <img src={CheklistImg} width="20" height="20" alt="list" />
                &nbsp;&nbsp;Layanan Airport Transfer / Drop In Out
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
