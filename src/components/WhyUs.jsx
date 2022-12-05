import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
import Icon1 from "../assets/img/thumb.png";
import Icon2 from "../assets/img/tag.png";
import Icon3 from "../assets/img/clock.png";
import Icon4 from "../assets/img/medal.png";

const WhyUs = () => {
  return (
    <div>
      <section id="whyUs">
        <div className="container why-title" style={{ marginTop: "80px" }}>
          <h1 className="fs-2">Why Us</h1>
          <p className="fs-6">Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="card h-100">
                <div className="card-body">
                  <img
                    src={Icon1}
                    width="30"
                    height="30"
                    style={{ marginBottom: "20px" }}
                    alt="whyus"
                  />
                  <br />
                  <h5 class="card-title fw-bold">Mobil Lengkap</h5>
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card h-100">
                <div className="card-body">
                  <img
                    src={Icon2}
                    width="30"
                    height="30"
                    style={{ marginBottom: "20px" }}
                    alt="whyus"
                  />
                  <br />
                  <h5 className="card-title fw-bold">Harga Murah</h5>
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card h-100">
                <div className="card-body">
                  <img
                    src={Icon3}
                    width="30"
                    height="30"
                    style={{ marginBottom: "20px" }}
                    alt="whyus"
                  />
                  <br />
                  <h5 className="card-title fw-bold">Layanan 24 Jam</h5>
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. kami juga
                  tersedia di hari minggu
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card h-100">
                <div className="card-body">
                  <img
                    src={Icon4}
                    width="30"
                    height="30"
                    style={{ marginBottom: "20px" }}
                    alt="whyus"
                  />
                  <br />
                  <h5 className="card-title fw-bold">Sopir Profesional</h5>
                  Sopir yang Profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
