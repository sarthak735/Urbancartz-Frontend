import React, { useEffect, useState } from 'react'
// import data_product from '../Assets/data';
import Item from '../Item/Item';

const Popular = () => {

  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() =>{
    fetch('http://localhost:4000/popularinwomen').then((response) => response.json()).then((data) => setPopularProducts(data));
  },[])

  return (
    <div className=' flex flex-col items-center gap-3 h-[90vh]'>
      <h1 className=' text-black text-5xl font-semibold'>POPULAR IN WOMEN</h1>
      <hr className=' w-52 h-[6px] rounded-xl bg-neutral-700'/>
      <div className=' mt-12 flex gap-8'>
        {popularProducts.map((item, i) =>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
