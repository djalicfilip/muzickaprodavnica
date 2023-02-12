import React from 'react'
import OneRecord from './OneRecord'



const Records = ({products, onAdd, onRemove })=> {
  return (
    <div className='all-products'>
  {products.map((product)=>(
    <OneRecord 
    key={product.id}
    product={product} 
    onAdd={onAdd}
    onRemove={onRemove}
    />
  ))}

    </div>
  )
}

export default Records
