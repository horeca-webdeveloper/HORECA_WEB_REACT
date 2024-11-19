import React from "react";
import SidebarProfile from "../../components/SidebarProfile";
import { Wrapper } from "../../shared/Wrapper";

const Wishlist = () => {
  return (
    <>
      <Wrapper>
        <div className="flex">
          <SidebarProfile />
          {/* WishList Section */}
          <div className="flex flex-col p-[10px] justify-between w-[100%] h-[100%]">
            <p className=" font-light font-sans text-[18px] font-normal leading-[24px] text-left decoration-slice">
              My Wishlist
            </p>
            <div className="flex flex-col sm:flex-row items-center rounded-md border-2 w-[100%] mt-[10px]">
              <div className="flex items-center jusfify-center">
                <img
                  className="p-[15px] h-[240px] w-[260px]"
                  src={process.env.PUBLIC_URL + "/icons/Export2.png"}
                />
              </div>
              <div className="flex-col p-[15px] w-[70%]">
                <p className="font-sans p-[5px] text-[18px] font-normal leading-[24px] text-left decoration-slice">
                  Baron Q90FRI/G823 Gas Deep Fryer 2 Tanks, 23 + 23 L, 42 kW, 80
                  x 90 x 87 cm
                </p>
                <p className="font-sans text-[16px] text-[#64748b] p-[5px] font-light leading-[24px] text-left decoration-slice">
                  Lorem ipsum dolor sit amet consectetur. A sit senectus lectus
                  blandit viverra pellentesque nisl tellus risus. Quam purus
                  risus pharetra pellentesque ut egestas est auctor Habitant et
                  posuere sed risus elementum Tempor nunc id amet pharetra.
                </p>
                <p className="font-sans text-[20px] p-[5px] text-[#186737] font-semibold leading-[24px] text-left decoration-slice">
                  SAR 5,500
                </p>
                <p class="font-sans text-[16px] p-[5px] text-[#030303] font-light leading-[24px] text-left underline-offset-auto decoration-slice">
                  Delivery Date : 30 Oct, 2024
                </p>
              </div>
              <div className="flex items-center justify-center flex-col p-[15px]">
                <button className="flex mb-[5px] bg-[#DEF9EC] items-center justify-center rounded-md font-sans w-[180px] h-[40px] text-[#186737] text-[16px] font-medium leading-[16px] text-left underline-offset-auto decoration-slice">
                  Add To Cart
                </button>
                <button className="flex mt-[5px] items-center justify-center rounded-md font-sans w-[180px] h-[40px] border border-[#666666] text-[16px] text-[#666666] font-medium leading-[16px] text-left underline-offset-auto decoration-slice">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Wishlist;
