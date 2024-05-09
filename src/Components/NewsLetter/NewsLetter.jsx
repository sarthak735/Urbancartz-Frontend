import React from 'react'

const NewsLetter = () => {
  return (
    <div className=' w-[65%] h-[40vh] flex flex-col items-center justify-center m-auto pt-0 pr-[140px] mb-[150px] bg-[linear-gradient(180deg,_#fde1ff_0%,_#e1ffea22_60%)] gap-[30px]'>
      <h1 className=' text-[#454545] text-[55px] font-semibold'>Get Exclusive Offers On Your Email</h1>
      <p className=' text-[#454545] text-[20px]'>Subscribe to our newsletter and stay updated</p>
      <div className=' flex items-center justify-between bg-white w-[730px] h-[70px] rounded-[80px] border border-solid border-[#e3e3ee]'>
        <input type="email" placeholder='Your Email id' className=' w-[500px] ml-[30px] border-none outline-none text-[#616161] font-[Poppins] text-[16px]'/>
        <button className=' w-[210px] h-[70px] rounded-[80px] bg-black text-white text-base cursor-pointer'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
