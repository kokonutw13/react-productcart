import { useEffect, useState } from "react";
import { getData } from "../helpers/getData.js";




export const useFetchData = ()=>{
    const [products, setProducts] = useState([]);


    //Conseguimos la data  
    const getProducts = async()=>{
        const newData = await getData();
        setProducts(newData);
    }
        
     // Usamos useEffect para llamar a getProducts una vez al montar el componente.
    // Esto evita que los datos se vuelvan a cargar cada vez que el componente se renderiza.
    useEffect(() => {
      getProducts()
  }, [])

    
    const incrementar = (idproduct)=>{ 
          //en i === keyindex verifico el producto escogido
          setProducts(prevProducts => prevProducts.map(
            (product, i) => i === idproduct ? { ...product, cantidad: product.cantidad + 1 } : product
          ));
    };
  
    const decrementar = (idproduct) => {
      setProducts(prevData =>

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

    const comprarProducts = ()=>{
      setProducts((prev)=>prev.map(product=> ({...product, cantidad: 0})))
    }

    const cartProduct = products.filter(product => product.cantidad > 0);
    

    return{
        product: products,
        incrementar,
        decrementar,
        cart: cartProduct,
        eliminarProductCart,
        comprarProducts
    }
}
