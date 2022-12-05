import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Filter from "../components/Filter";
import "./pages.css";
import "../assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import usersImg from "../assets/img/users.png";

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    axios
      .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
      .then((res) => {
        console.log(res);
        setCar(res.data);
      })
      .catch((err) => console.log(err.message));
  }, [id]);

  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Filter disabled={true} isButton={false} />

      <div className="container-fluid row mx-0">
        <div className="col-8 px-5">
          <div className="card h-100 px-3">
            <div className="card-body">
              <br />
              <h3 className="fw-bold">Tentang Paket</h3>
              <h5 className="fw-bold">Include</h5>
              <ul>
                <li className="list-detail-car">
                  Apa saja yang termasuk dalam paket misal durasi max 12 jam
                </li>
                <li className="list-detail-car">
                  Sudah termasuk bensin selama 12 jam
                </li>
                <li className="list-detail-car">Sudah termasuk Tiket Wisata</li>
                <li className="list-detail-car">Sudah termasuk pajak</li>
              </ul>
              <h5 className="fw-bold">Exclude</h5>
              <ul>
                <li className="list-detail-car">
                  Tidak termasuk biaya makan sopir Rp 75.000/hari
                </li>
                <li className="list-detail-car">
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li className="list-detail-car">
                  Tidak termasuk akomodasi penginapan
                </li>
              </ul>
              <h5 className="fw-bold">Refund, Reschedule, Overtime</h5>
              <ul>
                <li className="list-detail-car">
                  Tidak termasuk biaya makan sopir Rp 75.000/hari
                </li>
                <li className="list-detail-car">
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li className="list-detail-car">
                  Tidak termasuk akomodasi penginapan
                </li>
                <li className="list-detail-car">
                  Tidak termasuk biaya makan sopir Rp 75.000/hari
                </li>
                <li className="list-detail-car">
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li className="list-detail-car">
                  Tidak termasuk akomodasi penginapan
                </li>
                <li className="list-detail-car">
                  Tidak termasuk biaya makan sopir Rp 75.000/hari
                </li>
                <li className="list-detail-car">
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li className="list-detail-car">
                  Tidak termasuk akomodasi penginapan
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card h-100">
            <div className="card-body">
              {Object.entries(car).length ? (
                <div className="car-choosen">
                  <img
                    src={car.image}
                    width={350}
                    height={250}
                    alt=""
                    style={{
                      marginBottom: "40px",
                      marginTop: "40px",
                      marginLeft: "40px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  />
                  <h3 className="fw-bold mb-3">{car.name}</h3>

                  <p>
                    <img
                      src={usersImg}
                      style={{ marginRight: "10px" }}
                      width={15}
                      alt=""
                    />
                    {car.category === "Medium" && "4 - 6 Orang"}{" "}
                    {car.category === "small" && "2- 4 Orang"}{" "}
                    {car.category === "medium" && "4 - 6 Orang"}{" "}
                    {car.category === "large" && "6 - 8 Orang"}
                  </p>
                  <p className="fw-bold">Total Rp. {car.price}</p>
                </div>
              ) : (
                <h1> </h1>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarDetail;
