import React from 'react'
import { NavLink } from "react-router-dom";
import '../App.css';


function Navbar2() {
  return (
    <>
      <div>
        <ul className='A1'>
          {/* <NavLink className="logo nav-link" >PB</NavLink> */}
          <li><NavLink className="nav-link" to="/">Home</NavLink></li>
          <li><NavLink className="nav-link" to="/learning">learning</NavLink></li>
          <li><NavLink className="nav-link" to="/Documents">Documents</NavLink></li>
          <li className="dropdown">
            <a className="btn btn1 dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              links
            </a>

            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuLink">
              {/* <li><NavLink className="dropdown-item nav-link" to="/datastore">Database</NavLink></li> */}
              <li><NavLink className="dropdown-item nav-link" to="/a">About</NavLink></li>
              <li><a className="dropdown-item" href="#">Help</a></li>
            </ul>
          </li>
        </ul>

      </div>

    </>
  );
};
export default Navbar2