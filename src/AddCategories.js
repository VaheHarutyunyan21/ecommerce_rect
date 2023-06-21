import React from 'react';
import { useState } from 'react';

function Categories() {
        const [name, setName] = useState('');
        const handleNameChange = (event) => {
            setName(event.target.value);
        };
        const handleSubmit = async(event) => {
          event.preventDefault();
          console.log(name);
          const respons=await fetch('http://localhost:5000/categorys',{
              method:"POST",
              headers:{
                  'Content-type':'application/json'
              },
              body:JSON.stringify({
                  name  
              }) 
          })
          const data = await respons.json()
          console.log(data);
          if (data !== null) {
            alert("Hajoxutyamb avelacvel e")
            window.location.reload();
        }
        };



        return (
          <form onSubmit={handleSubmit} style={{marginTop:"30vh"}} >
            <label>
              Name:
              <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <button type="submit" style={{cursor:'pointer'}}>AddCategories</button>
          </form>
        );
      }


export default Categories;