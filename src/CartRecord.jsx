import React from 'react'

const CartRecord=({ product }) =>{
    const design = { margin: 10, borderStyle: "dashed" };
    return (
        <div className="card-cart" style={design}>
            <img
                className="card-img-left"
                src={product.pic}
                alt="Neka slika" />
            <div className="card-body">
                <h3 className="card-title">{product.title}</h3>
                <p className="card-text">{product.description}</p>
                <h3>Amount: {product.amount}</h3>
            </div>
        </div>
    );
}
  

export default CartRecord
