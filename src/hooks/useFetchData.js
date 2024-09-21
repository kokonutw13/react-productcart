import { useEffect, useState } from "react";
import { getData } from "../helpers/getData";




export const useFetchData = ()=>{
    const [products, setProducts] = useState([]);


    //Conseguimos la data  
    const getProducts = async()=>{
        const newData = await getData();
        setProducts(newData);
    }
        
    //Creamos la función getProducts con async, por al razón que devuelve una promesa se creó
    //esa funcion. Para poder asi luego llamarla dentro de un useEffect y evitar repetir la carga de un componente
    useEffect(() => {
      getProducts()
  }, [])

    
    const incrementar = (idproduct)=>{     
          //Me dio error porque estoy dentro de llaves y no di un Return, 
          //en i === keyindex verifico el producto escogido
          setProducts(prevProducts => prevProducts.map(
            (product, i) => i === idproduct ? { ...product, cantidad: product.cantidad + 1 } : product
          ));
    };
  
    const decrementar = (idproduct) => {
      setProducts(prevData =>
        //Aqui no le puse llaves,por lo tanto no me dará error porque ya esta el return por defecto
        prevData.map((product, i) =>
          i === idproduct && product.cantidad > 0 ? { ...product, cantidad: product.cantidad - 1 } : product
        )
      );
    };
    
    const eliminarProductCart = (name) => {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.name === name ? { ...product, cantidad: 0 } : product
        )
      )
    }



    const cartProduct = products.filter(product => product.cantidad > 0);
    

    return{
        product: products,
        incrementar,
        decrementar,
        cart: cartProduct,
        eliminarProductCart
    }
}