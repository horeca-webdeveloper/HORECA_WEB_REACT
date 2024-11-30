import React from "react";

const WishlistBox = ({ data, handlerRemoveWishlist, handleAddToCart }) => {
 
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center rounded-md border-2 w-[100%] mt-[20px]">
        <div className="flex items-center jusfify-center">
          <img
            className="p-[15px] h-[240px] w-[260px]"
            src={"https://testhssite.com/storage/" + data.image}
          />
        </div>
        <div className="flex-col p-[15px] w-[70%]">
          <p className="font-sans p-[5px] text-[18px] font-normal leading-[24px] text-left decoration-slice">
            {data?.product?.name}
          </p>
          <p
            className="font-sans text-[16px] text-[#64748b] p-[5px] font-light leading-[24px] text-left decoration-slice line-clamp-4 overflow-hidden hover:line-clamp-none hover:overflow-visible transition-all duration-300 cursor-pointer"
            dangerouslySetInnerHTML={{ __html: data.description }}
          ></p>
          <p className="font-sans text-[20px] p-[5px] text-[#186737] font-semibold leading-[24px] text-left decoration-slice">
            {data.currency_title?data.currency_title:'USD'} {data.original_price.toFixed(2)}
          </p>
          <p className="font-sans text-[16px] p-[5px] text-[#030303] font-light leading-[24px] text-left underline-offset-auto decoration-slice">
            Delivery Days : {data.delivery_days}
          </p>
        </div>
        <div className="flex items-center justify-center flex-col p-[15px]">
          <button
            onClick={() => handleAddToCart(data)}
            className="flex mb-[5px] bg-[#DEF9EC] items-center justify-center rounded-md font-sans w-[180px] h-[40px] text-[#186737] text-[16px] font-medium leading-[16px] text-left underline-offset-auto decoration-slice"
          >
            Add To Cart
          </button>
          <button
            onClick={() => handlerRemoveWishlist(data)}
            className="flex mt-[5px] items-center justify-center rounded-md font-sans w-[180px] h-[40px] border border-[#666666] text-[16px] text-[#666666] font-medium leading-[16px] text-left underline-offset-auto decoration-slice"
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default WishlistBox;
