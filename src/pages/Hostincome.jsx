import React from "react";
import { Link } from "react-router-dom";
import inCome from '../assets/vanchart.png'
import Footer from "../components/Footer";
import Auth from "../components/Auth";

const Hostincome = () => {
  return (
    <>
    <Auth/>
      <div style={{ backgroundColor: "#fef6ed" }}>
        <nav className="navbar p-4">
          <div className="container-fluid ">
            <Link
              to={"/"}
              className="text-decoration-none navbar-brand  fw-bold "
            >
              #VANLIFE
            </Link>

            <ul
              className="col-md-3 gap-3 f  d-flex list-unstyled"
              style={{ cursor: "pointer" }}
            >
              <Link
                to={"/"}
                className=" text-black text-decoration-underline fw-bold"
              >
                Host
              </Link>
              <Link to={"/about"} className="text-decoration-none text-black ">
                About
              </Link>
              <Link to={"/vans"} className="text-decoration-none text-black ">
                Vans
              </Link>
              <br />
            </ul>
          </div>
        </nav>

        <div className="container d-flex ">
          <div className="col-md-3 col-lg-1 ">
            <Link to={"/host"}>
              <button className="btn btn-transparent text-dark fw-bold  text-decoration-none">
                Dashboard
              </button>
            </Link>
          </div>
          <div className="col-md-3 col-lg-1 ">
            <Link to={"/income"}>
              <button className="btn btn-transparent fw-bold text-decoration-underline">
                Income
              </button>
            </Link>
          </div>
          <div className="col-md-3 col-lg-1 ">
            <Link to={"/host/vans"}>
              <button className="btn btn-transparent text-decoration-none ">
                Vans
              </button>
            </Link>
          </div>
          <div className="col-md-5 col-lg-2">
            <Link to={"/reviews"}>
              <button className="btn btn-transparent ">Reviews</button>
            </Link>
          </div>
        </div>

        <div className="container">
          <br />
          <p className="display-5 fw-bold">Income</p>
          <span className="text-secondary">Last</span>{" "}
          <span className="text-decoration-underline text-secondary fw-bold ">
            {" "}
            30 days
          </span>
          <p className="display-3 mt-4 fw-bold">$2,260</p>
          <br />
          <br />
          <img
            src={inCome}
            alt=""
            className="container-fluid col-lg-7"
          />
          <div style={{ backgroundColor: "#fef6ed", padding: "10px" }}>
            <div className="d-flex justify-content-between align-items-center p-2">
              <p className="m-0">
                <span
                  className="fw-bold"
                  style={{ fontSize: "1.2rem", color: "dark" }}
                >
                  Your transactions (3)
                </span>
              </p>
              <span>
                Last{" "}
                <span className="text-decoration-underline text-secondary fw-bold">
                  {" "}
                  30 days
                </span>
              </span>
            </div>

            <div className="container bg-white p-3">
              <div className="row align-items-center">
                <div className="col">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <span className="fw-bold text-dark fs-2">$720</span>
                      <br />
                    </div>
                    <span className="">1/12/22</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="container bg-white p-3 mt-3 mb-3">
              <div className="row align-items-center">
                <div className="col">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <span className="fw-bold text-dark fs-2">$560</span>
                      <br />
                    </div>
                    <span className="">1/12/22</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="container bg-white p-3 mb-4">
              <div className="row align-items-center">
                <div className="col">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <span className="fw-bold text-dark fs-2">$980</span>
                      <br />
                    </div>
                    <span className="">1/12/22</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hostincome;
