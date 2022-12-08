import React from 'react'
import {NavLink} from "react-router-dom";
import '../App.css';


function Navbar2() {
  return (
    <>
    <div>
      <ul className='A1'>
        <li className ="D2">HOME</li>
        <li className ="D2">ABOUT</li>
        <li className ="D2">OTHERS</li>        
        <li className ="D2">PRACTICE</li>   
        {/* <li className='D2 dropdown'>DROPDOWN</li> */}
        <li class="dropdown">
  <a class="btn btn1 dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    more links
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