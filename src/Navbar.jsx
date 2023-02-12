import React from 'react'
import {HiShoppingCart} from 'react-icons/hi'
import { Link } from 'react-router-dom' 

function NavBar({cartNum}){
    return(
        <div className='navBar'>
         <Link to="/"><h2>Rayons Record store</h2></Link>    
       < Link to="/cart" className="cart-items">
        <HiShoppingCart style={{ marginLeft: 10 }} />
        <div className="cart-num">{cartNum}</div>
      </Link>
       </div>
    )
}

export default NavBar