import React, { useEffect, useState } from "react";
import AllOrdersBox from "./components/AllOrdersBox";
import { Wrapper } from "../../../shared/Wrapper";
import SidebarProfile from "../../../components/SidebarProfile";
import { apiClient } from "../../../utils/apiWrapper";
import Skeleton from "react-loading-skeleton";
import { Breadcrumb } from "../../../shared/Breadcrumb";
import ImagePopup from "../../../components/ImagePopup";

const AllOrders = () => {
  const [viewedLoader, setViewedLoader] = useState(true);
  const [ordersData, setOrdersData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [imageView, setImageView] = useState("");
  const fetchAllOrders = async () => {
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

  useEffect(() => {
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
      </Wrapper>
    </>
  );
};

export default AllOrders;
