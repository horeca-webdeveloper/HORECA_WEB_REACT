import React from "react";
import SidebarProfile from "../../components/SidebarProfile";
import { Wrapper } from "../../shared/Wrapper";

const AllOrders = () => {
  return (
    <>
      <Wrapper>
        <div className="flex">
          <SidebarProfile />
          <div className="flex flex-col  w-[100%]">
            {/* Sub-Navbar */}
            <div className="flex p-[10px] justify-between w-[100%]">
              <div className="flex flex-wrap w-[45%] justify-between mt-[5px]">
                <p className="font-work-sans text-[#186737] text-base font-normal leading-6 text-left decoration-none">
                  All Orders
                </p>
                <p className="font-work-sans text-[#666666] text-base font-normal leading-6 text-left decoration-none">
                  Processing
                </p>
                <p className="font-work-sans text-[#666666] text-base font-normal leading-6 text-left decoration-none">
                  Shipped
                </p>
                <p className="font-work-sans text-[#666666] text-base font-normal leading-6 text-left decoration-none">
                  Delivered
                </p>
                <p className="font-work-sans text-[#666666] text-base font-normal leading-6 text-left decoration-none">
                  Returns
                </p>
              </div>
              <div className="w[100%]">
                <input
                  className="border rounded-[20px] border-2 w-[200px] sm:w-[350px] p-[5px]"
                  type="input"
                  placeholder="Item Name / Order ID / Tracking No."
                />
              </div>
            </div>
            <div className="border-2 w-[98%] p-[10px] m-[10px]">
              <div className="flex flex-col sm:flex-row">
                <div className="border-r-2 p-[10px] ml-[10px] mr-[10px]">
                  <span className="text-[#666666]">Order Number</span>
                  <p>T5347-485-009</p>
                </div>
                <div className="border-r-2 p-[10px] ml-[10px] mr-[10px]">
                  <span className="text-[#666666]">Created date</span>
                  <p>19-oct-2024, 4:45 PM</p>
                </div>
                <div className="border-r-2 p-[10px] ml-[10px] mr-[10px]">
                  <span className="text-[#666666]">Payment method</span>
                  <p>Cash on Delivery</p>
                </div>
                <div className="border-r-2 p-[10px] ml-[10px] mr-[10px]">
                  <span className="text-[#666666]">Order status</span>
                  <p>Placed</p>
                </div>
                <div className="border-r-2 p-[10px] ml-[10px] mr-[10px]">
                  <span className="text-[#666666]">Payment Status</span>
                  <p>Pending</p>
                </div>
              </div>
              <div className="flex flex-wrap p-[5px] m-[10px]">
                <div className="p-[5px]">
                  <img
                    className="h-[60px]"
                    src={process.env.PUBLIC_URL + "/icons/Export.png"}
                  />
                </div>
                <div className="p-[5px]">
                  <img
                    className="h-[60px]"
                    src={process.env.PUBLIC_URL + "/icons/Export2.png"}
                  />
                </div>
                <div className="p-[5px]">
                  <img
                    className="h-[60px]"
                    src={process.env.PUBLIC_URL + "/icons/Export2.png"}
                  />
                </div>
                <div className="p-[5px]">
                  <img
                    className="h-[60px]"
                    src={process.env.PUBLIC_URL + "/icons/Export2.png"}
                  />
                </div>
                <div className="p-[5px]">
                  <img
                    className="h-[60px]"
                    src={process.env.PUBLIC_URL + "/icons/Export2.png"}
                  />
                </div>
                <div className="p-[5px]">
                  <img
                    className="h-[60px]"
                    src={process.env.PUBLIC_URL + "/icons/Export2.png"}
                  />
                </div>
                <div className="p-[5px]">
                  <img
                    className="h-[60px]"
                    src={process.env.PUBLIC_URL + "/icons/Export2.png"}
                  />
                </div>
                <div className="p-[5px]">
                  <img
                    className="h-[60px]"
                    src={process.env.PUBLIC_URL + "/icons/Export2.png"}
                  />
                </div>
                <div className="p-[5px]">
                  <img
                    className="h-[60px]"
                    src={process.env.PUBLIC_URL + "/icons/Export2.png"}
                  />
                </div>
                <div className="p-[5px]">
                  <img
                    className="h-[60px]"
                    src={process.env.PUBLIC_URL + "/icons/Export2.png"}
                  />
                </div>
                <div className="p-[5px]">
                  <img
                    className="h-[60px]"
                    src={process.env.PUBLIC_URL + "/icons/Export2.png"}
                  />
                </div>
                <div className="p-[5px] flex items-center justify-center h-[60px] w-[60px] border-2 mt-[5px]">
                  +16
                </div>
                <div className="p-[5px] rounded px-[15px] p-[5px] text-[white] bg-[#186737] mx-auto ml-[0px]  sm:ml-[88%]">
                  <button className="font-work-sans text-[16px] font-normal leading-[16px] tracking-[0.03em] text-left underline-from-font no-underline-skip">
                    Order Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default AllOrders;
