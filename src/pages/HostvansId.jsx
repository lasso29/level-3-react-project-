import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Auth from "../components/Auth";

const HostvansId = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("details");
  const [host, setHostVan] = useState([]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    let url = `https://vanlife-h9ye.onrender.com/api/host/vans/${id}`;
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setHostVan(response.data);
      })
      .catch((error) => {
        console.error("Error fetching van data:", error);
      });
  }, [id]);

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
              <button className="btn btn-transparent text-dark  text-decoration-none">
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
              <button className="btn btn-transparent text-decoration-underline fw-bold">
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

        {host ? (
          <>
            <div className="container bg-white p-3 mb-5">
              <div className="row">
                <div className="col-4">
                  <img src={host.imageUrl} alt="" className="img-fluid" />
                </div>
                <div className="col">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <button
                        className="btn btn-transparent text-white fw-bold"
                        style={{ backgroundColor: host.color || "#e17654" }}
                      >
                        {host.type}
                      </button>
                      <br />
                      <span className="fw-bold text-dark">{host.name}</span>
                      <br />
                      <span>{host.price}$/day</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 row">
                  <span
                    className={`col-3 ${
                      activeTab === "details"
                        ? "text-decoration-underline fw-bold"
                        : ""
                    }`}
                    onClick={() => handleTabClick("details")}
                    style={{cursor:'pointer'}}
                  >
                    Details
                  </span>
                  <span
                    className={`col-3 ${
                      activeTab === "pricing"
                        ? "text-decoration-underline fw-bold"
                        : ""
                    }`}
                    onClick={() => handleTabClick("pricing")}
                    style={{cursor:'pointer'}}
                  >
                    Pricing
                  </span>
                  <span
                    className={`col-2 ${
                      activeTab === "photos"
                        ? "text-decoration-underline fw-bold"
                        : ""
                    }`}
                    onClick={() => handleTabClick("photos")}
                    style={{cursor:'pointer'}}
                  >
                    Photos
                  </span>
                </div>

                <div className="mt-4">
                  {activeTab === "details" && (
                    <div>
                      <b>Name</b>: <span>{host.name}</span>
                      <br />
                      <br />
                      <b>Category</b>: <span>{host.type}</span>
                      <br />
                      <br />
                      <b>Description</b>: <span>{host.description}</span>
                      <br />
                      <br />
                      <b>Visibility</b>: <span>Public</span>
                    </div>
                  )}
                  {activeTab === "pricing" && (
                    <div>
                      <b>Pricing</b>:{" "}
                      <span className="fw-bold">${host.price}.00 </span>
                      <span>/day</span>
                    </div>
                  )}

                  {activeTab === "photos" && (
                    <div>
                      <img
                        src={host.imageUrl}
                        alt=""
                        className="img-fluid"
                        style={{ width: "80px" }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Details not avaliable</p>
        )}
      </div>

      <Footer />
    </>
  );
};

export default HostvansId;
