import React from "react";
import myImage from "../assets/vansky.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
        <div style={{backgroundColor:'#fef6ed'}}>

     
    <nav className="navbar ">
  <div className="container-fluid animate__animated animate__fadeIn">
  <Link to={"/"} className='text-decoration-none navbar-brand fw-bold '>#VANLIFE</Link> 

    <ul className='col-md-3 gap-3  d-flex list-unstyled' style={{cursor:"pointer"}}>
      <Link to={"/about"} className='text-decoration-none text-black text-decoration-underline'>About</Link>
      <Link to={"/vans"} className='text-decoration-none text-black '>Vans</Link>
  </ul>

  </div>
</nav>
      <img src={myImage} alt="" className="col-12" />
      <div className="container mt-5">
        <h4 className="fw-bold fs-1 text-center" style={{fontWeight:'600px',}}>
          Don't squeeze in a sedan when you can relax in a van.
        </h4>
        <p className="fw-bold">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) <br /><br /> Our
          team is full of vanlife enthusiasts who know firsthand the magic of
          touring the world on 4 wheels.
        </p><br /><br />

        <div style={{backgroundColor:'#ffcd8c'}} className="p-5">
            <p className="fs-3 fw-bold">Your destination is waiting. <br /> Your van is ready.</p>
            <button className="btn btn-dark">Explore our vans</button>
        </div>
      </div><br />
      <footer className=" bg-dark text-white p-4 ">
        <p className="text-center fs-4">©️ 2022 #VANLIFE</p>
      </footer>
      </div>
    </>
  );
};

export default About;
