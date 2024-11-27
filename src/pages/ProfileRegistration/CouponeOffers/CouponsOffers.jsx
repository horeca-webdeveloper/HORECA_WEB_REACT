import React, { useEffect, useState } from "react";
import { Wrapper } from "../../../shared/Wrapper";
import SidebarProfile from "../../../components/SidebarProfile";
import { Breadcrumb } from "../../../shared/Breadcrumb";
import CouponBox from "./components/CouponBox";
import { apiClient } from "../../../utils/apiWrapper";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router";

const CouponsOffers = () => {
  const [loader, setLoader] = useState(true);
  const [couponData, setCouponData] = useState([]);
  const navigate = useNavigate();
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

  useEffect(() => {
    fetchAllCoupons();
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
          {/* Coupons Section */}
          <div className="flex flex-col justify-between w-[100%] h-[100%]">
            <div className="flex flex-col sm:flex-row p-[10px] justify-between m-[5px] w-[100%]">
              <div className="flex flex-col sm:flex-row mb-[10px] flex-wrap w-[45%] justify-between mt-[5px]">
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
              <div className="w[100%]">
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
                    <Skeleton count={1} height="250px" />
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
      </Wrapper>
    </>
  );
};

export default CouponsOffers;
