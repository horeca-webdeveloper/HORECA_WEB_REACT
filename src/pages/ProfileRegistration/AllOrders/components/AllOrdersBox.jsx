import React from "react";

const AllOrdersBox = ({ data, id, setImageView, setShowPopup }) => {
  const ordersImages = data?.products?.map((item) => {
    return item?.images;
  });
  return (
    <div key={id} className="border-2 w-[99%] rounded p-[10px] mb-[20px]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col sm:flex-row">
          <div className="border-r-2 h-[55px] p-[10px] ml-[10px] mr-[10px]">
            <span className="font-sans  text-center text-base font-normal leading-6 text-left text-[#666666] decoration-clone">
              Order Number
            </span>
            <p className="font-sans text-base font-normal leading-6 text-left text[#030303] decoration-slice">
              {data?.code}
            </p>
          </div>
          <div className="border-r-2 h-[55px] p-[10px] ml-[10px] mr-[10px]">
            <span className="font-sans text-center text-base font-normal leading-6 text-left text-[#666666] decoration-clone">
              Created date
            </span>
            <p className="font-sans text-base font-normal leading-6 text-left text[#030303] decoration-slice">
              {data?.updated_at.split("T")[0]}
            </p>
          </div>
          <div className="border-r-2 h-[55px] p-[10px] ml-[10px] mr-[10px]">
            <span className="font-sans text-center text-base font-normal leading-6 text-left text-[#666666] decoration-clone">
              Payment method
            </span>
            <p className="font-sans text-base font-normal leading-6 text-left text[#030303] decoration-slice">
              online / Cash
            </p>
          </div>
          <div className="border-r-2 h-[55px] text-center p-[10px] ml-[10px] mr-[10px]">
            <span className="font-sans text-center text-base font-normal leading-6 text-left text-[#666666] decoration-clone">
              Order status
            </span>
            <p className="font-sans text-base font-normal leading-6 text-left text[#030303] decoration-slice">
              {data?.status?.value}
            </p>
          </div>
          <div className="border-r-2 h-[55px] text-center p-[10px] ml-[10px] mr-[10px]">
            <span class="font-sans text-center text-base font-normal leading-6 text-left text-[#666666] decoration-clone">
              Payment Status
            </span>
            <p className="font-sans text-base font-normal leading-6 text-left text[#030303] decoration-slice">
              Pending
            </p>
          </div>
        </div>
        <div className="flex flex-col p-[15px]">
          <p className="font-sans mb-[4px] text-base text-right font-light leading-[24px] text-left text-[#666666] decoration-0">
            Order Total
          </p>
          <p className="font-sans text-[14px] font-normal leading-[24px] text-left text-[#666666] decoration-0">
            SAR{" "}
            <span className="font-sans text-[22px] font-semibold leading-[24px] text-left text-[black] decoration-0">
              {data?.amount.split(".")[0]}
            </span>
            .{data?.amount.split(".")[1]}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center p-[0px]">
            {ordersImages[0] && ordersImages[0][0] && (
              <div className="relative p-[5px] m-[5px] rounded border">
                <img
                  className="h-[42px]"
                  src={"https://testhssite.com/storage/" + ordersImages[0][0]}
                  alt="Product"
                  onClick={() => {
                    setImageView(
                      "https://testhssite.com/storage/" + ordersImages[0][0]
                    );
                    setShowPopup(true);
                  }}
                />
                <span className="flex items-center justify-center absolute w-[20px] h-[20px] top-[-10px] right-[-10px] bg-red-500 text-white text-xs font-bold rounded-full px-2">
                  {data?.products[0]?.quantity}
                </span>
              </div>
            )}
            {ordersImages[1] && ordersImages[1][0] && (
              <div className="relative p-[5px] m-[5px] rounded border">
                <img
                  className="h-[42px]"
                  src={"https://testhssite.com/storage/" + ordersImages[1][0]}
                  alt="Product"
                  onClick={() => {
                    setImageView(
                      "https://testhssite.com/storage/" + ordersImages[1][0]
                    );
                    setShowPopup(true);
                  }}
                />
                <span className="flex items-center justify-center absolute w-[20px] h-[20px] top-[-10px] right-[-10px] bg-red-500 text-white text-xs font-bold rounded-full px-2">
                  {data?.products[1]?.quantity}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="p-[15px]">
          <div className="p-[2px]  rounded px-[15px] p-[5px] text-[white] bg-[#186737] mx-auto ml-[0px]">
            <button className="font-work-sans w-[122px] h-[30px] text-[16px] font-nomal text-center underline-from-font no-underline-skip">
              Order Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOrdersBox;