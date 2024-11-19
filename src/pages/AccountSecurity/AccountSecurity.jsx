import React from "react";
import { Wrapper } from "../../shared/Wrapper";
import SidebarProfile from "../../components/SidebarProfile";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const AccountSecurity = () => {
  return (
    <Wrapper>
      <div className="flex">
        <SidebarProfile />
        {/* Account Security Section */}
        <div className="flex flex-col p-[10px] justify-between w-[100%] h-[100%]">
          <p className=" font-light font-sans text-[18px] font-normal leading-[24px] text-left decoration-slice">
            Account & Security
          </p>
          <div className="flex flex-col">
            <div className="flex p-[10px] mt-[20px] justify-between border-b-2">
              <div className="flex-col">
                <p className="font-work-sans text-[18px] font-medium leading-[21.11px] text-left underline-from-font no-underline-skip">
                  Mobile phone number
                </p>
                <p className="font-work-sans text-[14px] mt-[10px] text-[#808080] font-normal leading-[21.11px] text-left underline-from-font no-underline-skip">
                  0300 1234567
                </p>
              </div>
              <div className="flex items-center justify-center flex-col p-[15px]">
                <button className="flex mt-[5px] items-center justify-center rounded-md font-sans w-[100px] sm:w-[180px] h-[40px] border border-[#666666] text-[16px] text-[#666666] font-medium leading-[16px] text-left underline-offset-auto decoration-slice">
                  Edit
                </button>
              </div>
            </div>
            <div className="flex p-[10px] mt-[20px] justify-between border-b-2">
              <div className="flex-col">
                <p className="font-work-sans text-[18px] font-medium leading-[21.11px] text-left underline-from-font no-underline-skip">
                  Email
                </p>
                <p className="font-work-sans text-[14px] mt-[10px] text-[#808080] font-normal leading-[21.11px] text-left underline-from-font no-underline-skip">
                  0300 1234567
                </p>
              </div>
              <div className="flex items-center justify-center flex-col p-[15px]">
                <button className="flex mt-[5px] items-center justify-center rounded-md font-sans w-[100px] sm:w-[180px] h-[40px] border border-[#666666] text-[16px] text-[#666666] font-medium leading-[16px] text-left underline-offset-auto decoration-slice">
                  Edit
                </button>
              </div>
            </div>
            <div className="flex p-[10px] mt-[20px] justify-between border-b-2">
              <div className="flex-col">
                <p className="font-work-sans text-[18px] font-medium leading-[21.11px] text-left underline-from-font no-underline-skip">
                  Password
                </p>
                <p className="font-work-sans text-[14px] mt-[10px] text-[#808080] font-normal leading-[21.11px] text-left underline-from-font no-underline-skip">
                  0300 1234567
                </p>
              </div>
              <div className="flex items-center justify-center flex-col p-[15px]">
                <button className="flex mt-[5px] items-center justify-center rounded-md font-sans w-[100px] sm:w-[180px] h-[40px] border border-[#666666] text-[16px] text-[#666666] font-medium leading-[16px] text-left underline-offset-auto decoration-slice">
                  Edit
                </button>
              </div>
            </div>
            <div className="flex p-[10px] mt-[20px] justify-between border-b-2">
              <div className="flex-col">
                <p className="font-work-sans text-[18px] font-medium leading-[21.11px] text-left underline-from-font no-underline-skip">
                  Two-factor authentication: Off
                </p>
                <p className="font-work-sans text-[14px] mt-[10px] text-[#808080] font-normal leading-[21.11px] text-left underline-from-font no-underline-skip">
                  0300 1234567
                </p>
              </div>
              <div className="flex items-center justify-center flex-col p-[15px]">
                <button className="flex mt-[5px] items-center justify-center rounded-md font-sans w-[100px] sm:w-[180px] h-[40px] border border-[#666666] text-[16px] text-[#666666] font-medium leading-[16px] text-left underline-offset-auto decoration-slice">
                  Edit
                </button>
              </div>
            </div>
          </div>
          {/* Third party Integration Starts Here */}
          {/* <div className="flex flex-col mt-[20px]">
            <p className="p-[10px] mt-[30px] font-work-sans text-[18px] font-medium leading-[21.11px] text-left underline-from-font no-underline-skip">
              Third Party Integration
            </p>
            <div className="flex items-center p-[10px] justify-between border-b-2">
              <p className="font-work-sans text-[18px] font-medium leading-[21.11px] text-left underline-from-font no-underline-skip">
                Google
              </p>
              <div className="flex items-center justify-center flex-col p-[15px]">
                <button className="flex mt-[5px] items-center justify-center rounded-md font-sans w-[100px] sm:w-[180px] h-[40px] border border-[#666666] text-[16px] text-[#666666] font-medium leading-[16px] text-left underline-offset-auto decoration-slice">
                  Unlink
                </button>
              </div>
            </div>
            <div className="flex items-center p-[10px] justify-between border-b-2">
              <p className="font-work-sans text-[18px] font-medium leading-[21.11px] text-left underline-from-font no-underline-skip">
                Facebook
              </p>
              <div className="flex items-center justify-center flex-col p-[15px]">
                <button className="flex mt-[5px] items-center justify-center rounded-md font-sans w-[100px] sm:w-[180px] h-[40px] border border-[#666666] text-[16px] text-[#666666] font-medium leading-[16px] text-left underline-offset-auto decoration-slice">
                  Unlink
                </button>
              </div>
            </div>
            <div className="flex items-center p-[10px] justify-between border-b-2">
              <p className="font-work-sans text-[18px] font-medium leading-[21.11px] text-left underline-from-font no-underline-skip">
                Apple
              </p>
              <div className="flex items-center justify-center flex-col p-[15px]">
                <button className="flex mt-[5px] items-center justify-center rounded-md font-sans w-[100px] sm:w-[180px] h-[40px] border border-[#666666] text-[16px] text-[#666666] font-medium leading-[16px] text-left underline-offset-auto decoration-slice">
                  Unlink
                </button>
              </div>
            </div>
            <div className="flex items-center p-[10px] justify-between border-b-2">
              <p className="font-work-sans text-[18px] font-medium leading-[21.11px] text-left underline-from-font no-underline-skip">
                (X) Twitter
              </p>
              <div className="flex items-center justify-center flex-col p-[15px]">
                <button className="flex mt-[5px] items-center justify-center rounded-md font-sans w-[100px] sm:w-[180px] h-[40px] border border-[#666666] text-[16px] text-[#666666] font-medium leading-[16px] text-left underline-offset-auto decoration-slice">
                  Unlink
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </Wrapper>
  );
};

export default AccountSecurity;
