import React from 'react'
import arrow_icon from "../Assets/breadcrum_arrow.png";

const BreadCrum = (props) => {
    const {product} = props;
  return (
    <div className=' flex items-center gap-[8px] text-[#5e5e5e] text-[16px] font-semibold mt-[20px] ml-[150px] mb-[20px] capitalize'>
      HOME <img src={arrow_icon} alt=''/> SHOP <img src={arrow_icon} alt=''/> {product.category} <img src={arrow_icon} alt=''/> {product.name}
    </div>
  )
}

export default BreadCrum