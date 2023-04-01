import React from "react";
import Navbar from "./navbar";
import './Registration.css';
function Registration()
{
    return(
        <div>
       <Navbar/>

  <div className="container">
    <h3 style={{textAlign:"center"}}>Registration</h3>
   


    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>

    <p>By creating an account you agree to our Terms & Privacy.</p>

    <button type="submit" className="registerbtn">Register</button>
  </div>
  
  <div className="container signin">
    <p>Already have an account? Sign in.</p>
  </div>

        </div>
    )
}
export default Registration;