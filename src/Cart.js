import React from 'react';
import { useEffect,useState } from 'react';



export default function Cart(props) {
   
   // const names = Array.isArray(props.name) ? props.name : [];
   const [dataCart,setDataCart]=useState([]);


   const token = localStorage.getItem('token');
        console.log(token);
   useEffect(()=>{
    if (token!==null) {
        const payload = atob(token.split('.')[1]);
        const decodedToken = JSON.parse(payload);
        console.log('User ID:', decodedToken.id);
        const userId=decodedToken.id;

     fetch(`http://localhost:5000/dataCarts/${userId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
},
})
.then(response => response.json())
.then(dat => setDataCart(dat))
.catch(error => console.error(error))
    }
console.log(dataCart);
},[])

useEffect(()=>{
  


},[])
  
    return (
      <div>


        {dataCart.map((value, index) => (
          <div key={index} style={{marginTop:"30vh"}}>
            <h2>Name:{value.productData.name}</h2>
            <h2>Price:{value.productData.price}</h2>
            <h2>Description:{value.productData.description}</h2>
             <img className='Header-logo' src={`http://localhost:5000/img/${value.productData.img}`} alt='logo'/>

            </div>
      ))}

      
      </div>
    );
  }
  