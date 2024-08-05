import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../components/Footer";
import axios from "axios";

const Signup = (e) => {
  let navigate =  useNavigate();
  // e.preventDefault();

  const [firstName, SetFullName] = useState("")
  const [phoneCode, setPhoneCode] = useState("")
  const [email, setEmail]= useState("")
  const [gender, setGender]= useState("")
  const [password, setPassword]=useState("")



  

  // let url = 'http://localhost:3000/van/signup'
  // let url = 'https://vanlife-h9ye.onrender.com/van/signup'
  let url = 'http://localhost:3000/van/signup'
  const signup = ()=>{
    let userForm={
      firstName,
      phoneCode,
      email,
      gender,
      password,
    }
    console.log(userForm);
    console.log("Sign up button clicked");
    axios.post(url, userForm).then((res)=>{
      console.log(res);
      if (res.data.status == true) {
        toast("User Signed up successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        setTimeout(() => {
          navigate('/login');
          
        }, 3000);
      }else if(res.data.status == false){
        toast.error("Email already exists 👾", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      }else{
        toast.error("Internal server error ", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      }
    })
  }
 
  return (
    <>
      <div style={{ backgroundColor: "#fef7ec" }}>
      <nav className="navbar p-4">
      <div className="container-fluid">
        <Link to={"/"} className="text-decoration-none navbar-brand fw-bold">
          #VANLIFE
        </Link>

        <ul className="col-md-3 gap-3 d-flex list-unstyled">
          <li className="nav-item">
            <Link to={"/host"} className="nav-link">Host</Link>
          </li>
          <li className="nav-item">
            <Link to={"/about"} className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to={"/vans"} className="nav-link">Vans</Link>
          </li>
          <li className="nav-item">
            <i className="bi bi-person-circle"></i>
          </li>
        </ul>
      </div>
    </nav>

        <br />
        <div className="">
          <h5 className="text-center fw-bold fs-2 mt-2">Sign up vans life..</h5>
          <br />
          <br />

          <div style={{ margin: "0px  5%" }}>
            <input
              className="form-control my-2"
              type="text"
              placeholder="Enter full name"
              value={firstName}
              onChange={(e) => SetFullName(e.target.value)}
            />

            <input
              className="form-control my-2"
              type="text"
              placeholder="+234"
              value={phoneCode}
              onChange={(e) => setPhoneCode(e.target.value)}
            />

            <input
              className="form-control my-2"
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e)=>setEmail( e.target.value)}
            />

            <input
              className="form-control my-2"
              type="text"
              placeholder="Gender"
              value={gender}
              onChange={(e)=>setGender(e.target.value)}
            />




    




            <input
              className="form-control my-2"
              type="password"
              maxLength={16}
              minLength={4}
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <button
              className="btn btn-transparent  w-100 fw-bold p-3 text-white"
            onClick={signup}
              style={{ backgroundColor: "#fe8d38", margin: "5% 0% " }}
            >
              Sign up
            </button>

            <br />
            <br />

            <div className="text-center">
              <span>Already have an account?</span>
              <Link className="text-decoration-none" to={'/login'}>
              
              <span  style={{ color: "#fe8d38" }}>Login here</span>
              </Link>
            </div>
            <br />
            <br />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Signup;
