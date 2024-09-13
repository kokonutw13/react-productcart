import { useState,useEffect } from 'react'
import './index.css'
import { ProductCart } from './ProductCart';
import  './assets/styles/productlist.css'
import { Cart } from './Cart';


function ProductList() {

  const [ data,setData ] = useState([]);

  useEffect(()=>{
    fetch('/data.json')
      .then( (response)=> response.json())
      .then( (jsonData)=> setData(jsonData))
      .catch((error)=> console.warn("Error al cargar los datos.",error))
  }, []);


  return (
    <>  
        {data.map((product,index) => (
            <ProductCart 
            key={index}
            category={product.category} 
            name={product.name}
            price={product.price}
            cantidad={product.cantidad}
            image={product.image}
          />
          ))}
    </>
  )
}

export default ProductList
