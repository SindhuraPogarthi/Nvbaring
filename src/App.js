import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contactus from './ContactUs';
import Login from './Login';
import Registration from './Registration';
import Aboutus from './Aboutus';
import Home from './Home';
function App() {
  return (
    <>
      <BrowserRouter>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/Contact' element={<Contactus/>}/>
     <Route path='/Login' element={<Login/>}/>
     <Route path='/Reg' element={<Registration/>}/>
     <Route path='/About' element={<Aboutus/>}/>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
