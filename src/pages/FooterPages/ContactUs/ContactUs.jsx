import React from "react";
import { Wrapper } from "../../../shared/Wrapper";
import { Breadcrumb } from "../../../shared/Breadcrumb";

const ContactUs = () => {
  const collectionBreadCrumb = [
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/",
      title: "About us",
    },
  ];
  return (
    <>
      <Wrapper>
        <Breadcrumb items={collectionBreadCrumb} classes={"mt-[10px]"} />
      </Wrapper>
      <div className="flex items-center mt-[10px] justify-center text-[32px] font-bold text-white h-[450px] w-full bg-gray-400">
        <img
          className="absolute h-[450px] w-full object-cover opacity-[0.5]"
          src="https://images.pexels.com/photos/7689734/pexels-photo-7689734.jpeg?auto=compress&cs=tinysrgb&w=800"
        />
        <p className="relative">Contact Us</p>
      </div>
      <Wrapper>
        <div className="flex">
          <div className="flex-1 text-[60px] p-5">
            We’re the full package. reach out and we'll see how we can help.
          </div>
          <div className="flex-1 p-10">
            <form>
              <div className="flex-col mb-[20px]">
                <p className="text-[#64748B] text-[16px]">Name*</p>
                <input placeholder="" className="border-b-2 w-[100%]" />
              </div>
              <div className="flex-col mb-[20px]">
                <p className="text-[#64748B] text-[16px]">Email*</p>
                <input placeholder="" className="border-b-2 w-[100%]" />
              </div>
              <div className="flex-col mb-[20px]">
                <p className="text-[#64748B] text-[16px]">Profession*</p>
                <input placeholder="" className="border-b-2 w-[100%]" />
              </div>
              <div className="flex-col mb-[20px]">
                <p className="text-[#64748B] text-[16px]">Company (optional)</p>
                <input placeholder="" className="border-b-2 w-[100%]" />
              </div>
              <div className="flex-col mb-[20px]">
                <p className="text-[#64748B] text-[16px]">Phone Number*</p>
                <input placeholder="" className="border-b-2 w-[100%]" />
              </div>
              <div className="flex-col mb-[20px]">
                <p className="text-[#64748B] text-[16px]">
                  How did you hear about us*
                </p>
                <input placeholder="" className="border-b-2 w-[100%]" />
              </div>
              <div className="flex-col mb-[20px]">
                <p className="text-[#64748B] text-[16px]">Message*</p>
                <input placeholder="" className="border-b-2 w-[100%]" />
              </div>
              <button className="flex items-center justify-center text-white rounded bg-[#186737] h-[40px] w-[198px] px-[40px] py-[10px]">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div>
          <h1 className="font-bold leading-[35.19px] text-[30px]">
            Our Locations
          </h1>
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-gray-200 p-4 h-[539px] rounded">Column 1</div>
            <div class="bg-gray-300 p-4 h-[539px] rounded">Column 2</div>
            <div class="bg-gray-400 p-4 h-[539px] rounded">Column 3</div>
            <div class="bg-gray-200 p-4 h-[539px] rounded">Column 1</div>
            <div class="bg-gray-300 p-4 h-[539px] rounded">Column 2</div>
            <div class="bg-gray-400 p-4 h-[539px] rounded">Column 3</div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ContactUs;
