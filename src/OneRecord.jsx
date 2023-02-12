import React from 'react'
import {FaPlus} from "react-icons/fa"
import {FaMinus} from "react-icons/fa"

const design = { margin: 10, borderStyle: "double" };

const OneRecord = ({product}) => {
  return (
    <div className="card" style={design}>
    <img className="card-img-top" src={product.pic} alt="album" />
    <div className="card-body">
      <h3 className="card-title">{product.title}</h3>
      <p className="card-text">{product.description}
      </p>
      <a className="btn"><FaPlus/></a>
      <a className="btn"><FaMinus/></a>
    </div>
  </div>
  );
};

export default OneRecord
