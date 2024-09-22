import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProductList from './ProductList.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <div className="container">
          <ProductList />  
      </div>
  </StrictMode>,
)
