import {useParams } from "react-router-dom";
import { useEffect,useState } from 'react';
 import './NewProducts.css'



  export const NewProducts = (props)=>{

    const {id}=useParams()
    const[watch,setWatch]=useState([]);
    useEffect(()=>{
         fetch("http://localhost:5000/dataProducts/"+id)
        .then(res =>res.json())
        .then(res=>setWatch(res))   
    },[]);
 

 return (
    <div className="newProductAll" >
      <div className="container">
        <img className='Header-logo' src={`http://localhost:5000/img/${watch.img}`} alt='logo'/>
        <h2 >{watch.name}</h2>
        
        <h2 className="h" >Դ {watch.price}</h2>
        <p className="p"><h4>Նկարագիր`</h4>{watch.description}</p>
          <button className="button" >Gnel</button>
      </div>
    </div>)
 
 }
    