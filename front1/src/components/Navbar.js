import React from 'react'
import {NavLink} from "react-router-dom";
import '../App.css';

function Navbar() {
  return (
    <>
    <nav className="A1 navbar navbar-expand-lg ">
  <div className="container-fluid">
    {/* <NavLink className="navbar-brand" to="/navbar">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
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
            <li className="D2"><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
            <li className="D2"><hr className="dropdown-divider"/></li>
            <li className="D2"><NavLink className="dropdown-item" to="#">Something else here</NavLink></li>
          </ul>
      </div>
  </div>                          
</nav>
    </>
  )
}

export default Navbar