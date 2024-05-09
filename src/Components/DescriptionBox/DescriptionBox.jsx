import React from 'react'

const DescriptionBox = () => {
  return (
    <div className=' mt-[120px] ml-[150px]'>
      <div className=' flex'>
        <div className=' flex items-center justify-center text-[16px] font-semibold w-[171px] h-[70px] border border-solid border-[#d0d0d0]'>
            Description
        </div>
        <div className=' flex items-center justify-center text-[16px] font-semibold w-[171px] h-[70px] border border-solid border-[#d0d0d0] bg-[#FBFBFB] text-[#555]'>
            Reviews (122)
        </div>
      </div>
      <div className=' flex flex-col gap-[25px] border border-solid border-[#D0D0D0] p-[48px] pb-[70px]'>
        <p>Nail transitional dressing with this classic merino-wool blend pullover. It features a subtle yet stylish mock neck and matching finely ribbed cuffs and hem. It’s also made with innovative COOLMAX® technology that is engineered to be moisture-wicking and ultra-breathable. Style it with a pair of slim-fitting chinos and some suede desert boots. Throw on a wool overcoat if the wind picks up.</p>

        <p>
        Introducing a new iteration of Berg, our best-selling knitwear. Crafted from soft Pima cotton, this pullover comes in a classic cable knit with a ribbed round neck and matching cuffs.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
