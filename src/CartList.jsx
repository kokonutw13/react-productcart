

export const CartList = ( { name,cantidad,price,onDelete} ) => {
    const result = cantidad * price;
  return (
    <>
        <li className="cart-item">
        <div className="col">
            <h5>{name}</h5>
            <div className="cantidad-item">
                <span>{ cantidad }x</span> <p>@${ price.toFixed(2) }</p> <span>${ result.toFixed(2) }</span>
            </div>
        </div>
        <button className="borrar-product" onClick={ onDelete}>
            <img src="./src/assets/images/icon-remove-item.svg" alt="remover" />
        </button>
        </li>
        <hr />
    </>
  )
}
