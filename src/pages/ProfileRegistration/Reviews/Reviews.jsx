import React, { useEffect, useState } from "react";
import { Wrapper } from "../../../shared/Wrapper";
import SidebarProfile from "../../../components/SidebarProfile";
import ReviewCard from "./Components/ReviewCard";
import { apiClient } from "../../../utils/apiWrapper";
import { Breadcrumb } from "../../../shared/Breadcrumb";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router";
import { ProductCard } from "../../../shared/ProductCard";
import CommonProducts from "../CommonProducts/CommonProducts";

const Reviews = () => {
  const [loader, setLoader] = useState(true);
  const [reviewData, setReviewData] = useState([]);
  const navigate = useNavigate();
  const fetchAllReviews = async () => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      navigate("/login");
    }
    try {
      const response = await apiClient.get("/customer-reviews");
      setReviewData(response?.data);
      setLoader(false);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchAllReviews();
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
      <h1 className="block sm:hidden text-center border-b-2 p-2">My Reviews</h1>
      <Wrapper>
        <div className="flex">
          <SidebarProfile />
          {/* Reviews Section */}
          <div className="flex flex-col p-[10px] justify-between w-[100%] h-[100%]">
            <h1 className="hidden sm:block">My Reviews</h1>
            <div>
              {/*  */}
              {loader ? (
                Array.from({ length: 2 }).map((_, index) => (
                  <div key={index} className="col-span-1">
                    <Skeleton count={1} height="250px" />
                  </div>
                ))
              ) : (
                <React.Fragment>
                  {reviewData.length > 0 ? (
                    reviewData?.map((items) => {
                      return <ReviewCard reviewData={items} />;
                    })
                  ) : (
                    <div className="flex items-center h-[60vh] text-[26px] justify-center">
                      <p>No Reviews Found</p>
                    </div>
                  )}
                </React.Fragment>
              )}
              {/*  */}
            </div>
          </div>
        </div>
        <CommonProducts />
      </Wrapper>
    </>
  );
};

export default Reviews;
