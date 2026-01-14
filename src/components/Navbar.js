import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="container-fluid " style={{ backgroundColor: "#222831" }}>
        <div className="container ">
          <div className="row p-2 justify-content-center">
            <div className="col p-3 ">
              <Link to={'/'} className=" h2 text-decoration-none" style={{color:'white'}}>Todo</Link>
            </div>
            {/* <div className="col-md-6 col-3 d-flex justify-content-end">
              <div className="item  p-2 m-2 "><Link to={'/musicplayer'} className=" text-decoration-none " style={{color:'white'}}>Music player</Link>
</div>
              <Link to={'/album'} className=" text-decoration-none  p-2 m-2" style={{color:'white'}}>Album</Link>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
