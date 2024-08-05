import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Auth from '../components/Auth'

const Hostvans = () => {
    const  [data, setData] = useState([])
    let url = 'https://vanlife-h9ye.onrender.com/api/host/vans'
    // 'http://localhost:3000/api/host/vans'
    
 
    useEffect(() => {
   
        axios.get(url).then((data)=>{
            console.log(data.data);
            setData(data.data)
        }).catch((err)=>{
          console.log(err);
        })
      }, [])
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
              <Link to={"/"} className=" text-black text-decoration-underline fw-bold">
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
            <Link to={'/host'}>
            <button className="btn btn-transparent text-dark fw-bold text-decoration-none">
              Dashboard
            </button>
            
            </Link>
          </div>
          <div className="col-md-3 col-lg-1 ">
            <Link to={'/income'}><button className="btn btn-transparent">Income</button></Link>
          </div>
          <div className="col-md-3 col-lg-1 ">
            <Link to={'/host/vans'}>
            
            <button className="btn btn-transparent text-decoration-underline fw-bold">Vans</button>
            </Link>
          </div>
          <div className="col-md-5 col-lg-2">
          <Link to={'/reviews'}><button className="btn btn-transparent ">Reviews</button></Link>  
          </div>
        </div>
      </div>


           <div style={{ backgroundColor: "#fef6ed", padding: "10px" }}>
        <div
          className="d-flex justify-content-between align-items-center p-4"
          
        >
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
        


{data.map((item, index ) => (
    <div key={index+1}> 
      <div className="container bg-white p-3 mb-5">
       <Link to={`/api/host/vans/${index+1}`} className="text-decoration-none text-dark mt-3">
  <div className="row align-items-center">
    <div className="col-2">
      <img src={item.imageUrl} alt="" className="img-fluid" />
    </div>
    <div className="col">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <span className="fw-bold text-dark">{item.name}</span>
          <br />
          <span>{item.price}$/day</span>
        </div>

      </div>
    </div>
  </div>
  </Link>
</div>
    </div>
))}

      </div>
    <Footer/>
    </>
  )
}

export default Hostvans