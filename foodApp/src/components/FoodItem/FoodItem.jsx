import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id, name, image, description, price}) => {
    // const [itemCount, setItemCount]=useState(0)
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);


  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img src={image} className='food-item-image' alt="" />
            {!cartItems[id] 
            ? <img src={assets.add_icon_white} className='add' onClick={()=>addToCart(id)} /> 
            : <div className='food-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" srcset="" />
                <p>{cartItems[id]}</p>
                <img src={assets.add_icon_green} alt=""  onClick={()=>addToCart(id)}/>
                </div>}
            {/* {!itemCount 
            ? <img src={assets.add_icon_white} className='add' onClick={()=>setItemCount(prev=>prev + 1)} /> 
            : <div className='food-item-counter'>
                <img onClick={()=>setItemCount(prev=> prev - 1)} src={assets.remove_icon_red} alt="" srcset="" />
                <p>{itemCount}</p>
                <img src={assets.add_icon_green} alt=""  onClick={()=>setItemCount(prev=> prev + 1)}/>
                </div>} */}
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-description">
                {description}
            </p>
            <p className='food-item-price'>${price}</p>
        </div>
    </div>
  )
}

export default FoodItem