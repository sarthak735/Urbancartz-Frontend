import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className=' w-80 hover:border hover:transform hover:scale-105 hover:transition'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt=''/></Link>
      <p className=' mt-2 mr-0'>{props.name}</p>
      <div className=' flex gap-5'>
        <div className=' text-gray-600 text-lg font-semibold'>
            ${props.new_price}
        </div>
        <div className=' text-gray-400 text-lg font-medium line-through'>
            ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item
