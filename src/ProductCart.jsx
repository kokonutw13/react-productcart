import './assets/styles/productcart.css';


export const ProductCart = ({product, onIncrementar, onDecrementar})=>{
    
    const {category,name,price,cantidad,image} = product

    return(
          <>
            <div className="card">
              <div className="image">
                <img
                  src={`./src/${image.desktop}`}
                  alt=""
                  className={cantidad > 0 ? 'image-active' : ''}
                />
                <div className={`add-cart ${cantidad > 0 ? 'add-cart-hover' : ''}`}>
                  <div className="view">
                    <img
                      className="cart-icon"
                      src="./src/assets/images/icon-add-to-cart.svg"
                      alt="Agregar al carrito"
                    />
                    <p>Add to cart</p>
                  </div>
                  <div className="active">
                    <button className="less-icon" onClick={onDecrementar}>
                      <img
                        src="./src/assets/images/icon-decrement-quantity.svg"
                        alt="Decrementar"
                      />
                    </button>
                    <p className="count">{cantidad}</p>
                    <button className="plus-icon" onClick={onIncrementar}>
                      <img
                        src="./src/assets/images/icon-increment-quantity.svg"
                        alt="Incrementar"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="info-food">
                <p>{category}</p>
                <h4>{name}</h4>
                <p className="price">${price.toFixed(2)}</p>
              </div>
            </div>
          </>
    )
}