import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';   
import axios from "axios";

const Login = (e) => {
  let navigate = useNavigate()
  let url = 'http://localhost:3000/van/login'

  const [email, setLoginMail] = useState("")
  const [password, setPassword] = useState("")

  let userLogin = {
    email,
    password
  }
  // console.log(userLogin);
  
  const login = ()=>{
    axios.post(url, userLogin).then((res)=>{
      console.log(res);
      if (res.data.status == true) {
        toast("Login successfull", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        localStorage.userToken=email
        localStorage.token = res.data.token
        setTimeout(() => {
          navigate('/host');
          
        }, 3000);
      }else if(res.data.status == false){
        toast.error("user not registered", {
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
          navigate('/signup');
          
        }, 3000);
      }else{
        toast.error("Incorrect email or password", {
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
        <br />
        <div className="">
          <h5 className="text-center fw-bold fs-2 mt-5">
            Sign into your account{" "}
          </h5>
          <br />
          <br />

          <div style={{ margin: "0px  5%" }}>
            <input
              className="form-control my-2"
              type="text"
              placeholder="Email"
              onChange={(e)=>setLoginMail(e.target.value)}
            />
            <input
              className="form-control my-2"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="btn btn-transparent  w-100 fw-bold p-3 text-white"
              style={{ backgroundColor: "#fe8d38", margin: "5% 0% " }}
              onClick={login}
            >
              Sign in
            </button>

            <br />
            <br />

            <div className="text-center">
              <span>Don't have an account?</span>
              <Link to={'/signup'} className="text-decoration-none">
              <span style={{ color: "#fe8d38" }}>Create one now</span>
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

export default Login;
