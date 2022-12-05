import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
import { Link } from "react-router-dom";

const RentBanner = () => {
  return (
    <div>
      <section id="sewa">
        <div className="container sewa">
          <div className="card text-center">
            <div className="card-body">
              <h2 className="card-title">Sewa Mobil di (Lokasimu) Sekarang!</h2>
              <p
                style={{ marginTop: "25px", color: "white", fontWeight: "640" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
                <br />
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <br />
              <br />
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default RentBanner;
