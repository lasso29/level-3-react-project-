import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import imageSrc from "../assets/peachcar.png";
import imagetwo from "../assets/bluecar.png";
import imagethree from "../assets/greencar.png";
import  loadingGif from '../assets/vanbus.gif'
import Footer from "../components/Footer";
import axios from "axios";

const Host = () => {
  let navigate = useNavigate();
  const [userinfo, setUserData] = useState("");
  const [loading, setLoading] = useState(true)
  let url = "http://localhost:3000/van/dashboard";
  // let url = 'https://vanlife-h9ye.onrender.com/van/dashboard'
  const token = localStorage.token;
  useEffect(() => {
    getUserName();
  }, []);

  const getUserName = () => {
    console.log("Function was seeennn");
    axios
      .get(url, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': "application/json",
          "Content-type": "application/json",
          // bearer:`Bearer ${localStorage.userToken}`,
        },
      })
      .then((res) => {
        if (res.data.status === false) {
          localStorage.removeItem('token')
          navigate("/login");
        } else {
          console.log(res);
          console.log(res.data.userDetails.firstName);
          setUserData(res.data.userDetails.firstName);
          setLoading(false)

        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
      });
  };
  return (
    <>
      <div style={{ backgroundColor: "#fef6ed" }}>
        <nav className="navbar p-4">
          <div>
            Welcome{" "}
            <span className="fw-bold text-secondary">
              {userinfo}
            </span>
          </div>
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
              <Link to={"/"} className=" text-black text-decoration-underline">
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
    {
      loading ? (
        <img src={loadingGif} alt="" />
      ): (
        <>
         <div className="container-fluid d-flex gap-">
          <div className="col-md-3 col-lg-1 ">
            <Link to={"/host"}>
              <button className="btn btn-transparent text-dark fw-bold  text-decoration-underline">
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
          <div className="col-md-3 col-lg-1 ">
            <Link to={"/reviews"}>
              <button className="btn btn-transparent ">Reviews</button>
            </Link>
          </div>
        </div>
      

      <div
        className="container-fluid p-4"
        style={{ backgroundColor: "#ffead0" }}
      >
        <h2 className="fw-bold">Welcome!</h2>
        <div className="d-flex justify-content-between">
          <p>
            Income last{" "}
            <span className="text-decoration-underline">30 days</span>
          </p>{" "}
          <span>Details</span>
        </div>
        <span className="fw-bold fs-1">2,260$</span>
      </div>

      <div>
        <div
          className="d-flex justify-content-between align-items-center p-4"
          style={{ backgroundColor: "#feddb3", padding: "10px" }}
        >
          <p className="m-0">
            <span
              className="fw-bold"
              style={{ fontSize: "1.2rem", color: "dark" }}
            >
              Review Score{" "}
            </span>
            <span
              className="fw-bold"
              style={{ fontSize: "1.2rem", color: "dark" }}
            >
              <i className="bi bi-star-fill" style={{ color: "#ff8d39" }}></i>
            </span>
            <span
              className="fw-bold"
              style={{ fontSize: "1.2rem", color: "dark" }}
            >
              {" "}
              5.0
            </span>
            /5
          </p>
          <span>Details</span>
        </div>
      </div>

      <div style={{ backgroundColor: "#fef6ed", padding: "10px" }}>
        <div className="d-flex justify-content-between align-items-center p-4">
          <p className="m-0">
            <span
              className="fw-bold"
              style={{ fontSize: "1.2rem", color: "dark" }}
            >
              Your listed vans
            </span>
          </p>
          <span>View all</span>
        </div>

        <div className="container bg-white p-3">
          <div className="row align-items-center">
            <div className="col-2">
              <img src={imageSrc} alt="" className="img-fluid" />
            </div>
            <div className="col">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="fw-bold text-dark">Modest Explorer</span>
                  <br />
                  <span>$60/day</span>
                </div>
                <span>Edit</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container bg-white p-3 mt-3 mb-3">
          <div className="row align-items-center">
            <div className="col-2">
              <img src={imagetwo} alt="" className="img-fluid" />
            </div>
            <div className="col">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="fw-bold text-dark">Beach bum</span>
                  <br />
                  <span>$80/day</span>
                </div>
                <span>Edit</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container bg-white p-3 mb-5">
          <div className="row align-items-center">
            <div className="col-2">
              <img src={imagethree} alt="" className="img-fluid" />
            </div>
            <div className="col">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="fw-bold text-dark">Green wonder</span>
                  <br />
                  <span>$70/day</span>
                </div>
                <span>Edit</span>
              </div>
            </div>
          </div>
        </div>
          </div>
        </>
      )
    }
       
      </div>
      <Footer />
    </>
  );
};

export default Host;
