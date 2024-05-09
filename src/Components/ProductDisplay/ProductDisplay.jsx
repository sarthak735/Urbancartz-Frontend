import React, { useContext } from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className=" flex mt-0 ml-[150px]">
      <div className=" flex gap-[17px]">
        <div className=" flex flex-col gap-[16px]">
          <img src={product.image} alt="" className=" h-[133px] w-[330px]" />
          <img src={product.image} alt="" className=" h-[133px] w-[330px]" />
          <img src={product.image} alt="" className=" h-[133px] w-[330px]" />
          <img src={product.image} alt="" className=" h-[133px] w-[330px]" />
        </div>
        <div>
          <img src={product.image} alt="" className=" w-[1500px] h-[580px]" />
        </div>
      </div>
      <div className=" ml-[70px] mr-[20px] flex flex-col">
        <h1 className=" text-[#3d3d3d] text-[40px] mr-[75px] font-bold">
          {product.name}
        </h1>
        <div className=" flex items-center mt-[13px] gap-[5px] text-[#1c1c1c] text-[16px]">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className=" flex mt-[20px] ml-[0px] gap-[30px] text-[24px] font-bold">
          <div className=" text-[#818181] line-through">
            ${product.old_price}
          </div>
          <div className=" text-[#ff4141] mb-[10px]">${product.new_price}</div>
        </div>
        <div className=" mr-[75px]">
          Keep it classic with a simple yet sophisticated pullover. Featuring a
          subtle raw-edge round neck and long sleeves, it’s perfect for
          smart-casual days at the office. Made from recycled materials.
        </div>
        <div>
          <h1 className=" mt-[20px] text-[#656565] text-[20px] font-semibold">
            Select size
          </h1>
          <div className=" flex mt-[20px] ml-[0px] gap-[20px]">
            <div className=" pt-[18px] pl-[24px] pb-[18px] pr-[24px] bg-[#fbfbfb] border border-solid border-[#ebebeb] rounded-[3px] cursor-pointer">
              S
            </div>
            <div className=" pt-[18px] pl-[24px] pb-[18px] pr-[24px] bg-[#fbfbfb] border border-solid border-[#ebebeb] rounded-[3px] cursor-pointer">
              M
            </div>
            <div className=" pt-[18px] pl-[24px] pb-[18px] pr-[24px] bg-[#fbfbfb] border border-solid border-[#ebebeb] rounded-[3px] cursor-pointer">
              L
            </div>
            <div className=" pt-[18px] pl-[24px] pb-[18px] pr-[24px] bg-[#fbfbfb] border border-solid border-[#ebebeb] rounded-[3px] cursor-pointer">
              XL
            </div>
            <div className=" pt-[18px] pl-[24px] pb-[18px] pr-[24px] bg-[#fbfbfb] border border-solid border-[#ebebeb] rounded-[3px] cursor-pointer">
              XXL
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
          className=" pt-[20px] pr-[40px] pb-[20px] pl-[40px] w-[200px] text-[16px] font-semibold text-white bg-[#FF4141] mb-[40px] mt-[10px] border-none outline-none"
        >
          ADD TO CART
        </button>
        <p className=" mt-[10px]">
          <span className=" font-semibold">Category:</span>Women, T-Shirt, Crop
          Top
        </p>
        <p className=" mt-[10px]">
          <span className=" font-semibold">Tags:</span>Mordern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
