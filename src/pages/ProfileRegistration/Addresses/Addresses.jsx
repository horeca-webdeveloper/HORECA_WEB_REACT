import React, { useState } from "react";
import { Wrapper } from "../../../shared/Wrapper";
import SidebarProfile from "../../../components/SidebarProfile";
import { Breadcrumb } from "../../../shared/Breadcrumb";
import Popup from "./Components/Popup";

const Addresses = () => {
  const [showPopup, setShowPopup] = useState(false);
  const collectionBreadCrumb = [
    {
      url: "/",
      title: "Your Account",
    },
    {
      url: "/",
      title: "Profile",
    },
  ];
  return (
    <>
      <Wrapper>
        <Breadcrumb items={collectionBreadCrumb} classes={"mt-4 mb-2"} />
      </Wrapper>
      <Wrapper>
        <div className="flex">
          <SidebarProfile />
          {/* WishList Section */}
          <div className="flex flex-col p-[10px] justify-between w-[100%] h-[100%]">
            <p className=" font-light font-sans text-[18px] font-normal leading-[24px] text-left decoration-slice">
              Your Addresses
            </p>
            <div className="flex flex-col sm:flex-row rounded-md border-2 w-[100%] mt-[10px]">
              <div className="flex-col p-[15px] w-[80%]">
                <p className="font-sans p-[5px] text-lg font-medium leading-[21.11px] text-left decoration-skip-ink-none underline-offset-4">
                  Mohd Danish
                </p>
                <p className="font-sans p-[5px] text-[#64748B] text-base font-normal leading-[18.77px] text-left decoration-skip-ink-none underline-offset-4">
                  +91 9650726956
                </p>
                <p className="font-sans p-[5px] text-[#64748B] text-base font-normal leading-[18.77px] text-left decoration-skip-ink-none underline-offset-4">
                  5738 GREEN ASH DR, RAPID SUPPLIES HOUSTON, TX 77081, United
                  States
                </p>
                <div className="flex">
                  <input type="radio" />
                  <p className="font-sans text-[#64748B] p-[5px] ml-[5px] text-sm font-normal leading-[17.6px] text-left decoration-skip-ink-none underline-offset-4">
                    Default
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center flex-col p-[15px]">
                <button
                  onClick={() => setShowPopup(true)}
                  className="flex m-[10px] items-center justify-center rounded-md font-sans w-[180px] h-[40px] border border-[#666666] text-[16px] text-[#666666] font-medium leading-[16px] text-left underline-offset-auto decoration-slice"
                >
                  Edit
                </button>
                <button className="flex m-[10px] items-center justify-center rounded-md font-sans w-[180px] h-[40px] border border-[#666666] text-[16px] text-[#666666] font-medium leading-[16px] text-left underline-offset-auto decoration-slice">
                  Remove
                </button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row rounded-md border-2 w-[100%] mt-[15px]">
              <div className="flex-col p-[15px] w-[80%]">
                <p className="font-sans p-[5px] text-lg font-medium leading-[21.11px] text-left decoration-skip-ink-none underline-offset-4">
                  Mohd Danish
                </p>
                <p className="font-sans p-[5px] text-[#64748B] text-base font-normal leading-[18.77px] text-left decoration-skip-ink-none underline-offset-4">
                  +91 9650726956
                </p>
                <p className="font-sans p-[5px] text-[#64748B] text-base font-normal leading-[18.77px] text-left decoration-skip-ink-none underline-offset-4">
                  5738 GREEN ASH DR, RAPID SUPPLIES HOUSTON, TX 77081, United
                  States
                </p>
                <div className="flex">
                  <input type="radio" />
                  <p className="font-sans text-[#64748B] p-[5px] ml-[5px] text-sm font-normal leading-[17.6px] text-left decoration-skip-ink-none underline-offset-4">
                    Default
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center flex-col p-[15px]">
                <button
                  onClick={() => setShowPopup(true)}
                  className="flex m-[10px] items-center justify-center rounded-md font-sans w-[180px] h-[40px] border border-[#666666] text-[16px] text-[#666666] font-medium leading-[16px] text-left underline-offset-auto decoration-slice"
                >
                  Edit
                </button>
                <button className="flex m-[10px] items-center justify-center rounded-md font-sans w-[180px] h-[40px] border border-[#666666] text-[16px] text-[#666666] font-medium leading-[16px] text-left underline-offset-auto decoration-slice">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
        {showPopup && <Popup setShowPopup={setShowPopup} />}
      </Wrapper>
    </>
  );
};

export default Addresses;
