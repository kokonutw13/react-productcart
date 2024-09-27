import "./assets/styles/cart.css";
import { CartList } from "./CartList";

export const Cart = ({ cart,onDelete,confirmOrder })=> {


    return(
        <>
            <div className="cart">
                <h3>Your Cart (<span className="cantidad">0</span>)</h3>
                Your added items will appear here
                <ul className="cart-list">
                    {cart.map((product,index)=>
                        <CartList
                            key={index}
                            {...product}
                            onDelete={()=> onDelete(product.name)}
                            />
                    )}
                </ul>
                <div className="order">
                <p>Order total: </p><span>${cart.reduce((acc,curr)=>acc + curr.price * curr.cantidad,0)}</span>
                </div>
                <button onClick={confirmOrder} className="confirm-order">
                    Confirm Order
                </button>
            </div>
        </>
    )
}