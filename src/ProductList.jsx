import './index.css'
import { ProductCart } from './ProductCart';
import  './assets/styles/productlist.css'

import { useFetchData } from './hooks/useFetchData';
import { Cart } from './Cart';
import { Modal } from './Modal';
import { useState } from 'react';

function ProductList() {

      const {product, incrementar, decrementar,cart,eliminarProductCart,comprarProducts} = useFetchData();
      const [modalClicked, setmodalClicked] = useState(false)
      const toggleModal  = ()=>{
        setmodalClicked(modal => !modal)
      }
  return (
    <>  
        <div className="content">
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
            confirmOrder={toggleModal }
          />
        </div>

        {modalClicked && (
          <Modal style={{ display: 'block' }} onClose={toggleModal} buyProduct={comprarProducts} cartModal={cart}/>
        )}

    </>
  )
}

export default ProductList
