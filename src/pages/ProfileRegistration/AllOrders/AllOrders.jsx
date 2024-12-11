import React, { useEffect, useState } from "react";
import AllOrdersBox from "./components/AllOrdersBox";
import { Wrapper } from "../../../shared/Wrapper";
import SidebarProfile from "../../../components/SidebarProfile";
import { apiClient } from "../../../utils/apiWrapper";
import Skeleton from "react-loading-skeleton";
import { Breadcrumb } from "../../../shared/Breadcrumb";
import ImagePopup from "../../../components/ImagePopup";
import { useNavigate } from "react-router";
import { ProductCard } from "../../../shared/ProductCard";

const AllOrders = () => {
  const [viewedLoader, setViewedLoader] = useState(true);
  const [ordersData, setOrdersData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [imageView, setImageView] = useState("");
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const fetchAllOrders = async () => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      navigate("/login");
    }
    try {
      const response = await apiClient.get("/orders");
      setOrdersData(response?.data);
      console.log(response);
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
        <div className="flex">
          <SidebarProfile />
          <div className="flex flex-col  w-[100%]">
            {/* Sub-Navbar */}
            <h1 className="block sm:hidden text-center mt-[15px]">
              Your Orders
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 w-full">


<div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-[5px]">
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


<div className="w-full  mx-auto">
  <input
    className="border rounded-[20px] border-2 w-full p-[5px]"
    type="text"
    placeholder="Item Name / Order ID / Tracking No."
  />
</div>

</div>



            {viewedLoader ? (
              Array.from({ length: 10 }).map((_, index) => (
                <Skeleton
                  key={index}
                  className="col-span-1 mt-1 min-h-[180px]"
                />
              ))
            ) : (
              <React.Fragment>
                {ordersData && ordersData.length > 0 ? (
                  ordersData?.map((item, index) => {
                    return (
                      <AllOrdersBox
                        data={item}
                        id={index}
                        setImageView={setImageView}
                        setShowPopup={setShowPopup}
                      />
                    );
                  })
                ) : (
                  <div className="flex items-center justify-center">
                    <p className="col-span-5 font-semibold text-center text-base">
                      No Product Found
                    </p>
                  </div>
                )}
              </React.Fragment>
            )}
          </div>
          {showPopup && (
            <ImagePopup setShowPopup={setShowPopup} imageView={imageView} />
          )}
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

export default AllOrders;
