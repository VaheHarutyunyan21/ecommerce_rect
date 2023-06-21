import React from 'react';
import { useEffect} from 'react';
import useState from 'react-usestateref'

function AddProducts() {
        const [name, setName] = useState('');
        const [description, setDescription] = useState('');
        const [price, setPrice] = useState('');
        const [categories, setCategories,categoriesRef] = useState([{}]);
        const [categoryId, setCategoryId] = useState('');





        useEffect(()=>{
          fetch('http://localhost:5000/categorys',{
             method:"GET",
             headers:{
                 'Content-type':'application/json'
             }
           })
           .then(response => response.json())
           .then(dat => setCategories(dat),console.log(categories))
           .catch(error => console.error(error))
       },[])
       
     
        const handleNameChange = (event) => {
            setName(event.target.value);
        };
        const handleDescriptionChange = (event) => {
            setDescription(event.target.value);
        };
        const handlePriceChange = (event) => {
            setPrice(event.target.value);
        };
        const handleSelectCategory = (event) => {
          setCategoryId(event.target.value);
          console.log(event.target.value);

      };


        const handleSubmit = async(event) => {
          event.preventDefault();
          console.log(name,description,price);
          
          const respons=await fetch('http://localhost:5000/products',{
              method:"POST",
              headers:{
                  'Content-type':'application/json'
              },
              body:JSON.stringify({
                  name,
                  description,
                  price,
                  categoryId

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
          <form onSubmit={handleSubmit} style={{marginTop:"30vh"}}>


      <select onChange={handleSelectCategory}>
        <option value="">-- Select a category --</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select> 
            
              
              {/* <input list="browsers"  />
              <datalist id="browsers">
                  <option value="Internet Explorer"></option>
                  <option value="Firefox"></option>
                  <option value="Chrome"></option>
                  <option value="Opera"></option>
                  <option value="Safari"></option>
              </datalist> */}
            <label>
              Name:
              <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <label>
              Description:
              <input type="text" value={description} onChange={handleDescriptionChange} />
            </label>
            <label>
              Price:
              <input type="text" value={price} onChange={handlePriceChange} />
            </label>
            <button type="submit">Add Products</button>
          </form>
        );
      }


export default AddProducts;