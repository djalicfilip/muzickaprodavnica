import React from 'react'
import {FaPlus} from "react-icons/fa"
import {FaMinus} from "react-icons/fa"

const design = { margin: 10, borderStyle: "double" };

const OneRecord = ({product, onAdd, onRemove}) => {
   
    
  return (
    <div className="card" style={design}>
    <img className="card-img-top" src={product.pic} alt="album" />
    <div className="card-body">
      <h3 className="card-title">{product.title}</h3>
      <p className="card-text">{product.description}
      </p>
      <button className="btn" onClick={() => onAdd(product.id)}><FaPlus/></button>
      <button className="btn" onClick={() => onRemove(product.id)}><FaMinus/></button>
    </div>
  </div>
  );
};

export default OneRecord
