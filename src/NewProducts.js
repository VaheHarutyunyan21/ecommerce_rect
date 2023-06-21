import {useParams } from "react-router-dom";
import { useEffect,useState } from 'react';
// import {data} from './Data';
 import './NewProducts.css'



  export const NewProducts = (props)=>{

    const {id}=useParams()
    const[watch,setWatch]=useState([]);
    useEffect(()=>{
         fetch("http://localhost:5000/dataProducts/"+id)
        .then(res =>res.json())
        .then(res=>setWatch(res))   

    },[])

 ;
//  const product = data.find((product)=>product.id === +productid )
 

 return (
    <div className="newProductAll" >
      {/* <div className="divImg">
        <img  className="img" src={ watch.img} alt='name' />
      </div> */}
      <div className="container">
        <h2 >{watch.name}</h2>
        <h2 className="h" >Դ {watch.price}</h2>
        <p className="p">
          <h4>Նկարագիր`</h4>
          {watch.description}
          </p>
          <button className="button" >Ավելացնել զամբյուղ</button>
      </div>
        
       
        
    </div>
 )

}