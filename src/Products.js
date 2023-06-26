import React from 'react';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Slideshow from './Slide';

import './Product.css'

function Products() {
    const [data, setData] = useState([]);
    const [quantity, setQuantity] = useState(0);
    

  function addBasket() {
    setQuantity(quantity + 1) ;
    
  }
  console.log(quantity)

    const token = localStorage.getItem('token');
        const payload = atob(token.split('.')[1]);
        const decodedToken = JSON.parse(payload);
        const userId=decodedToken.id;
        const Isadmin=decodedToken.isAdmin;
       
          useEffect(()=>{
           fetch('http://localhost:5000/products',{
              method:"GET",
              headers:{
                  'Content-type':'application/json'
              }
            })
            .then(response => response.json())
            .then(dat => setData(dat))
            .catch(error => console.error(error))
        },[])

        const addCart = async(productId) => {
          
            const respons=await fetch(`http://localhost:5000/carts`,{
                method:"POST",
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify({
                    userId   ,
                    productId,
                    quantity
             }) 

                
            })
            const data = await respons.json()
            if (data === 1) {
              alert("Ok")
              window.location.reload();
          }
          }

          const deleteFunc = async(productId) => {
          
            const respons=await fetch(`http://localhost:5000/deleteProducts/${productId}`,{
                method:"DELETE",
                headers:{
                    'Content-type':'application/json'
                }
            })
            const data = await respons.json()
            if (data === 1) {
              alert("Ok")
              window.location.reload();
          }
          }; 
  


         const  myList =  data.map((dat)=>
         <div className="divData" key={dat.id}>
            <Link to={`/NewProducts/${dat.id}`} style={{color:"black",textDecoration:"none",fontSize:"32px"}}><img className='Header-logo' src={`http://localhost:5000/img/${dat.img}`} alt='logo'/>
            
                <h3 style={{ marginTop: '0'}}>{dat.name}</h3>
            </Link>
             <h4 className='classDtaAll' >{dat.name}</h4>
             <h2 className='classDtaAll'> Դ {dat.price}</h2> 
             { Isadmin == 0 ? (<button className='classbutton'  onClick={() => {addCart(dat.id);addBasket()}}><h4>Add to Cart</h4></button>):("")}
             { Isadmin == 1 ? ( <button className='classbutton' style={{cursor:'pointer'}} onClick={() => deleteFunc(dat.id)}>Delete</button>):("")}
         </div>
         )


        return (
          <div className='divData1' style={{marginTop:"25vh"}}>
          <Slideshow />
             { Isadmin == 1 ? (<Link to='/addProducts'>
                <button style={{padding: '8px 16px',backgroundColor: '#4CAF50',color: 'white',border: 'none',borderRadius: '4px',cursor: 'pointer',marginRight:"67%"}} > + Add Products</button> 
            </Link>):("")}
               <h1> Products</h1>
                {myList}
            </div>  
        )
        }


export default Products;