import React from 'react';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Slideshow from './Slide';

function Categories() {
    const [data, setData] = useState([]);
    //const [delite, deleteFunc] = useState([]);
    const token = localStorage.getItem('token');
    const payload = atob(token.split('.')[1]);
    const decodedToken = JSON.parse(payload);
    const Isadmin=decodedToken.isAdmin;
    
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
          if (data === 1) {
            alert("Ok")
            window.location.reload();
        }
        }; 

        
         const  myList =  data.map((dat)=>
         <div key={dat.id}>
               <h3 >Name:  {dat.name}</h3>
               { Isadmin == 1 ? (<button style={{cursor:'pointer'}} onClick={() => deleteFunc(dat.id)}>Delete</button>):("")}
               { Isadmin == 1 ? (<button style={{cursor:'pointer'}}>Edit</button>):("")}
         </div>)
            

        return (
          <div style={{marginTop:"25vh"}}>
            <Slideshow />
            <h1>Categories</h1>

           { Isadmin == 1 ? (<Link to='/addCategories'>
                <button style={{cursor:'pointer'}}  >Add Categories </button>
            </Link>):("")}

             {myList}
             
          </div>
        )
      }


export default Categories;