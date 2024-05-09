import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext.jsx'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item.jsx'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div>
      <img src={props.banner} alt='' className=' block mt-[30px] ml-[125px] w-[82%]'/>
      <div className=' flex mt-0 ml-[125px] mr-[125px] justify-between items-center'>
        <p className=' font-semibold'>
          <span className=' font-semibold'>Showing 1-12</span> out of 36 products
        </p>
        <div className=' pt-[10px] pl-[20px] rounded-[40px] border border-solid border-[#888]'>
          <button className=' '>Sort by <img src={dropdown_icon} alt=''/></button>
        </div>
      </div>
      <div className=' mt-[20px] ml-[125px] mr-[175px] grid grid-cols-4 gap-y-20 gap-x-20'>
        {all_product.map((item, i) => {
          if(props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }else{
            return null;
          }
        })}
      </div>

      <div className=' flex justify-center items-center mt-[100px] mb-[30px] ml-[645px] w-[233px] h-[69px] rounded-[75px] bg-[#ededed] text-[#787878] text-[18px] font-medium'>
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
