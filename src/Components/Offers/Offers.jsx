import React from 'react'
import exclusive_img from '../Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className=' w-[85%] h-[65vh] flex m-auto pt-0 pl-36 mb-[150px] bg-[linear-gradient(180deg,_#fde1ff_0%,_#e1ffea22_60%)]'>
      <div className=' flex-1 flex flex-col justify-center'>
        <h1 className=' text-[#171717] text-7xl font-semibold'>Exclusive</h1>
        <h1 className=' text-[_#171717] text-7xl mt-7 font-semibold'>Offers For You</h1>
        <p className='text-[_#171717] text-base mt-5 font-semibold'>ONLY ON BEST SELLERS PRODUCT</p>
        <button className=' w-[262px] h-[70px] rounded-[35px] bg-[#ff4141] border-none text-white text-base font-medium mt-8 cursor-pointer'>Check Now</button>
      </div>
      <div className=' flex-1 flex items-center justify-center pt-[50px]'>
        <img src={exclusive_img} alt=''/>
      </div>
    </div>
  )
}

export default Offers
