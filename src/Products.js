import React from 'react';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

function Products() {
    const [data, setData] = useState([]);
    const [quantity, setQuantity] = useState([0]);

    const token = localStorage.getItem('token');
        console.log(token);
        const payload = atob(token.split('.')[1]);
        const decodedToken = JSON.parse(payload);
        console.log('User ID:', decodedToken.id);
        const userId=decodedToken.id;
    



       
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

        const deleteFunc = async(productId) => {
          
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
            console.log(data);
            if (data === 1) {
              alert("Ok")
              window.location.reload();
          }
          }; 

    //     const respons=await fetch('http://localhost:5000/carts',{
    //         method:"POST",
    //         headers:{
    //             'Content-type':'application/json'
    //         },
    //         body:JSON.stringify({
                
                
    //         }) 
    //     })
    //     const x = await respons.json()
    //     console.log(x);
    //     if (x !== null) {
    //       alert("Hajoxutyamb avelacvel e")
    //       window.location.reload();
    //   }};

         const  myList =  data.map((dat)=>
         <div className="divData" key={dat.id}>
            <img className='Header-logo' src={`http://localhost:5000/img/${dat.img}`} alt='logo'/>
          <Link to={`/NewProducts/${dat.id}`}>
                <h3 style={{ marginTop: '0'}}>{dat.name}</h3>
            </Link>
            
             <h4 className='classDtaAll' >{dat.name}</h4>
             <h2 className='classDtaAll'> Դ {dat.price}</h2> 
             
             <button className='classbutton' onClick={() => deleteFunc(dat.id)}><h4>BUY</h4></button>
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