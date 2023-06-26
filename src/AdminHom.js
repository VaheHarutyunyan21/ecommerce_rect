import React from 'react';
import { Link } from 'react-router-dom';
import Slideshow from './Slide';

function AdminHome() {

  return (
    <div style={{marginTop:"25vh"}}>
      <Slideshow />
      <div style={{padding:"3vh"}}>
        <Link to="/products" style={{color:"black",textDecoration:"none",fontSize:"32px"}}>  Products  </Link>

      <Link to="/categories"  style={{color:"black",textDecoration:"none",fontSize:"32px",padding:"20px"}}>  Categories  </Link>
      </div>
      

    </div>
  )
}

export default AdminHome;