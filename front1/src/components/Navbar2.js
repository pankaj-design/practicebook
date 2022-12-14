import React from 'react'
import {NavLink} from "react-router-dom";
import '../App.css';


function Navbar2() {
  return (
    <>
    <div>
      <ul className='A1'>
        <NavLink className="nav-link" >PB</NavLink>
        <li><NavLink className="nav-link" to="/">Home</NavLink></li>
        <li><NavLink className="nav-link" to="/about">About</NavLink></li>
        <li><NavLink className="nav-link" to="/datastore">Datastore</NavLink></li>
        <li class="dropdown">
  <a class="btn btn1 dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
  links
  </a>

  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</li>
      </ul>
      
    </div>
   
   </>
  );
  };
export default Navbar2