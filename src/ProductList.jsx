import './index.css'
import { ProductCart } from './ProductCart';
import  './assets/styles/productlist.css'

import { useFetchData } from './hooks/useFetchData';
import { Cart } from './Cart';

function ProductList() {

      const {product, incrementar, decrementar,cart,eliminarProductCart} = useFetchData();


  return (
    <>  
        <div className="grid">
        {product.map((product,index) => (
            <ProductCart 
            key={index}
            product={product}
            onIncrementar={()=> incrementar(index)}
            onDecrementar={()=> decrementar(index)}
          />
          ))}
        </div>
        <Cart
          cart={cart}
          onDelete={(productname)=> eliminarProductCart(productname)}
        />
          

    </>
  )
}

export default ProductList
