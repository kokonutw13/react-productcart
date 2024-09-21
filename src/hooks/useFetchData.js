import { useEffect, useState } from "react";
import { getData } from "../helpers/getData";
import { Cart } from "../Cart";



export const useFetchData = ()=>{
    const [data, setData] = useState([]);

    const [cartProduct, setCartProduct] = useState([]);

    //Conseguimos la data  
    const getProducts = async()=>{
        const newData = await getData();
        setData(newData);
    }

    
    const incrementar = (idproduct)=>{
        setData((prevData)=>{
          //Me dio error porque estoy dentro de llaves y no di un Return, 
          //en i === keyindex verifico el producto escogido
          return prevData.map((product,i)=>i === idproduct ? { ...product, cantidad: product.cantidad + 1} : product)
          })
    };
  
    const decrementar = (idproduct) => {
      setData(prevData =>
        //Aqui no le puse llaves,por lo tanto no me dará error porque ya esta el return por defecto
        prevData.map((product, i) =>
          i === idproduct && product.cantidad > 0 ? { ...product, cantidad: product.cantidad - 1 } : product
        )
      );
    };

    const eliminarProductCart = (name)=>{
        setCartProduct(prevData=> prevData.filter((product)=> product.name != name))
        
        setData(prevData=> prevData.map(product=> {
          if(product.name.includes(name)){
            return {...product,cantidad: 0}
          }
          return product
        } ))
    }

    // const cartProduct = ()=> data.filter((product)=>product.cantidad > 0);
    // Actualizamos cartProduct cuando data cambie
    useEffect(() => {
        const updatedCartProduct = data.filter((product) => product.cantidad > 0);
        setCartProduct(updatedCartProduct);
    }, [data]); // Dependencia: actualizamos cuando data cambie

    
    //Creamos la función getProducts con async, por al razón que devuelve una promesa se creó
    //esa funcion. Para poder asi luego llamarla dentro de un useEffect y evitar repetir la carga de un componente
    useEffect(() => {
        getProducts()
    }, [])
    

    return{
        product: data,
        incrementar,
        decrementar,
        cart: cartProduct,
        eliminarProductCart
    }
}