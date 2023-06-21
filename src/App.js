//import {Header  } from "./Header";
import { Register } from "./Register";
import {Login  } from "./Login";
import AdminHome from "./AdminHom.js"
import  Products  from "./Products";
import Categories from "./Categories";
import AddCategories from "./AddCategories";
import AddProducts from "./AddProducts";
import { useEffect } from 'react';
import Header from "./Header"
import './App.css';
import { Routes,Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {NewProducts} from './NewProducts'

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Retrieve data from localStorage
    const storedData = localStorage.getItem('token');
    console.log(location.pathname);

    if (storedData) {
      // Do something with the retrieved data
      console.log(storedData);
    }
    else{

      if(location.pathname=='/register' ){
       return navigate("/register")

      }
      else{
        return navigate("/login")
        console.log(navigate.name);


      }
          }
  }, []);
  return (
    <div className="App">
        <Header />
        <Routes >
            <Route path='/register' element= {<Register/>}/>
            <Route path='/login' element= {<Login/>}/>
            <Route path='/admin' element={<AdminHome />  }/>
            <Route path='/products' element= {<Products/>}/>
            <Route path='/categories' element= {<Categories/>}/>
            <Route path='/addCategories' element= {<AddCategories/>}/>
            <Route path='/addProducts' element= {<AddProducts/>}/>
            <Route path='/NewProducts/:id' element= {<NewProducts />}/>
        </Routes>


    </div>
  );
}

export default App;


