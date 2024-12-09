import React, { useEffect, useState } from "react";
import { Wrapper } from "../../../shared/Wrapper";
import SidebarProfile from "../../../components/SidebarProfile";
import { Breadcrumb } from "../../../shared/Breadcrumb";
import CouponBox from "./components/CouponBox";
import { apiClient } from "../../../utils/apiWrapper";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router";
import { ProductCard } from "../../../shared/ProductCard";

const CouponsOffers = () => {
  const [loader, setLoader] = useState(true);
  const [couponData, setCouponData] = useState([]);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const fetchAllCoupons = async () => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      navigate("/login");
    }
    try {
      const response = await apiClient.get("/customer/coupons");
      setCouponData(response?.data?.coupons);
      console.log(response);
      setLoader(false);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoader(false);
    }
  };

  const fetchProducts = async () => {
    const authToken = localStorage.getItem("authToken");
    const response = await apiClient.get(
      `${authToken ? "/products" : "/products-guest"}`
    );
    setProducts(response.data.data.data);
  };

  useEffect(() => {
    fetchAllCoupons();
    fetchProducts();
  }, []);

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

  return (
    <>
      <Wrapper>
        <Breadcrumb items={collectionBreadCrumb} classes={"mt-4 mb-2"} />
      </Wrapper>
      <Wrapper>
        <div className="flex">
          <SidebarProfile />
          {/* Coupons Section */}
          <div className="flex flex-col justify-between w-[100%] h-[100%]">
            <h1 className="text-center mt-[15px]">Coupons & Offers</h1>
            <div className="flex  p-[10px] justify-between m-[5px] w-[100%]">
              <div className="flex  mb-[10px] flex-wrap w-[100%] sm:w-[45%] justify-between mt-[5px]">
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
              <div className="hidden sm:block w[100%]">
                <input
                  className="border rounded-[20px] border-2 w-[320px] p-[5px]"
                  type="input"
                  placeholder="Search Coupons or Vouchers"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {loader ? (
                Array.from({ length: 2 }).map((_, index) => (
                  <div key={index} className="col-span-2">
                    <Skeleton count={1} height="200px" />
                  </div>
                ))
              ) : (
                <React.Fragment>
                  {couponData.length > 0 ? (
                    couponData?.map((items) => {
                      return <CouponBox data={items} />;
                    })
                  ) : (
                    <div className="flex items-center justify-center">
                      <p>No Coupons Found</p>
                    </div>
                  )}
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
        {window?.innerWidth < 640 && (
          <div>
            <div className="mb-10 mt-[20px]">
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
      </Wrapper>
    </>
  );
};

export default CouponsOffers;
