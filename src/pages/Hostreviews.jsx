import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Auth from "../components/Auth";

const Hostreviews = () => {
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
              <button className="btn btn-transparent">Income</button>
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
              <button className="btn btn-transparent fw-bold text-decoration-underline">
                Reviews
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#fef6ed", padding: "10px" }}>
        <div className="d-flex justify-content-between align-items-center  container">
          <p className="m-0">
            <span
              className="fw-bold gap-3"
              style={{ fontSize: "2.2rem", color: "dark" }}
            >
              Your Reviews
            </span>
            last <span className="text-decoration-underline">30 days</span>
          </p>
        </div>

        <div className="d-flex justify-content-between align-items-center container">
          <p className="m-0 ">
            <span
              className="fw-bold"
              style={{ fontSize: "2.2rem", color: "dark" }}
            >
              {" "}
              5.0
            </span>
            <span
              className="fw-bold"
              style={{ fontSize: "1.2rem", color: "dark" }}
            >
              <i className="bi bi-star-fill " style={{ color: "#ff8d39" }}></i>
            </span>
            overall rating
          </p>
        </div>
        <br />
        <br />

        <div className="row align-items-center mx-auto fw-bold text-secondary">
          <span className="col-2">5 star</span>
          <div
            className="progress col-7"
            style={{ height: "10px", backgroundColor: "#FF8C38" }}
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar"
              style={{ width: "100%", backgroundColor: "#FF8C38" }}
            ></div>
          </div>
          <span className="col-3">100%</span>

          <span className="col-2">4 star</span>
          <div
            className="progress col-7"
            style={{ height: "10px", backgroundColor: "#b9b8b8" }}
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar"
              style={{ width: "100%", backgroundColor: "#b9b8b8" }}
            ></div>
          </div>
          <span className="col-3">0%</span>

          <span className="col-2">3 star</span>
          <div
            className="progress col-7"
            style={{ height: "10px", backgroundColor: "#b9b8b8" }}
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar"
              style={{ width: "100%", backgroundColor: "#b9b8b8" }}
            ></div>
          </div>
          <span className="col-3">0%</span>

          <span className="col-2">2 star</span>
          <div
            className="progress col-7"
            style={{ height: "10px", backgroundColor: "#b9b8b8" }}
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar"
              style={{ width: "100%", backgroundColor: "#b9b8b8" }}
            ></div>
          </div>
          <span className="col-3">0%</span>

          <span className="col-2"> star</span>
          <div
            className="progress col-7"
            style={{ height: "10px", backgroundColor: "#b9b8b8" }}
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar"
              style={{ width: "100%", backgroundColor: "#b9b8b8" }}
            ></div>
          </div>
          <span className="col-3">0%</span>
        </div>

        <div className="container">
          <h5 className="fw-bold mt-4">Reviews (2)</h5>
          <i className="bi bi-star-fill " style={{ color: "#ff8d39" }}></i>{" "}
          <i className="bi bi-star-fill " style={{ color: "#ff8d39" }}></i>{" "}
          <i className="bi bi-star-fill " style={{ color: "#ff8d39" }}></i>{" "}
          <i className="bi bi-star-fill " style={{ color: "#ff8d39" }}></i>{" "}
          <i className="bi bi-star-fill " style={{ color: "#ff8d39" }}></i>
          <br />
          <span className="fw-bold">Elliot</span>{" "}
          <span className="text-secondary fw-bold">December 1, 2022</span>
          <br />
          <div className="text-black mt-2 fw-bold">
            The beach bum is such as awesome van! Such as comfortable trip. We
            had it for 2 weeks and there was not a single issue. Super clean
            when we picked it up and the host is very comfortable and
            understanding. Highly recommend!
          </div>
          <br />
          <hr />
          <i className="bi bi-star-fill " style={{ color: "#ff8d39" }}></i>{" "}
          <i className="bi bi-star-fill " style={{ color: "#ff8d39" }}></i>{" "}
          <i className="bi bi-star-fill " style={{ color: "#ff8d39" }}></i>{" "}
          <i className="bi bi-star-fill " style={{ color: "#ff8d39" }}></i>{" "}
          <i className="bi bi-star-fill " style={{ color: "#ff8d39" }}></i>
          <br />
          <span className="fw-bold">Sandy </span>{" "}
          <span className="text-secondary fw-bold">November 23, 2022</span>
          <br />
          <div className="text-black mt-2 fw-bold">
            This is our third time using the Modest Explorer for our travels and
            we love it! No complaints, absolutely perfect!
          </div>
          <hr />
          <br />
          <br />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Hostreviews;
