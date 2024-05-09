import React from 'react'
import uc_logo from '../Assets/UC_logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className=' flex flex-col justify-center items-center gap-[50px]'>
      
        <div className=' flex items-center gap-[20px]'>
            <img src={uc_logo} alt=''/>
            <p className=' text-[#383838] text-[46px] font-bold'>UrbanCart</p>
        </div>
        <ul className=' flex list-none gap-[50px] text-[#252525] text-[20px]'>
            <li className=' cursor-pointer'>Company</li>
            <li className=' cursor-pointer'>Products</li>
            <li className=' cursor-pointer'>Offices</li>
            <li className=' cursor-pointer'>About</li>
            <li className=' cursor-pointer'>Contact</li>
        </ul>
        <div className=' flex gap-[20px]'>
            <div className=' p-[10px] pb-[6px] bg-[#fbfbfb] border border-solid border-[#ebebeb]'>
                <img src={instagram_icon} alt=''/>
            </div>
            <div className=' p-[10px] pb-[6px] bg-[#fbfbfb] border border-solid border-[#ebebeb]'>
                <img src={pintester_icon} alt=''/>
            </div>
            <div className=' p-[10px] pb-[6px] bg-[#fbfbfb] border border-solid border-[#ebebeb]'>
                <img src={whatsapp_icon} alt=''/>
            </div>
        </div>
        <div className=' flex flex-col items-center gap-[30px] w-[100%] mb-[10px] text-[#1a1a1a] text-[20px]'>
            <hr className=' w-[80%] border-none rounded-[10px] h-[3px] bg-[#c7c7c7]'/>
            <p>Copyright @ 2024 -  All Right Reserved</p>
        </div>
        
    </div>
  )
}

export default Footer
