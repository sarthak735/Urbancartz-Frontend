import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
  return (
    <div className=" mt-[100px] ml-[150px] mr-[150px]">
      <div className=" grid grid-cols-6 items-center gap-[75px] pt-[20px] pl-[0px] text-[#454545] text-[18px] font-semibold">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className=" h-[3px] bg-[#e2e2e2] border-0" />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="grid grid-cols-6 items-center gap-[75px] pt-[20px] pl-[0px] text-[#454545] text-[18px] font-semibold">
                <img src={e.image} alt=""/>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className=" w-[50px] h-[50px] border-[2px] border-solid border-[#ebebeb] bg-[#fff]">{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                  className="w-[25px] cursor-pointer"
                />
              </div>
              <hr className=" h-[3px] bg-[#e2e2e2] border-0 mt-[10px]" />
            </div>
          );
        }
        return null;
      })}
      <div className=" flex mt-[100px] ml-[0px]">
        <div className=" flex-1 flex flex-col mr-[200px] gap-[40px]">
            <h1>Cart Totals</h1>
            <div>
                <div className=" flex justify-between pt-[15px] pl-[0px]" >
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr className=" h-[3px] bg-[#e2e2e2] border-0 mt-[10px]"/>
                <div className=" flex justify-between pt-[15px] pl-[0px]">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr className=" h-[3px] bg-[#e2e2e2] border-0 mt-[10px]"/>
                <div className=" flex justify-between pt-[15px] pl-[0px] font-semibold">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button className=" w-[262px] h-[58px] outline-none border-none bg-[#ff5a5a] text-[#fff] text-[16px] font-semibold cursor-pointer">PROCEED TO CHECKOUT</button>
        </div>
        <div className=" flex-1 text-[16px] font-medium">
            <p className=" text-[#555]">If you have a promo code, Enter it here</p>
            <div className=" w-[504px] mt-[15px] pl-[20px] h-[58px] bg-[#eaeaea]">
                <input type="text" placeholder="promo code" className=" border-none outline-none bg-transparent text-[16px] w-[330px] h-[50px]"/>
                <button className=" w-[150px] h-[58px] text-[16px] bg-black text-white cursor-pointer">Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
