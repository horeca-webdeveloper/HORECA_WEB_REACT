import React from "react";
import SidebarProfile from "../../components/SidebarProfile";
import { Wrapper } from "../../shared/Wrapper";

const Reviews = () => {
  return (
    <Wrapper>
      <div className="flex">
        <SidebarProfile />
        {/* Reviews Section */}
        <div className="flex flex-col p-[10px] justify-between w-[100%] h-[100%]">
          My Reviews
          <div className="border-2 w-[100%] mt-[10px]">
            <div className="flex items-center border-b-2 p-[20px]">
              <img
                className="w-[80px] ml-[10px] h-[80px] mr-[10px]"
                src={process.env.PUBLIC_URL + "/icons/arabic.png"}
              />
              <p className="font-work-sans text-[18px] font-medium leading-[24px] text-left decoration-skip-ink-none underline-from-font">
                The Product Quality was really good
              </p>
            </div>
            <div className="p-[10px]">
              <div className="flex p-[4px]">
                <img
                  className=" ml-[3px]  mr-[3px]"
                  src={process.env.PUBLIC_URL + "/icons/star.png"}
                />
                <img
                  className=" ml-[3px]  mr-[3px]"
                  src={process.env.PUBLIC_URL + "/icons/star.png"}
                />
                <img
                  className=" ml-[3px]  mr-[3px]"
                  src={process.env.PUBLIC_URL + "/icons/star.png"}
                />
                <img
                  className=" ml-[3px]  mr-[3px]"
                  src={process.env.PUBLIC_URL + "/icons/star.png"}
                />
                <img
                  className=" ml-[3px]  mr-[3px]"
                  src={process.env.PUBLIC_URL + "/icons/star.png"}
                />
              </div>
              <p className="font-work-sans text-[16px] mt-[5px] font-medium leading-[24px] text-left decoration-skip-ink-none underline-from-font p-[2px]">
                Review Title Will be placed Here
              </p>
              <p className="font-work-sans text-[16px] font-normal leading-[24px] text-left decoration-skip-ink-none underline-from-font p-[2px]">
                Super Qaulity
              </p>
              <p className="font-work-sans text-[12px] font-normal leading-[16px] text-left decoration-skip-ink-none underline-from-font p-[2px]">
                Yes, I recommend this product
              </p>
              <p className="font-work-sans text-[12px] font-medium leading-[16px] text-left decoration-skip-ink-none underline-from-font text-[#818181] m-[5px]">
                30 Oct, 2024
              </p>
              <div className="flex justify-end ">
                <button class="font-work-sans border-2 rounded-md p-[10px] text-[#808080] text-[14px] font-medium leading-[16px] text-left  decoration-skip-ink-none underline-from-font">
                  Delete Review
                </button>
              </div>
            </div>
          </div>
          <div className="border-2 w-[100%] mt-[10px]">
            <div className="flex items-center border-b-2 p-[20px]">
              <img
                className="w-[80px] ml-[10px] h-[80px] mr-[10px]"
                src={process.env.PUBLIC_URL + "/icons/arabic.png"}
              />
              <p className="font-work-sans text-[18px] font-medium leading-[24px] text-left decoration-skip-ink-none underline-from-font">
                The Product Quality was really good
              </p>
            </div>
            <div className="p-[10px]">
              <div className="flex p-[4px]">
                <img
                  className=" ml-[3px]  mr-[3px]"
                  src={process.env.PUBLIC_URL + "/icons/star.png"}
                />
                <img
                  className=" ml-[3px]  mr-[3px]"
                  src={process.env.PUBLIC_URL + "/icons/star.png"}
                />
                <img
                  className=" ml-[3px]  mr-[3px]"
                  src={process.env.PUBLIC_URL + "/icons/star.png"}
                />
                <img
                  className=" ml-[3px]  mr-[3px]"
                  src={process.env.PUBLIC_URL + "/icons/star.png"}
                />
                <img
                  className=" ml-[3px]  mr-[3px]"
                  src={process.env.PUBLIC_URL + "/icons/star.png"}
                />
              </div>
              <p className="font-work-sans text-[16px] mt-[5px] font-medium leading-[24px] text-left decoration-skip-ink-none underline-from-font p-[2px]">
                Review Title Will be placed Here
              </p>
              <p className="font-work-sans text-[16px] font-normal leading-[24px] text-left decoration-skip-ink-none underline-from-font p-[2px]">
                Super Qaulity
              </p>
              <p className="font-work-sans text-[12px] font-normal leading-[16px] text-left decoration-skip-ink-none underline-from-font p-[2px]">
                Yes, I recommend this product
              </p>
              <p className="font-work-sans text-[12px] font-medium leading-[16px] text-left decoration-skip-ink-none underline-from-font text-[#818181] m-[5px]">
                30 Oct, 2024
              </p>
              <div className="flex justify-end ">
                <button class="font-work-sans border-2 rounded-md p-[10px] text-[#808080] text-[14px] font-medium leading-[16px] text-left  decoration-skip-ink-none underline-from-font">
                  Delete Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Reviews;
