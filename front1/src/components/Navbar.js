import React from 'react'
import {NavLink} from "react-router-dom";
import '../App.css';

function Navbar() {
  return (
    <>
    <nav className="A1 navbar navbar-expand-lg ">
  <div className="container-fluid">
   
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/about">About</NavLink>
        <NavLink className="nav-link" to="/datastore">Datastore</NavLink>

        {/* <NavLink className="nav-link disabled">Disabled</NavLink> */}
      </div>
    </div>
       <div className='D1'>
      <NavLink 
      className="nav-link dropdown-toggle D3" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </NavLink>
          <ul className="dropdown-menu D2">
            <li className="D2"><NavLink className="dropdown-item" to="#">Action</NavLink></li>
            <li className="D2"><NavLink className="dropdown-item" to="#">Another</NavLink></li>
            <li className="D2"><hr className="dropdown-divider"/></li>
            <li className="D2"><NavLink className="dropdown-item" to="#">Something </NavLink></li>
          </ul>
      </div>
  </div>                          
</nav>
    </>
  )
}

export default Navbar