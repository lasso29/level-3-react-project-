import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../components/Auth";
import  loadingGif from '../assets/vanbus.gif'


const Vans = () => {
  const [vans, setVans] = useState([]);
  const [pickedVan, setPickedVan] = useState(null);
  const [loading, setLoading] = useState(true)
  // https://vanlife-h9ye.onrender.com
  useEffect(() => {
    axios
      .get("https://vanlife-h9ye.onrender.com/api/vans")
      .then((response) => {
        console.log(response.data);
        setVans(response.data);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
      });
  }, []);

  const filterVansByType = (type) => {
    setPickedVan(type);
  };

  const filteredVans = pickedVan
    ? vans.filter((van) => van.type === pickedVan)
    : vans;

  return (
    <>
      <Auth />
      <div style={{ backgroundColor: "#fef6ed" }}>
      <nav className="navbar ">
          <div className="container-fluid animate__animated animate__fadeIn">
            <Link
              to={"/"}
              className="text-decoration-none navbar-brand fw-bold "
            >
              #VANLIFE
            </Link>

            <ul
              className="col-md-3 gap-3  d-flex list-unstyled"
              style={{ cursor: "pointer" }}
            >
              <Link to={"/about"} className="text-decoration-none text-black ">
                About
              </Link>
              <Link
                to={"/vans"}
                className="text-decoration-none text-black text-decoration-underline"
              >
                Vans
              </Link>
            </ul>
          </div>
        </nav>

    {
      loading ? (
        <img src={loadingGif} alt="" style={{width:'100%', height:'100vh'}}/>
      ):(
      <>
         <div className="container mt-5">
          <h4 className="fs-2 text-black fw-bold">Explore Our Van Options</h4>
          <br />
          <div className="d-flex gap-2">
            <div className="col-md-3 col-lg-1">
              <button
                className="btn btn-transparent"
                style={{ backgroundColor: "#feead1", fontFamily: "monospace" }}
                onClick={() => filterVansByType("simple")}
              >
                Simple
              </button>
            </div>
            <div className="col-md-3 col-lg-1">
              <button
                className="btn btn-transparent"
                style={{ backgroundColor: "#feead1" }}
                onClick={() => filterVansByType("luxury")}
              >
                Luxury
              </button>
            </div>
            <div className="col-md-3 col-lg-1">
              <button
                className="btn btn-transparent"
                style={{ backgroundColor: "#feead1" }}
                onClick={() => filterVansByType("rugged")}
              >
                Rugged
              </button>
            </div>
            <div className="col-md-5 col-lg-2">
              <button
                className="btn btn-transparent text-decoration-underline"
                onClick={() => filterVansByType(null)} 
              >
                Clear filter
              </button>
            </div>
          </div>
        </div>

        <div className="container mt-5 gap-">
          <div className="row">
            {filteredVans.map((van) => (
              <div key={van.id} className="col-md-4">
                <img src={van.imageUrl} alt="" className="w-100 mb-2"/>
                <span className="fs-4 fw-bold">{van.name}</span>
                <span className="float-end fs-4 fw-bold">Price: ${van.price}</span>
                <div>
                  <Link to={`/api/vans/${van.id}`} className="text-decoration-none text-dark mt-3">
                    <button className="btn btn transparent text-white  fw-bold" style={{ backgroundColor: van.color || "#e17654" }}>
                      {van.type}
                    </button>
                  </Link>
                  <span className="float-end mb-5">/day</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br />


        <footer className=" bg-dark text-white p-4 ">
          <p className="text-center fs-4">©️ 2022 #VANLIFE</p>
        </footer>
      </>
      )
    }
       
      </div>
    </>
  );
};

export default Vans;
