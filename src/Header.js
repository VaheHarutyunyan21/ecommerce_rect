import React from 'react';
import './Header.css';
import nkar from './img/usersicon1.svg';
import logo from './img/logo.png';
import basket from './img/basket.svg';
import logo1 from './img/logoheart.svg'
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import Cart from './Cart';


export default function Header() {

    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [dataCart,setDataCart]=useState([]);

    
          useEffect(()=>{
           fetch('http://localhost:5000/categorys',{
              method:"GET",
              headers:{
                  'Content-type':'application/json'
              }
            })
            .then(response => response.json())
            .then(dat => setData(dat))
            .catch(error => console.error(error))
        },[])

        const  myList =  data.map((dat)=>
        <div key={dat.id} >
              <p className='link'>{dat.name}</p>
        </div>)




    return <div>
        <nav >
            <div className='Header'>
                <div className='divHeader'>
                    <div className='divHeadr1'>
                      {myList}  
                    </div>
                    <div>
                       <Link to='/' > <img className='logoimg' src={logo} /></Link>
                    </div>
                    <div className='divHeadr1'>
                        <a href="" className='link'><img className='usericon' src={nkar} />  My Account  </a>
                        <a href="" className='link'>  <img className='logoheart' src={logo1} />  Wish List (0)  </a>
                        <Link to='/cart' className='link'> <img className='basket' src={basket} /></Link>
                        <a className='link'style={{cursor:'pointer'}} onClick={()=>{ localStorage.removeItem('token');navigate("/login");window.location.reload();}} > Exit </a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
}