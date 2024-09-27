import './assets/styles/modal.css';

export const Modal = ({ onClose, cartModal,buyProduct }) => {
  return (
    <div className="modal">
    <div className="modal-content">
        <div className="moda-image">
            <img src="./images/icon-order-confirmed.svg" alt="Confirmación de la compra" />
        </div>
      <div className="top-modal">
        <h3>Order Confirmed</h3>
      <p>We hope you enjoy your food!</p>
      </div>
      <div className="list-products">
            <ul>
                {cartModal.map(({name,cantidad,price,image},i)=>(
                    <li key={i} >
                      <div className="cantidad-item">
                        <div className="name-product">
                          <img src={`${image.thumbnail}`} alt="food" />
                          <p>{name} {cantidad} </p>
                        </div>
                        <div className="price">
                          $ {price.toFixed(2)}
                        </div>
                      </div>
                    </li>
                ))}
            </ul>  
        <div className="total-order">
          <p>Order Total</p>
          <span>${cartModal.reduce((acc,curr)=>acc + curr.price * curr.cantidad,0)}</span>
        </div>
      </div>
      <button onClick={()=>{
          onClose()
          buyProduct()
      }
        } className="confirm-order">
        <span>Start New Order</span>
      </button>
    </div>
  </div>
  )
}
