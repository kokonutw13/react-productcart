import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProductList from './ProductList.jsx'
import './index.css'
import { Cart } from './Cart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <div className="container">
        <div className="content">
          <div className="grid">
            <ProductList />  
          </div>
          <Cart/>
        </div>
      </div>
  </StrictMode>,
)
