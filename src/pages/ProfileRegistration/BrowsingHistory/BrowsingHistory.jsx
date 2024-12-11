import React, { useEffect, useState } from "react";
import { Wrapper } from "../../../shared/Wrapper";
import SidebarProfile from "../../../components/SidebarProfile";
import { apiClient } from "../../../utils/apiWrapper";
import { ProductCard } from "../../../shared/ProductCard";
import Skeleton from "react-loading-skeleton";
import { Breadcrumb } from "../../../shared/Breadcrumb";
import { useNavigate } from "react-router";

const BrowsingHistory = () => {
  const [viewedProducts, setViewedProducts] = useState([]);
  const [viewedLoader, setViewedLoader] = useState(true);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const fetchAllOrders = async () => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      navigate("/login");
    }
    try {
      const response = await apiClient.get("/recently-viewed");
      setViewedProducts(response?.data);
      setViewedLoader(false);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setViewedLoader(false);
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
    fetchProducts();
    fetchAllOrders();
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
        <h1 className="block sm:hidden text-center font-medium text-[16px] leading-[24px]">
          Browsing History
        </h1>
        <div className="flex">
          <SidebarProfile />
          {/* Browsing History Section */}
          <div className="flex flex-col p-[10px] justify-between w-[100%] h-[100%]">
            <div className="flex items-center p-[10px] h-[50px] w-[100%] bg-[#f9fafc] border rounded-sm mb-[10px]">
              Oct 19 2024, 5:45 P.M.
            </div>
            <div
              style={
                window.innerWidth < 640
                  ? {
                      overflow: "auto",
                      scrollbarWidth: "none", // For Firefox
                      msOverflowStyle: "none", // For Internet Explorer and Edge
                    }
                  : { display: "none" }
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
            <div className="hidden sm:grid grid-cols-4 gap-5">
              {viewedLoader ? (
                Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="col-span-1">
                    <Skeleton count={1} height="500px" />
                  </div>
                ))
              ) : (
                <React.Fragment>
                  {Array.isArray(viewedProducts) ? (
                    viewedProducts?.map((item, index) => {
                      console.log(".....", item);
                      return (
                        <ProductCard
                          key={index}
                          classes="col-span-1 mt-1"
                          product={item.product}
                        />
                      );
                    })
                  ) : (
                    <div className="flex items-center justify-center">
                      <p className="mt-2 font-semibold text-center text-xl col-span-4">
                        No Browsing History
                      </p>
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
                src="https://images.pexels.com/photos/28292874/pexels-photo-28292874/free-photo-of-cozy-bedroom-scene-with-book-and-tea.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
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

export default BrowsingHistory;
