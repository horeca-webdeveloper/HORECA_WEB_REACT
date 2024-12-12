import React, { useEffect, useState } from "react";
import { Wrapper } from "../../../shared/Wrapper";
import SidebarProfile from "../../../components/SidebarProfile";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { apiClient } from "../../../utils/apiWrapper";
import { toast } from "react-toastify";
import { Breadcrumb } from "../../../shared/Breadcrumb";
import { useNavigate } from "react-router";
import { ProductCard } from "../../../shared/ProductCard";
import Skeleton from "react-loading-skeleton";

const AccountSecurity = () => {
  const [editName, setEditName] = useState(true);
  const [editPhone, setEditPhone] = useState(true);
  const navigate = useNavigate();
  const userProfileInfo = JSON.parse(localStorage.getItem("userProfile"));
  const [editAccount, setEditAccount] = useState({
    name: "",
    phone: "",
  });

  const handleAccountSecurity = async () => {
    try {
      const response = await apiClient.put(`/profile`, editAccount);
      setEditName(true);
      setEditPhone(true);
      console.log(response);
      localStorage.setItem("userProfile", JSON.stringify(response.data.user));
      toast("Account Updated Successfully!");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      return;
    }
  };

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
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      navigate("/login");
    }
    console.log(userProfileInfo);
    setEditAccount({
      ...editAccount,
      name: userProfileInfo?.name,
      phone: userProfileInfo?.phone,
    });
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
  return (
    <>
      <Wrapper>
        <Breadcrumb items={collectionBreadCrumb} classes={"mt-4 mb-2"} />
      </Wrapper>
      <Wrapper>
        <div className="flex">
          <SidebarProfile />
          {/* Account Security Section */}
          <div className="flex flex-col p-[10px] justify-between w-[100%] h-[100%]">
            <p className=" font-light font-sans text-[18px] font-normal leading-[24px] text-left decoration-slice">
              Account & Security
            </p>
            <div className="flex flex-col">
              <div className="flex p-[10px] mt-[20px] justify-between border-b-2">
                <div className="flex-col">
                  <p className="font-work-sans text-[18px] font-medium leading-[21.11px] text-left underline-from-font no-underline-skip">
                    Name
                  </p>
                  {editName ? (
                    <p className="font-work-sans text-[14px] mt-[10px] text-[#808080] font-normal leading-[21.11px] text-left underline-from-font no-underline-skip">
                      {editAccount?.name}
                    </p>
                  ) : (
                    <input
                      className="border-[2px] w-[280px] p-[5px] mt-[10px] rounded"
                      type="string"
                      value={editAccount.name}
                      onChange={(e) =>
                        setEditAccount({
                          ...editAccount,
                          name: e.target.value,
                        })
                      }
                      placeholder="Enter Your Name Here"
                    />
                  )}
                </div>
                <div className="flex items-center justify-center flex-col p-[15px]">
                  {editName ? (
                    <button
                      onClick={() => setEditName(false)}
                      className="flex mt-[5px] items-center justify-center rounded-md font-sans w-[100px] sm:w-[180px] h-[40px] border border-[#666666] text-[16px] text-[#666666] font-medium leading-[16px] text-left underline-offset-auto decoration-slice"
                    >
                      Edit
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAccountSecurity()}
                      onCli
                      className="flex mt-[5px] items-center justify-center rounded-md font-sans w-[100px] sm:w-[180px] h-[40px] border border-[#666666] text-[16px] text-[#666666] font-medium leading-[16px] text-left underline-offset-auto decoration-slice"
                    >
                      Save
                    </button>
                  )}
                </div>
              </div>
              <div className="flex p-[10px] mt-[20px] justify-between border-b-2">
                <div className="flex-col">
                  <p className="font-work-sans text-[18px] font-medium leading-[21.11px] text-left underline-from-font no-underline-skip">
                    Mobile phone number
                  </p>
                  {editPhone ? (
                    <p className="font-work-sans text-[14px] mt-[10px] text-[#808080] font-normal leading-[21.11px] text-left underline-from-font no-underline-skip">
                      {editAccount?.phone}
                    </p>
                  ) : (
                    <input
                      className="border-[2px] w-[280px] p-[5px] mt-[10px] rounded"
                      type="string"
                      value={editAccount.phone}
                      onChange={(e) =>
                        setEditAccount({
                          ...editAccount,
                          phone: e.target.value,
                        })
                      }
                      placeholder="Enter Your Phone No."
                    />
                  )}
                </div>
                <div className="flex items-center justify-center flex-col p-[15px]">
                  {editPhone ? (
                    <button
                      onClick={() => setEditPhone(false)}
                      className="flex mt-[5px] items-center justify-center rounded-md font-sans w-[100px] sm:w-[180px] h-[40px] border border-[#666666] text-[16px] text-[#666666] font-medium leading-[16px] text-left underline-offset-auto decoration-slice"
                    >
                      Edit
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAccountSecurity()}
                      className="flex mt-[5px] items-center justify-center rounded-md font-sans w-[100px] sm:w-[180px] h-[40px] border border-[#666666] text-[16px] text-[#666666] font-medium leading-[16px] text-left underline-offset-auto decoration-slice"
                    >
                      Save
                    </button>
                  )}
                </div>
              </div>
              <div className="flex p-[10px] mt-[20px] justify-between border-b-2">
                <div className="flex-col">
                  <p className="font-work-sans text-[18px] font-medium leading-[21.11px] text-left underline-from-font no-underline-skip">
                    Email
                  </p>
                  <p className="font-work-sans text-[14px] mt-[10px] text-[#808080] font-normal leading-[21.11px] text-left underline-from-font no-underline-skip">
                    Example@gmail.com
                  </p>
                </div>
                <div className="flex items-center justify-center flex-col p-[15px]">
                  <button className="flex mt-[5px] items-center justify-center rounded-md font-sans w-[100px] sm:w-[180px] h-[40px] border border-[#666666] text-[16px] text-[#666666] font-medium leading-[16px] text-left underline-offset-auto decoration-slice">
                    Edit
                  </button>
                </div>
              </div>
              <div className="flex p-[10px] mt-[20px] justify-between border-b-2">
                <div className="flex-col">
                  <p className="font-work-sans text-[18px] font-medium leading-[21.11px] text-left underline-from-font no-underline-skip">
                    Password
                  </p>
                  <p className="font-work-sans text-[14px] mt-[10px] text-[#808080] font-normal leading-[21.11px] text-left underline-from-font no-underline-skip">
                    ********
                  </p>
                </div>
                <div className="flex items-center justify-center flex-col p-[15px]">
                  <button className="flex mt-[5px] items-center justify-center rounded-md font-sans w-[100px] sm:w-[180px] h-[40px] border border-[#666666] text-[16px] text-[#666666] font-medium leading-[16px] text-left underline-offset-auto decoration-slice">
                    Edit
                  </button>
                </div>
              </div>
              <div className="flex p-[10px] mt-[20px] justify-between border-b-2">
                <div className="flex-col">
                  <p className="font-work-sans text-[18px] font-medium leading-[21.11px] text-left underline-from-font no-underline-skip">
                    Two-factor authentication: Off
                  </p>
                  <p className="font-work-sans text-[14px] mt-[10px] text-[#808080] font-normal leading-[21.11px] text-left underline-from-font no-underline-skip">
                    0300 1234567
                  </p>
                </div>
                <div className="flex items-center justify-center flex-col p-[15px]">
                  <button className="flex mt-[5px] items-center justify-center rounded-md font-sans w-[100px] sm:w-[180px] h-[40px] border border-[#666666] text-[16px] text-[#666666] font-medium leading-[16px] text-left underline-offset-auto decoration-slice">
                    Edit
                  </button>
                </div>
              </div>
            </div>
            {/* Third party Integration Starts Here */}
            {/* <div className="flex flex-col mt-[20px]">
            <p className="p-[10px] mt-[30px] font-work-sans text-[18px] font-medium leading-[21.11px] text-left underline-from-font no-underline-skip">
              Third Party Integration
            </p>
            <div className="flex items-center p-[10px] justify-between border-b-2">
              <p className="font-work-sans text-[18px] font-medium leading-[21.11px] text-left underline-from-font no-underline-skip">
                Google
              </p>
              <div className="flex items-center justify-center flex-col p-[15px]">
                <button className="flex mt-[5px] items-center justify-center rounded-md font-sans w-[100px] sm:w-[180px] h-[40px] border border-[#666666] text-[16px] text-[#666666] font-medium leading-[16px] text-left underline-offset-auto decoration-slice">
                  Unlink
                </button>
              </div>
            </div>
            <div className="flex items-center p-[10px] justify-between border-b-2">
              <p className="font-work-sans text-[18px] font-medium leading-[21.11px] text-left underline-from-font no-underline-skip">
                Facebook
              </p>
              <div className="flex items-center justify-center flex-col p-[15px]">
                <button className="flex mt-[5px] items-center justify-center rounded-md font-sans w-[100px] sm:w-[180px] h-[40px] border border-[#666666] text-[16px] text-[#666666] font-medium leading-[16px] text-left underline-offset-auto decoration-slice">
                  Unlink
                </button>
              </div>
            </div>
            <div className="flex items-center p-[10px] justify-between border-b-2">
              <p className="font-work-sans text-[18px] font-medium leading-[21.11px] text-left underline-from-font no-underline-skip">
                Apple
              </p>
              <div className="flex items-center justify-center flex-col p-[15px]">
                <button className="flex mt-[5px] items-center justify-center rounded-md font-sans w-[100px] sm:w-[180px] h-[40px] border border-[#666666] text-[16px] text-[#666666] font-medium leading-[16px] text-left underline-offset-auto decoration-slice">
                  Unlink
                </button>
              </div>
            </div>
            <div className="flex items-center p-[10px] justify-between border-b-2">
              <p className="font-work-sans text-[18px] font-medium leading-[21.11px] text-left underline-from-font no-underline-skip">
                (X) Twitter
              </p>
              <div className="flex items-center justify-center flex-col p-[15px]">
                <button className="flex mt-[5px] items-center justify-center rounded-md font-sans w-[100px] sm:w-[180px] h-[40px] border border-[#666666] text-[16px] text-[#666666] font-medium leading-[16px] text-left underline-offset-auto decoration-slice">
                  Unlink
                </button>
              </div>
            </div>
          </div> */}
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
      </Wrapper>
    </>
  );
};

export default AccountSecurity;
