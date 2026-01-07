import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
   <>
   
   <div className="container-fluid" style={{backgroundColor:'#2D3C59'}}>
   <div className="container " >

<div className="row text-center ">
   <nav className=" col h2 " >
  <NavLink className="navbar-brand m-2 " style={{color:'white'}}  >Todo</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  {/* <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav mx-auto" >
      <li className="nav-item active" >
        <NavLink className="nav-link" to={'/home'} style={{color:'white'}}>Home <span className="sr-only" ></span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to={'/home/todos'} style={{color:'white'}} >Todos</NavLink>
      </li>

    </ul>
  </div> */}
</nav>
</div>
   </div>
   </div>
   
   </>
  )
}

export default Navbar
