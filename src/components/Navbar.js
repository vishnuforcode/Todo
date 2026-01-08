import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
   <>
   
   <div className="container-fluid" style={{backgroundColor:'#222831'}}>
   <div className="container " >

<div className="row text-center ">
   <nav className=" col-lg-3 col-12 h2 m-2  " >
  <NavLink className="navbar-brand  " style={{color:'white'}}  >Todo</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

</nav>
</div>
   </div>
   </div>
   
   </>
  )
}

export default Navbar
