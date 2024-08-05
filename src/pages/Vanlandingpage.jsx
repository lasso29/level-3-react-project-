import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Vanlandingpage = () => {
  return (
    <>
      <Navbar />
      <div className="myComponent p-5">
        <br />
        <br />
        <p className="text-center fs-1 fw-bold text-white ">
          You got the travel plans, we got the travel vans.
        </p>
        <p className="text-center text-white">
          Add adventure to your life by joining the #vanlife movement. <br />{" "}
          Rent the perfect van to make your perfect road trip.
        </p>
        <p></p>
        <Link to={"/signup"}>
          <button
            className="btn btn-transparent  col-12 fw-bold p-3 text-white"
            style={{ backgroundColor: "#fe8d38", margin: "10% 0% " }}
          >
            Find your van
          </button>
        </Link>
      </div>
      <footer className=" bg-dark text-white p-4 ">
        <p className="text-center fs-4">©️ 2022 #VANLIFE</p>
      </footer>
    </>
  );
};

export default Vanlandingpage;
