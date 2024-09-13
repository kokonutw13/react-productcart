import "./assets/styles/cart.css";

export const Cart = ()=> {
    return(
        <>
            <div className="cart">
                <h3>Your Cart (<span className="cantidad">0</span>)</h3>
                Your added items will appear here
                <ul className="cart-list">
                
                </ul>
                <div className="order">
                <p>Order total: </p><span></span>
                </div>
                <div className="confirm-order">
                <span>Confirm Order</span>
            </div>
        </div>
        </>
    )
}