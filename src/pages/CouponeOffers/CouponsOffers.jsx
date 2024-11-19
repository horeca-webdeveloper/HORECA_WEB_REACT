import React from "react";
import SidebarProfile from "../../components/SidebarProfile";
import { Wrapper } from "../../shared/Wrapper";

const CouponsOffers = () => {
  return (
    <>
      <Wrapper>
        <div className="flex">
          <SidebarProfile />
          {/* WishList Section */}
          <div className="flex flex-col justify-between w-[100%] h-[100%]">
            <div className="flex flex-col sm:flex-row p-[10px] justify-between m-[5px] w-[100%]">
              <div className="flex flex-col sm:flex-row mb-[10px] flex-wrap w-[45%] justify-between mt-[5px]">
                <p className="font-work-sans text-[#186737] text-base font-normal leading-6 text-left decoration-none">
                  All Coupons
                </p>
                <p className="font-work-sans text-[#666666] text-base font-normal leading-6 text-left decoration-none">
                  Used
                </p>
                <p className="font-work-sans text-[#666666] text-base font-normal leading-6 text-left decoration-none">
                  Unused
                </p>
                <p className="font-work-sans text-[#666666] text-base font-normal leading-6 text-left decoration-none">
                  Expired
                </p>
              </div>
              <div className="w[100%]">
                <input
                  className="border rounded-[20px] border-2 w-[320px] p-[5px]"
                  type="input"
                  placeholder="Search Coupons or Vouchers"
                />
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="rounded  border-t border-b border-l">
                <div className="flex border-[#186737]">
                  <div className="flex border-[#186737] border-t-[2px] border-b-[2px] border-l-[2px] bg-[#e6f8f8] p-4 rounded-md flex-col w-[70%]">
                    <p className="font-sans text-[#186737] text-base font-medium leading-6 text-left decoration-skip-ink-none">
                      5% Discount Coupon
                    </p>
                    <p className="font-sans text-[#666666] text-xs mt-[10px] font-normal leading-6 text-left decoration-skip-ink-none">
                      Compatible with Horeca fulfilled Products | One Use Only
                    </p>
                    <p className="font-sans text-[#151515] text-xs mt-[20px] font-medium leading-6 text-left decoration-skip-ink-none">
                      Valid until: 235d : 18h : 32m : 1s
                    </p>
                  </div>
                  <div className="flex  border-[#186737] items-center justify-center border-t-[2px] border-b-[2px] border-r-[2px] bg-[#e6f8f8] p-4 rounded-md flex-col w-[30%]">
                    <div className="bg-[white] rounded p-[2px]">
                      <p className="p-[4px] text-[#186737] font-sans text-sm font-medium leading-[16.42px] text-left decoration-skip-ink-none underline-offset-4">
                        4000 points{" "}
                      </p>
                    </div>
                    <p className="font-sans text-[#186737] text-sm font-medium leading-6 text-left decoration-skip-ink-none underline-offset-4">
                      Insufficient Points
                    </p>
                  </div>
                </div>
              </div>
              <div class="rounded border-t border-b border-l">
                <div className="flex border-[#186737]">
                  <div className="flex  border-[#E4BDC6] border-t-[2px] border-b-[2px] border-l-[2px] bg-[#faf7f8] p-4  rounded-md flex-col w-[70%]">
                    <p className="font-sans text-[#782B51] text-base font-medium leading-6 text-left decoration-skip-ink-none">
                      5% Discount Coupon
                    </p>
                    <p className="font-sans text-[#666666] text-xs mt-[10px] font-normal leading-6 text-left decoration-skip-ink-none">
                      Compatible with Horeca fulfilled Products | One Use Only
                    </p>
                    <p className="font-sans text-[#151515] text-xs mt-[20px] font-medium leading-6 text-left decoration-skip-ink-none">
                      Valid until: 235d : 18h : 32m : 1s
                    </p>
                  </div>
                  <div className="flex   border-[#E4BDC6] items-center justify-center border-t-[2px] border-b-[2px] border-r-[2px] bg-[#faf7f8] p-4 rounded-md flex-col w-[30%]">
                    <div className="bg-[white] rounded p-[2px]">
                      <p className="p-[4px] text-[#782B51] font-sans text-sm font-medium leading-[16.42px] text-left decoration-skip-ink-none underline-offset-4">
                        4000 points{" "}
                      </p>
                    </div>
                    <p className="font-sans text-[#782B51] text-sm font-medium leading-6 text-left decoration-skip-ink-none underline-offset-4">
                      Insufficient Points
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-2 mt-[10px] rounded">
              <div className="flex items-center h-[40px] border-b-2 justify-center bg-[#E2E8F0]">
                <p className="font-sans text-[#64748B]  font-light text-lg font-medium leading-6 text-left decoration-skip-ink-none underline-offset-4">
                  Points History
                </p>
              </div>
              <div className="p-[10px] ">
                <div className="flex p-[5px] justify-between">
                  <p className="font-sans text-[16px] text-[#64748B] leading-6 text-left decoration-skip-ink-none underline-offset-4">
                    Points earned (+1,000)
                  </p>
                  <p className="font-sans font-medium font-light text-[14px] leading-6 text-left decoration-skip-ink-none underline-offset-4">
                    30 Oct 2024
                  </p>
                </div>
                <p className="font-sans text-[#808080] text-[12px] p-[5px] font-light leading-6 text-left decoration-skip-ink-none underline-offset-4">
                  points for registration
                </p>
                <p className="border-2-black"></p>
              </div>
              <div className="p-[10px] ">
                <div className="flex p-[5px]  border-t justify-between">
                  <p className="font-sans mt-[15px] text-[16px] text-[#64748B] leading-6 text-left decoration-skip-ink-none underline-offset-4">
                    Points earned (+1,000)
                  </p>
                  <p className="font-sans font-medium font-light text-[14px] leading-6 text-left decoration-skip-ink-none underline-offset-4">
                    30 Oct 2024
                  </p>
                </div>
                <p className="font-sans text-[#808080] text-[12px] p-[5px] font-light leading-6 text-left decoration-skip-ink-none underline-offset-4">
                  points for registration
                </p>
                <p className="border-t-2-black"></p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default CouponsOffers;
