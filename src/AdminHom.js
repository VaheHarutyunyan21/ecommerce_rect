import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function AdminHome() {
  const navigate = useNavigate();

  return (
    <div style={{marginTop:"50vh"}}>
        <div onClick={()=>{ localStorage.removeItem('token');navigate("/login");window.location.reload();}} 
            style={{fontSize:20,position:'relative',left:'40%',cursor:'pointer'}}>Exit 
        </div>
      <Link to="/products">  Products  </Link>
      <Link to="/categories">  Categories  </Link>

    </div>
  )
}

export default AdminHome;