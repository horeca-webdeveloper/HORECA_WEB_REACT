import React, { useEffect, useState } from "react";
import { Wrapper } from "../../../shared/Wrapper";
import SidebarProfile from "../../../components/SidebarProfile";
import { apiClient } from "../../../utils/apiWrapper";
import { ProductCard } from "../../../shared/ProductCard";
import Skeleton from "react-loading-skeleton";
import { Breadcrumb } from "../../../shared/Breadcrumb";

const BrowsingHistory = () => {
  const [viewedProducts, setViewedProducts] = useState([]);
  const [viewedLoader, setViewedLoader] = useState(true);
  const fetchAllOrders = async () => {
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
          {/* Browsing History Section */}
          <div className="flex flex-col p-[10px] justify-between w-[100%] h-[100%]">
            <div className="flex items-center p-[10px] h-[50px] w-[100%] bg-[#f9fafc] border rounded-sm mb-[10px]">
              Oct 19 2024, 5:45 P.M.
            </div>
            <div className="grid grid-cols-4 gap-5">
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
      </Wrapper>
    </>
  );
};

export default BrowsingHistory;
