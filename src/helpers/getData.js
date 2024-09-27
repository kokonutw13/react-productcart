

export const getData = async()=>{
    const URL = './data.json';
    const respuesta = await fetch(URL);
    const data = await respuesta.json();
    const products = data.map(product=>({...product, cantidad: 0}) ) 
    return products;
}


// fetch('/data.json')
// .then( (response)=> response.json())
// .then( (jsonData)=> {
//   const updateData = jsonData.map(item=>({...item,cantidad: 0}))
//   setData(updateData)
// })
// .catch((error)=> console.warn("Error al cargar los datos.",error))