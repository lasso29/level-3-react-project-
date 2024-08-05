import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Auth from "../components/Auth";

const Vandetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    // https://vanlife-h9ye.onrender.com/
    axios
      .get(`https://vanlife-h9ye.onrender.com/api/vans/${id}`)
      .then((res) => {
        console.log(res.data);
        setDetails(res.data);
      });
  }, [id]);

  return (
    <>
    <Auth/>
      <div style={{ backgroundColor: "#fef6ed" }}>
        <div className="container">
          <br />
          <i className="bi bi-arrow-left fs-6"></i>{" "}
          <Link to={"/vans"} className="fs-6 text-dark mb-3">
            Back to all vans
          </Link>
          <br />
          <br />
          {details ? (
            <>
              <div>
                <img className="container " src={details.imageUrl} alt="" />
                <br />
                <button
                  className="btn btn transparent text-white mt-5 fw-bold"
                  style={{ backgroundColor: details.color || "#e17654" }}
                >
                  {details.type}
                </button>
                <br />
                <h1 className="fs-1 fw-bold">{details.name}</h1>
                <span className="fs-3 fw-bold">{details.price}$</span>{" "}
                <span>/day</span>
                <p className=" fw-bold"> {details.description}</p>
                <button
                  className="btn btn-transparent  col-12 fw-bold p-3 text-white"
                  style={{ backgroundColor: "#fe8d38", margin: "10% 0% " }}
                >
                  Rent this van
                </button>
              </div>
            </>
          ) : (
            <p>Loading</p>
          )}
        </div>

        <footer className=" bg-dark text-white p-3 ">
          <p className="text-center fs-4">©️ 2022 #VANLIFE</p>
        </footer>
      </div>
    </>
  );
};

export default Vandetails;
