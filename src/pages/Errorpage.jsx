import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Errorpage = () => {
  return (
    <>
      <div style={{ backgroundColor: "#fef7ec" }}>
        <nav className="navbar p-4">
          <div className="container-fluid ">
            <Link
              to={"/"}
              className="text-decoration-none navbar-brand  fw-bold "
            >
              #VANLIFE
            </Link>

            <ul
              className="col-md-3 gap-3  d-flex list-unstyled"
              style={{ cursor: "pointer" }}
            >
              <Link to={"/"} className="text-decoration-none text-black ">
                Host
              </Link>
              <Link to={"/about"} className="text-decoration-none text-black ">
                About
              </Link>
              <Link to={"/vans"} className="text-decoration-none text-black ">
                Vans
              </Link>
              <i className="bi bi-person-circle"></i>
            </ul>
          </div>
        </nav>
        <br />
        <br />
        <div className="container">
          <h5 className="fw-bold fs-2 mt-5 text-black">
            Sorry, the page you were <br /> looking for was not found.{" "}
          </h5>
        </div>
        <br />
        <br />

        <div style={{ margin: "0px  5%" }}>
          <button
            className="btn btn-dark  w-100 fw-bold p-3 text-white"
            style={{ margin: "5% 0% " }}
          >
            Return to home
          </button>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
};

export default Errorpage;
