import React from 'react'
import OneRecord from './OneRecord'



const Records = ({products})=> {
  return (
    <div className='all-products'>
      <OneRecord product={products[0]}/>
      <OneRecord product={products[1]}/>
      <OneRecord product={products[2]}/>

    </div>
  )
}

export default Records
