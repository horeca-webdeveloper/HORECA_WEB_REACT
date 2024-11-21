import React, { useEffect, useState } from "react";
import { Wrapper } from "../../../shared/Wrapper";
import SidebarProfile from "../../../components/SidebarProfile";
import WishlistBox from "./Components/WishlistBox";
import { apiClient } from "../../../utils/apiWrapper";
import Skeleton from "react-loading-skeleton";
import { Breadcrumb } from "../../../shared/Breadcrumb";

const Wishlist = () => {
  const [wishListData, setWishListData] = useState([]);
  const [loader, setLoader] = useState(true);
  const fetchAllReviews = async () => {
    try {
      const response = await apiClient.get("/wishlist");
      setWishListData(response?.data?.wishlist);
      setLoader(false);
      console.log(response?.data?.wishlist);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      return;
    }
  };

  const handlerRemoveWishlist = async (product) => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      try {
        setLoader(true);
        const response = await apiClient.delete(`/wishlist/remove`, {
          params: { product_id: product.id },
        });
        console.log(response);
        setLoader(false);
        fetchAllReviews();
      } catch (error) {
        console.error("Error:", error);
      } finally {
        return;
      }
    }
  };

  const handleAddToCart = async (product) => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      try {
        setLoader(true);
        const response = await apiClient.post(`/cart`, {
          product_id: product.id,
          quantity: 1,
        });
        setLoader(false);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoader(false);
      }
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
      <Wrapper>
        <div className="flex">
          <SidebarProfile />
          {/* WishList Section */}
          <div className="flex flex-col p-[10px] justify-between w-[100%] h-[100%]">
            <p className=" font-light font-sans text-[18px] font-normal leading-[24px] text-left decoration-slice">
              My Wishlist
            </p>
            <div>
              {loader ? (
                Array.from({ length: 2 }).map((_, index) => (
                  <div key={index} className="col-span-1">
                    <Skeleton count={1} height="250px" />
                  </div>
                ))
              ) : (
                <React.Fragment>
                  {wishListData?.map((item) => {
                    return (
                      <WishlistBox
                        handlerRemoveWishlist={handlerRemoveWishlist}
                        data={item}
                        handleAddToCart={handleAddToCart}
                      />
                    );
                  })}
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Wishlist;
