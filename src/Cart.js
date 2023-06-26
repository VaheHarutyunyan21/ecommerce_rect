import React from 'react';
import { useEffect,useState } from 'react';
import './Cart.css'


export default function Cart(props) {
   
   const [dataCart,setDataCart]=useState([]);


   const token = localStorage.getItem('token');
   useEffect(()=>{
    if (token!==null) {
        const payload = atob(token.split('.')[1]);
        const decodedToken = JSON.parse(payload);
        const userId=decodedToken.id;

     fetch(`http://localhost:5000/dataCarts/${userId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
},
})
.then(response => response.json())
.then(dat =>setDataCart(dat) )
.catch(error => console.error(error))

    }
},[])
console.log(dataCart);

const deleteFunc = async(id) => {
          
  const respons=await fetch(`http://localhost:5000/deleteCarts/${id}`,{
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

  
    return (
      <div>
    <h2 style={{marginTop:"25vh",marginRight:"84%"}}>Shopping Cart</h2>
    <table className="product-table">
      
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Image</th>
          <th>Quantity</th>
          <th>Delete Products</th>
        </tr>
      </thead>
      <tbody>
        {dataCart.map((product) => (
          <tr key={product.id}>
            <td>{product.productData.name}</td>
            <td>{product.productData.description}</td>
            <td>{product.productData.price}</td>
            <td>
              <img className='' src={`http://localhost:5000/img/${product.productData.img}`} alt={product.name}/>
            </td>
            <td><input value={product.quantity} /></td>
            <td><button className='classbutton' style={{cursor:'pointer'}} onClick={() => deleteFunc(product.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
      </div>
    );
  }
  