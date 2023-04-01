import React from "react";
import {Link} from "react-router-dom";
import "./navbar.css"
function Navbar()
{
    return(
        <div>
           <ul>
 
 
 <li><Link to="/" className="App88">Home</Link></li>
  <li><Link to="/Reg" className="App88">Registration</Link></li>
  <li><Link to="/Contact" className="App88">Contact</Link></li>
  <li><Link to="/Login" className="App88"> Login</Link></li>
  <li><Link to="/About" className="App88"> About</Link></li>
  
</ul>
        </div>
    )
}
export default Navbar;