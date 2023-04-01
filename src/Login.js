import React from "react";
import './Login.css'
import Navbar from "./navbar";
import {Link} from 'react-router-dom'
function Login()
{
    return(
        <div>
       <Navbar/>
       <div>
          
          <div className="bg_image">
          <div className="container" id="App9">

<br />
<br />

<div className="row">
  <div>
      <div className="card mb-2" id="App7">
          <div className="card-body" style={{ backgroundColor: "#eeefff" }}>
              <div className="text-center">
                  <h3 className="fw-bold text" >LOGIN</h3>
              </div>

            

              <div className="text-left">
                  <form name='login'>

                      <div className="mb-2">
                          <label htmlFor="email" className="fw-bold text">User Name *</label>
                          <input type="text" className="form-control" placeholder="Enter User Id" />
                      </div>

                      <div className="mb-2">
                          <label htmlFor="password" className="fw-bold text">PASSWORD *</label>
                          <input type="password" placeholder="Enter Password" />
                      </div>
                    
                      

                      <div className="d-grid">

                          <input type="submit" className="btn btn-success" value="LOGIN" />
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </div>
</div>
</div>
     
    </div>

     

      </div>
        </div>
    )
}
export default Login;