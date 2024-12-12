import React from "react";

const WishlistBox = ({ data, handlerRemoveWishlist, handleAddToCart }) => {
 
  return (
    <>
      <div className="flex overflow-hidden flex-col sm:flex-row items-start sm:items-between rounded-md border-2 w-[100%] mt-[20px]">
        <div className="flex mb-[-20px] items-center jusfify-center">
          <img
            className="p-[15px] h-[100px] sm:h-[240px] w-[100px] sm:w-[260px]"
            src={"https://testhssite.com/storage/" + data.image}
          />
          {window?.innerWidth < 640 && (
            <p className="font-sans p-[5px] text-[14px] font-normal leading-[24px] text-left decoration-slice">
              {data?.name}
            </p>
          )}
        </div>
        <div className="flex-col p-[15px] w-[100%] sm:w-[70%]">
          {window?.innerWidth > 640 && (
            <p className="font-sans p-[5px] text-[18px] font-normal leading-[24px] text-left decoration-slice">
              {data?.name}
            </p>
          )}
          <p
            className="font-sans text-[12px] sm:text-[16px] text-[#64748b] px-[5px] sm:p-[5px] font-light leading-[24px] text-left decoration-slice line-clamp-4 overflow-hidden hover:line-clamp-none hover:overflow-visible transition-all duration-300 cursor-pointer"
            dangerouslySetInnerHTML={{ __html: data.description }}
          ></p>
          <div className="flex flex-row sm:flex-col justify-between">
            <p className="font-sans text-[20px] p-[5px] text-[#186737] font-semibold leading-[24px] text-left decoration-slice">
              {data.currency_title ? data.currency_title : "USD"}{" "}
              {data.original_price.toFixed(2)}
            </p>
            <p className="font-sans text-[16px] p-[5px] text-[#030303] font-light leading-[24px] text-left underline-offset-auto decoration-slice">
              Delivery Days : {data.delivery_days}
            </p>
          </div>
        </div>
        <div className="flex items-center w-[100%] h-[100%] sm:h-[230px] mt-[-20px] sm:mt-[0] sm:w-[20%] justify-between sm:justify-center flex-row sm:flex-col p-[15px]">
          <button
            onClick={() => handleAddToCart(data)}
            className="flex mb-0 sm:mb-[5px] bg-[#DEF9EC] items-center justify-center rounded-md font-sans w-[175px] sm:w-[180px]  h-[40px] text-[#186737] text-[16px] font-medium leading-[16px] text-left underline-offset-auto decoration-slice"
          >
            Add To Cart
          </button>
          <button
            onClick={() => handlerRemoveWishlist(data)}
            className="flex mt-0 sm:mt-[5px] items-center justify-center rounded-md font-sans w-[175px] sm:w-[180px] h-[40px] border border-[#666666] text-[16px] text-[#666666] font-medium leading-[16px] text-left underline-offset-auto decoration-slice"
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default WishlistBox;
