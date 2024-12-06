import React, { useEffect, useState } from "react";
import {
  megaDeals,
  collectionCategories,
  BrandPicks,
} from "../data/Collections";

import { ExploreBrandImages } from "../data/Collections";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Wrapper } from "../shared/Wrapper";
import { Breadcrumb } from "../shared/Breadcrumb";
import { CiSearch } from "react-icons/ci";
import MultiRangeSlider from "multi-range-slider-react";
import { Rating } from "../shared/Rating";
import Slider from "react-slick";
import { ProductCard } from "../shared/ProductCard";
import { fiveSlider } from "../utils/slicksettings";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { apiClient } from "../utils/apiWrapper";
import { useParams } from "react-router-dom";

export const CollectionPage = () => {
  const [selectedCat, setSelectedCat] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [filterCategories, setFilterCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const location = useLocation();

  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  const fetchCategories = async () => {
    try {
      const response = await apiClient.get("/categories");
      setCategories(response.data);
      const matchedCategory = response.data.find((cat) => cat.slug === id);

      setSelectedCat(matchedCategory);
      let filteredObject = [];
      !!matchedCategory &&
        matchedCategory.children.forEach((cat) => {
          cat.children.forEach((cat2, index) => {
            console.log("category2", cat2);
            if (index < 2) {
              let tempObj = {
                name: cat2.name,
                image: cat2.image,
                count: cat2.productCount,
              };
              filteredObject.push(tempObj);
            }
          });
        });
      setFilterCategories(filteredObject);
      setCategoryName(matchedCategory && matchedCategory.name);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      // setLoader(false);
    }
  };

  const fetchProducts = async () => {
    const authToken = localStorage.getItem("authToken");
    const response = await apiClient.get(
      `${authToken ? "/products" : "/products-guest"}`
    );
    setProducts(response.data.data.data);
    console.log("--->>>>", response);
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, [location]);

  const collectionBreadCrumb = [
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/collections/kitchen-equipment",
      title: "Categories",
    },
    {
      title: categoryName ? categoryName : "",
    },
  ];

  const bigScreenCss =
    "flex grid-cols-5 sm:grid md:grid lg:grid 2xl:grid gap-5 sm:gap-5 sm:grid sm:space-x-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5";

  console.log("filtercateogries", filterCategories);
  return (
    <div>
      <Wrapper>
        <Breadcrumb items={collectionBreadCrumb} classes={"mt-7"} />
      </Wrapper>
      {/* TopHeaderImage  */}
      <div className="hidden sm:block w-full  mt-5">
        <img
          className="w-full"
          src={process.env.PUBLIC_URL + "/images/categoryBanner.png"}
          alt=""
        />
      </div>
      {/* Main Page  */}
      <Wrapper>
        <div className="grid grid-cols-9 gap-4">
          <div className="col-span-9 mt-8">
            {/* Collection Header  */}
            <div className="flex items-center justify-center text-center flex-col">
              <h2 className="text-black-100 text-[16px] sm:text-[22px] font-medium sm:font-semibold">
                {categoryName}{" "}
              </h2>
              {window?.innerWidth > 640 && (
                <p className="hidden sm:block text-base w-[100vw] text-gray-700 px-16 mt-2">
                  Find top-notch commercial kitchen equipment for restaurants.
                  We offer a wide range of products from trusted brands
                  like Beckers, Rational, Cambro, Empero, Coupe, Lacor,
                  and Roller Grill. Whether you're outfitting a new kitchen or
                  upgrading your current setup.
                </p>
              )}
              {window?.innerWidth < 640 && (
                <p className="block sm:hidden text-[14px] font-normal w-[100vw] text-gray-700 px-[5px] mt-2">
                  Find top-notch commercial kitchen equipment restaurants We
                  offer a wide range products.
                </p>
              )}
            </div>

            {/* Collection Category  */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-5 mt-8">
              {filterCategories && filterCategories.length > 0
                ? filterCategories.map((cat, index) => {
                    console.log(cat);
                    const isVisible =
                      window?.innerWidth < 640 ? index < 8 : index < 14;

                    return isVisible ? (
                      <React.Fragment key={index}>
                        <div
                          className={`bg-[#F5F5F5] border-[#D9D9D9] col-span-1 flex items-center justify-center flex-col cursor-pointer transition-all border-2 hover:border-primary p-4 rounded-md ${
                            cat?.id === selectedCat?.id
                              ? "border-primary"
                              : "border-transparent"
                          }`}
                        >
                          <img
                            className="w-28"
                            src={`https://testhssite.com/storage/${cat.image}`}
                            alt={cat.name}
                          />
                          <h4 className="mt-2 text-base text-black font-semibold sm:text-primary text-center">
                            {cat.name}
                          </h4>
                          <h4 className="block sm:hidden mt-2 text-base font-semibold text-primary text-center">
                            {cat.count} Products
                          </h4>
                        </div>
                      </React.Fragment>
                    ) : null;
                  })
                : // Render skeletons when `categories` is `null` or empty
                  Array.from({ length: window?.innerWidth < 640 ? 8 : 14 }).map(
                    (_, index) => (
                      <div key={index} className="col-span-1">
                        <Skeleton count={1} height="150px" />
                      </div>
                    )
                  )}
            </div>
            <div className="hidden sm:grid grid-cols-4 gap-8 mt-8 ">
              {selectedCat && selectedCat.children
                ? selectedCat.children.map((cat, index) => {
                    return (
                      <div
                        key={index}
                        className="grid-cols-1 p-5 border border-gray-300  rounded-[4px] flex  flex-col transition-all hover:border-primary"
                      >
                        <Link
                          key={index}
                          className="mt-1 block text-[#666666] text-base underline"
                          to={`/collections/${id}/${cat.slug}/${cat.id}`}
                        >
                          <img
                            className="w-full"
                            src={"https://testhssite.com/storage/" + cat.image}
                            alt={cat.name}
                          />
                          <div className="mt-4 flex items-center justify-between">
                            <h4 className="text-primary text-lg font-semibold">
                              {cat.name}
                            </h4>
                            <span className="text-primary text-sm flex justify-end  flex-row min-w-[120px]">
                              {cat.children.length} Categories{" "}
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/icons/arrow-right.png"
                                }
                                alt=""
                              />
                            </span>
                          </div>
                        </Link>
                        <div className="border bg-[#E2E8F0] w-full h-[1px] my-4"></div>
                        <div className="overflow-y-auto max-h-[250px]">
                          {cat.children
                            ? cat.children.map((cat2, index2) => {
                                return (
                                  <Link
                                    key={index}
                                    className="mt-1 block text-[#666666] text-base underline"
                                    to={`/collections/${id}/${cat2.slug}/${cat2.id}?type=1`}
                                  >
                                    {cat2.name}
                                  </Link>
                                );
                              })
                            : null}
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
        <div className="py-10 px-6 bg-[#E2E8F033] mt-10 rounded-[20px]">
          <div className="flex items-center justify-center text-center flex-col">
            <h3 className="text-black-100 text-[16px] sm:text-[22px] font-semibold">
              Horeca Mega Deals
            </h3>
            {window?.innerWidth < 640 && (
              <p className="max-w-[850px] text-gray-700 mt-2 font-normal mb-[20px] text-[14px]">
                Find top-notch commercial kitchen equipment for restaurants We
                offer a wide range.
              </p>
            )}
            {window?.innerWidth > 640 && (
              <p className="max-w-[850px] text-gray-700 mt-2 text-base">
                Find top-notch commercial kitchen equipment for restaurants. We
                offer a wide range of products from trusted brands
                like Beckers, Rational, Cambro, Empero, Robot Coupe, Lacor,
                and Roller Grill. Whether you're outfitting a new kitchen or
                upgrading your current setup.
              </p>
            )}
          </div>
          {window?.innerWidth > 640 && (
            <div className="grid grid-cols-3 mt-5 gap-6">
              {megaDeals
                ? megaDeals.map((items, index) => {
                    return (
                      <Link
                        key={index}
                        to={items.redirectLink}
                        className="mt-2 mr-[10px]"
                      >
                        <img src={items.img} alt="" />
                      </Link>
                    );
                  })
                : null}
            </div>
          )}
          {window?.innerWidth < 640 && (
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              {megaDeals
                ? megaDeals.map((items, index) => (
                    <Link
                      key={index}
                      to={items.redirectLink}
                      className="snap-center flex-shrink-0 w-full"
                    >
                      <img
                        className="w-full h-auto object-cover"
                        src={items.img}
                        alt=""
                      />
                    </Link>
                  ))
                : null}
            </div>
          )}
        </div>
        <div className="mb-10">
          <div className="flex items-center justify-between mx-2 my-[10px] sm:my-8">
            <h2 className="font-medium sm:font-semibold text-[16px] sm:text-2xl leading-[18.77px] text-black-100 ">
              Top Picks in Santos
            </h2>
            {window?.innerWidth > 640 && (
              <span className="text-gray-700 text-sm">Page 1 of 5</span>
            )}
          </div>
          {window?.innerWidth > 640 && (
            <Slider {...fiveSlider} className="arrow__wrapper">
              {BrandPicks.map((product, index) => {
                return (
                  <ProductCard
                    classes="min-h-[600px] mr-[10px]  mx-2"
                    key={index}
                    product={product}
                  />
                );
              })}
            </Slider>
          )}
          {window?.innerWidth < 640 && (
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
          )}
        </div>

        <div className="w-full my-8">
          {window?.innerWidth < 640 && (
            <img
              className="h-[160px] sm:h-[100%] w-[100vw] border"
              src={
                process.env.PUBLIC_URL + "/images/collectonBanners/image.png"
              }
              alt=""
            />
          )}
          {window?.innerWidth > 640 && (
            <img
              className="h-[160px] sm:h-[100%] w-[100vw] border"
              src={
                process.env.PUBLIC_URL +
                "/images/collections/perfect-design.png"
              }
              alt=""
            />
          )}
        </div>

        <div className="mb-10">
          <div className="flex items-center justify-between mx-2 my-[10px] sm:my-8">
            <h2 className=" font-medium sm:font-semibold text-[16px] sm:text-2xl text-black-100 ">
              Top deals from our sellers
            </h2>
            {window?.innerWidth > 640 && (
              <span className="text-gray-700 text-sm">Page 1 of 5</span>
            )}
          </div>
          {window?.innerWidth > 640 && (
            <Slider {...fiveSlider} className="arrow__wrapper">
              {BrandPicks
                ? BrandPicks.map((product, index) => {
                    return (
                      <ProductCard
                        classes="min-h-[600px] mx-2"
                        key={index}
                        product={product}
                      />
                    );
                  })
                : null}
            </Slider>
          )}
          {window?.innerWidth < 640 && (
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
          )}
        </div>

        <div className="w-full my-8">
          {window?.innerWidth < 640 && (
            <img
              className="h-[160px] sm:h-[100%] w-[100vw] border"
              src={
                process.env.PUBLIC_URL + "/images/collectonBanners/image-1.png"
              }
              alt=""
            />
          )}
          {window?.innerWidth > 640 && (
            <img
              className="h-[160px] sm:h-[100%] w-[100vw] border"
              src={
                process.env.PUBLIC_URL +
                "/images/collections/perfect-served.png"
              }
              alt=""
            />
          )}
        </div>

        <div className="mb-10">
          <div className="flex items-center justify-between mx-2 my-[10px] sm:my-8">
            <h2 className=" font-medium sm:font-semibold text-[16px] sm:text-2xl text-black-100 ">
              Explore top picks
            </h2>
            {window?.innerWidth > 640 && (
              <span className="text-gray-700 text-sm">Page 1 of 5</span>
            )}
          </div>
          {window?.innerWidth > 640 && (
            <Slider {...fiveSlider} className="arrow__wrapper">
              {BrandPicks.map((product, index) => {
                return (
                  <ProductCard
                    classes="min-h-[600px] mx-2"
                    key={index}
                    product={product}
                  />
                );
              })}
            </Slider>
          )}
          {window?.innerWidth < 640 && (
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
          )}
        </div>

        <div className="w-full my-8">
          {window?.innerWidth < 640 && (
            <img
              className="h-[160px] sm:h-[100%] w-[100vw] border"
              src={
                process.env.PUBLIC_URL + "/images/collectonBanners/image-2.png"
              }
              alt=""
            />
          )}
          {window?.innerWidth > 640 && (
            <img
              className="h-[160px] sm:h-[100%] w-[100vw] border"
              src={process.env.PUBLIC_URL + "/images/collections/dine-in.png"}
              alt=""
            />
          )}
        </div>

        <div className="mb-10">
          <div className="flex items-center justify-between mx-2 my-[10px] sm:my-8">
            <h2 className=" font-medium sm:font-semibold text-[16px] sm:text-2xl text-black-100 ">
              Hot new releases
            </h2>
            {window?.innerWidth > 640 && (
              <span className="text-gray-700 text-sm">Page 1 of 5</span>
            )}
          </div>
          {window?.innerWidth > 640 && (
            <Slider {...fiveSlider} className="arrow__wrapper">
              {products
                ? products?.map((product, index) => {
                    return (
                      <ProductCard
                        classes="min-h-[600px] mx-2"
                        key={index}
                        product={product}
                      />
                    );
                  })
                : null}
            </Slider>
          )}
          {window?.innerWidth < 640 && (
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
          )}
        </div>

        <div className="py-10 pb-20 px-1 sm:px-6 bg-[#E2E8F033] mt-10 rounded-[20px]">
          <div className="flex items-center justify-center text-center flex-col">
            <h3 className=" font-medium sm:font-semibold text-[16px] sm:text-[22px] text-black-100 ">
              Explore official brand stores
            </h3>
            {window?.innerWidth < 640 && (
              <p className="max-w-[850px] mb-[20px] text-gray-700 mt-2 text-[14px]  sm:text-base">
                Find top-notch commercial kitchen equipment for restaurants We
                offer a wide range.
              </p>
            )}
            {window?.innerWidth > 640 && (
              <p className="max-w-[850px] text-gray-700 mt-2 text-[14px]  sm:text-base">
                Find top-notch commercial kitchen equipment for restaurants. We
                offer a wide range of products from trusted brands
                like Beckers, Rational, Cambro, Empero, Robot Coupe, Lacor,
                and Roller Grill. Whether you're outfitting a new kitchen or
                upgrading your current setup.
              </p>
            )}
          </div>
          {window?.innerWidth < 640 && (
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
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
            >
              {ExploreBrandImages
                ? ExploreBrandImages.map((items, index) => (
                    <Link
                      key={index}
                      to={items.redirectLink}
                      className="snap-center flex-shrink-0 mr-[10px] w-[50vw]"
                    >
                      <img
                        className="w-full mx-[10px] h-auto object-cover rounded-lg"
                        src={items.img}
                        alt=""
                      />
                    </Link>
                  ))
                : null}
            </div>
          )}

          <div className="hidden sm:grid grid-cols-4 gap-4 mt-5">
            <div className="col-span-1">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/collections/brands/brand-1.png"
                }
                alt=""
              />
            </div>
            <div className="col-span-1">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/collections/brands/brand-2.png"
                }
                alt=""
              />
            </div>
            <div className="col-span-1">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/collections/brands/brand-3.png"
                }
                alt=""
              />
            </div>
            <div className="col-span-1">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/collections/brands/brand-4.png"
                }
                alt=""
              />
            </div>
            <div className="col-span-1">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/collections/brands/brand-5.png"
                }
                alt=""
              />
            </div>
            <div className="col-span-1">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/collections/brands/brand-6.png"
                }
                alt=""
              />
            </div>
            <div className="col-span-1">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/collections/brands/brand-7.png"
                }
                alt=""
              />
            </div>
            <div className="col-span-1">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/collections/brands/brand-8.png"
                }
                alt=""
              />
            </div>
            <div className="col-span-1">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/collections/brands/brand-9.png"
                }
                alt=""
              />
            </div>
            <div className="col-span-1">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/collections/brands/brand-10.png"
                }
                alt=""
              />
            </div>
            <div className="col-span-1">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/collections/brands/brand-11.png"
                }
                alt=""
              />
            </div>
            <div className="col-span-1">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/collections/brands/brand-12.png"
                }
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-center justify-between mx-2 my-[10px] sm:my-8">
            <h2 className=" font-medium sm:font-semibold text-[16px] sm:text-2xl text-black-100 ">
              Products you may also like
            </h2>
            {window?.innerWidth > 640 && (
              <span className="text-gray-700 text-sm">Page 1 of 5</span>
            )}
          </div>
          {window?.innerWidth > 640 && (
            <Slider {...fiveSlider} className="arrow__wrapper">
              {BrandPicks
                ? BrandPicks.map((product, index) => {
                    return (
                      <ProductCard
                        classes="min-h-[600px] mx-2"
                        key={index}
                        product={product}
                      />
                    );
                  })
                : null}
            </Slider>
          )}
          {window?.innerWidth < 640 && (
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
                    products?.map((product, index) =>
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
          )}
        </div>

        <div className="mb-10">
          <div className="flex items-center justify-between mx-2 my-[10px] sm:my-8">
            <h2 className=" font-medium sm:font-semibold text-[16px] sm:text-2xl text-black-100 ">
              Inspired by your browsing history
            </h2>
            {window?.innerWidth > 640 && (
              <span className="text-gray-700 text-sm">Page 1 of 5</span>
            )}
          </div>
          {window?.innerWidth > 640 && (
            <Slider {...fiveSlider} className="arrow__wrapper">
              {BrandPicks
                ? BrandPicks.map((product, index) => {
                    return (
                      <ProductCard
                        classes="min-h-[600px] mx-2"
                        key={index}
                        product={product}
                      />
                    );
                  })
                : null}
            </Slider>
          )}
          {window?.innerWidth < 640 && (
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
          )}
        </div>
      </Wrapper>
    </div>
  );
};

const FilterTitle = ({ classes, title }) => {
  return (
    <h2 className={`${classes} text-black-100 font-semibold text-lg`}>
      {title}
    </h2>
  );
};
const CustomCheckbox = ({ children, title, quantity, id }) => {
  return (
    <div className="flex items-center justify-between text-gray-700 mt-1">
      <div className="flex items-center">
        <input
          id={title.split("")[0] + id}
          type="checkbox"
          value=""
          className="outline-none w-4 h-4  border-primary rounded accent-primary"
        />
        <label htmlFor={title.split("")[0] + id} className="ml-2 text-sm ">
          {title}
        </label>
      </div>
      <span>{quantity}</span>
    </div>
  );
};

const CustomRadio = ({ children, id, rating, quantity }) => {
  return (
    <div className="flex items-center mb-2 ">
      <input
        type="radio"
        name={id}
        className="w-4 h-4  mr-2 accent-primary cursor-pointer"
      />
      <label
        htmlFor={id}
        className="w-full flex items-center justify-between text-gray-700 text-sm"
      >
        <div className="flex items-center">
          <Rating rating={rating} />
          <span className="">& Up </span>
        </div>
        <span>{quantity}</span>
      </label>
    </div>
  );
};
