import './assets/styles/productcart.css';


export const ProductCart = ({category,name,price,cantidad,image})=>{
    
    return(
        <>
          <div className="card">
          <div className="image">
            <img src={"./src/"+ image.desktop} alt="" />
            <div className="add-cart">
              <div className="view">
                <img className="cart-icon" src="./src/assets/images/icon-add-to-cart.svg" alt="" />
                <p>Add to cart</p>
              </div>
              <div className="active">
                <div className="less-icon">
                  <img src="./src/assets/images/icon-decrement-quantity.svg" alt="" />
                </div>
                <p className="count">{cantidad}</p>
                <div className="plus-icon">
                  <img src="./src/assets/images/icon-increment-quantity.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="info-food">
              <p> { category } </p>
              <h4> { name } </h4>
              <p className="price"> ${ price.toFixed(2) } </p>
            </div>
          </div>
        </>
    )
}