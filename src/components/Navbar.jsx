
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
<nav className="navbar bg-body-tertiary">
  <div className="container-fluid animate__animated animate__fadeIn">
  <Link to={"/"} className='text-decoration-none navbar-brand fw-bold '>#VANLIFE</Link> 

    <ul className='col-md-3 gap-3  d-flex list-unstyled' style={{cursor:"pointer"}}>
      <Link to={"/about"} className='text-decoration-none text-black '>About</Link>
      <Link to={"/vans"} className='text-decoration-none text-black '>Vans</Link>
  </ul>

  </div>
</nav>



    
    </>
  )
}

export default Navbar
