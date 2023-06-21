import React from 'react';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

function Categories() {
    const [data, setData] = useState([]);
    
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

        const deleteFunc = async(productId) => {
          
          const respons=await fetch(`http://localhost:5000/deleteCategorys/${productId}`,{
              method:"DELETE",
              headers:{
                  'Content-type':'application/json'
              }
          })
          const data = await respons.json()
          console.log(data);
          if (data === 1) {
            alert("Ok")
            window.location.reload();
        }
        }; 
         const  myList =  data.map((dat)=>
         <div key={dat.id}>
               <h2 >Name:  {dat.name}</h2>
               <button style={{cursor:'pointer'}} onClick={() => deleteFunc(dat.id)}>Delete</button>
               <button style={{cursor:'pointer'}}>Edit</button>
         </div>)
            

        return (
          <div style={{marginTop:"50vh"}}>
            <Link to='/addCategories'>
                <button style={{cursor:'pointer'}}  >Add Categories</button>
            </Link>
             {myList}
          </div>
        )
      }


export default Categories;