import React from 'react';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

function Products() {
    const [data, setData] = useState([]);
       
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
           

         const  myList =  data.map((dat)=>
         <div className="divData" key={dat.id}>
          <Link to={`/NewProducts/${dat.id}`}>
                <h3 style={{ marginTop: '0'}}>{dat.name}</h3>
            </Link>
               
             <h4 className='classDtaAll' >{dat.name}</h4>
             <h2 className='classDtaAll'> Դ {dat.price}</h2> 
             <button className='classbutton' ><h4>Գնել</h4></button>
         </div>
         )



        return (
          <div className='divData1' style={{marginTop:"30vh"}}>
            <Link to='/addProducts'>
                <button>Add Products</button>
            </Link>
               <h1>User Products</h1>
                {myList}
            </div>  
        )
      }


export default Products;