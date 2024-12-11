import React, { useEffect, useState } from "react";
import { Wrapper } from "../../../shared/Wrapper";
import SidebarProfile from "../../../components/SidebarProfile";
import { Breadcrumb } from "../../../shared/Breadcrumb";
import Popup from "./Components/Popup";
import Skeleton from "react-loading-skeleton";
import { ProductCard } from "../../../shared/ProductCard";
import { apiClient } from "../../../utils/apiWrapper";

const Addresses = () => {
  const [popupHeading, setPopupHeading] = useState("");
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
  const bigScreenCss =
    "flex grid-cols-5 sm:grid md:grid lg:grid 2xl:grid gap-5 sm:gap-5 sm:grid sm:space-x-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5";
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const authToken = localStorage.getItem("authToken");
    const response = await apiClient.get(
      `${authToken ? "/products" : "/products-guest"}`
    );
    setProducts(response.data.data.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
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
            {window?.innerWidth > 640 && (
              <p className=" font-light font-sans text-[18px] font-normal leading-[24px] text-left decoration-slice">
                Your Addresses
              </p>
            )}
            {window?.innerWidth < 640 && (
              <p className=" font-light font-sans text-[18px] font-normal leading-[24px] text-center decoration-slice">
                Addresses
              </p>
            )}
            <div className="flex flex-col sm:flex-row rounded-none sm:rounded-md border-t-2 border-b-2 sm:border-2 w-[100%] mt-[10px]">
              <div className="flex-col p-[15px] w-[100%]">
                <div className="flex sm:flex-col items-center sm:items-start">
                  <p className="font-sans p-[5px] text-lg font-medium leading-[21.11px] text-left decoration-skip-ink-none underline-offset-4">
                    Mohd Danish
                  </p>
                  <p className="font-sans p-[5px] text-[#64748B] text-base font-normal leading-[18.77px] text-left decoration-skip-ink-none underline-offset-4">
                    +91 9650726956
                  </p>
                </div>
                <p className="font-sans p-[5px] border-b py-[15px] text-[#64748B]  text-base font-normal leading-[18.77px] text-left decoration-skip-ink-none underline-offset-4">
                  5738 GREEN ASH DR, RAPID SUPPLIES HOUSTON, TX 77081, United
                  States
                </p>
                <div className="flex items-center items-center mt-[10px]">
                  <div className="flex w-[100%] items-center justify-between">
                    <div className="flex items-center">
                      <input type="radio" />
                      <p className="font-sans text-[#64748B] p-[5px] ml-[5px] text-sm font-normal leading-[17.6px] text-left decoration-skip-ink-none underline-offset-4">
                        Default
                      </p>
                    </div>
                    <div className="flex text-[14px] text-[#64748B]">
                      <p className="px-[10px] border-r">Delete</p>
                      <p className="px-[10px] border-r">Copy</p>
                      <p
                        onClick={() => {
                          setShowPopup(true);
                          setPopupHeading("Update");
                        }}
                        className="px-[10px] border-r"
                      >
                        Edit
                      </p>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="hidden sm:flex items-center justify-center flex-col p-[15px]">
                <button
                  onClick={() => {
                    setShowPopup(true);
                    setPopupHeading("Update");
                  }}
                  className="flex m-[10px] items-center justify-center rounded-md font-sans w-[180px] h-[40px] border border-[#666666] text-[16px] text-[#666666] font-medium leading-[16px] text-left underline-offset-auto decoration-slice"
                >
                  Edit
                </button>
                <button className="flex m-[10px] items-center justify-center rounded-md font-sans w-[180px] h-[40px] border border-[#666666] text-[16px] text-[#666666] font-medium leading-[16px] text-left underline-offset-auto decoration-slice">
                  Remove
                </button>
              </div>
            </div>
            <div>
              <h1
                className="mt-[20px] font-work-sans text-[16px] text-[#186737] cursor-pointer font-normal leading-[24px] text-left underline decoration-solid decoration-from-font decoration-skip-ink-none"
                onClick={() => {
                  setShowPopup(true);
                  setPopupHeading("Add");
                }}
              >
                Add New Address
              </h1>
            </div>
          </div>
        </div>
        {window?.innerWidth < 640 && (
          <div>
            <div className="mb-10 mt-[20px] p-[10px]">
              <img
                className="h-[160px] w-[100vw] object-cover rounded-md"
                src={process.env.PUBLIC_URL + "/images/RegistrationProfile.png"}
              />
              <div className="flex items-center justify-between mx-2 my-[10px] sm:my-8">
                <h2 className=" font-medium sm:font-semibold text-[16px] sm:text-2xl text-black-100 ">
                  Products you may also like
                </h2>
              </div>
              <div
                style={
                  window.innerWidth < 640
                    ? {
                        overflow: "auto",
                        scrollbarWidth: "none", // For Firefox
                        msOverflowStyle: "none", // For Internet Explorer and Edge
                      }
                    : {}
                }
                className={bigScreenCss}
              >
                {false ? (
                  Array.from({ length: 10 }).map((_, index) => (
                    <Skeleton
                      key={index}
                      className="col-span-1 mt-1 min-h-[400px]"
                    />
                  ))
                ) : (
                  <React.Fragment>
                    {products && products.length > 0 ? (
                      products.map((product, index) =>
                        index < 10 ? (
                          <ProductCard
                            key={index}
                            classes="col-span-1 mt-1"
                            product={product}
                          />
                        ) : null
                      )
                    ) : (
                      <p className="col-span-5 font-semibold text-center text-base">
                        No Product Found
                      </p>
                    )}
                  </React.Fragment>
                )}
              </div>
            </div>
            <div className="mb-10">
              <div className="flex items-center justify-between mx-2 my-[10px] sm:my-8">
                <h2 className=" font-medium sm:font-semibold text-[16px] sm:text-2xl text-black-100 ">
                  Inspired by your browsing history
                </h2>
              </div>
              <div
                style={
                  window.innerWidth < 640
                    ? {
                        overflow: "auto",
                        scrollbarWidth: "none", // For Firefox
                        msOverflowStyle: "none", // For Internet Explorer and Edge
                      }
                    : {}
                }
                className={bigScreenCss}
              >
                {false ? (
                  Array.from({ length: 10 }).map((_, index) => (
                    <Skeleton
                      key={index}
                      className="col-span-1 mt-1 min-h-[400px]"
                    />
                  ))
                ) : (
                  <React.Fragment>
                    {products && products.length > 0 ? (
                      products.map((product, index) =>
                        index < 10 ? (
                          <ProductCard
                            key={index}
                            classes="col-span-1 mt-1"
                            product={product}
                          />
                        ) : null
                      )
                    ) : (
                      <p className="col-span-5 font-semibold text-center text-base">
                        No Product Found
                      </p>
                    )}
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
        )}
        {showPopup && (
          <Popup setShowPopup={setShowPopup} popupHeading={popupHeading} />
        )}
      </Wrapper>
    </>
  );
};

export default Addresses;
