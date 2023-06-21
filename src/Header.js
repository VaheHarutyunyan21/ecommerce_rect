import React from 'react';
import './Header.css';
import nkar from './img/usersicon1.svg';
import logo from './img/logo.png';
import basket from './img/basket.svg';
import logo1 from './img/logoheart.svg'
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import Cart from './Cart';

export default function Header() {

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

        const token = localStorage.getItem('token');
        // console.log(token);
        const payload = atob(token.split('.')[1]);
        const decodedToken = JSON.parse(payload);
        console.log('User ID:', decodedToken.id);
        const userId=decodedToken.id;

        useEffect(()=>{

fetch(`http://localhost:5000/dataCarts/${userId}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
.then(response => response.json())
.then(dat => setDataCart(dat.productData))
.catch(error => console.error(error))

        },[])




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
                        <Link to='/cart'><a href="" className='link'>  <img className='basket' src={basket} /> </a></Link>
                        
                    </div>
                </div>
            </div>
        </nav>
        <Cart name={dataCart} />
    
    </div>
}