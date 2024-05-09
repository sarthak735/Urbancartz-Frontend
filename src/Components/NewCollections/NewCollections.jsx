import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'

const NewCollections = () => {

  const [new_collections, setNew_collection] = useState([]);
  
  useEffect(() =>{
    fetch('http://localhost:4000/newcollections').then((response) => response.json()).then((data) => setNew_collection(data))
  },[])
  return (
    <div className=' flex flex-col items-center gap-3 mb-[100px]'>
      <h1 className=' text-black text-5xl font-semibold'>NEW COLLECTIONS</h1>
      <hr className=' w-52 h-[6px] rounded-xl bg-neutral-700'/>
      <div className=' grid grid-cols-4 mt-[50px] gap-[30px]'>
        {new_collections.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollections
