import React from "react";
import { Wrapper } from "../../shared/Wrapper";
import Slider from "react-slick";
import { singleImageBanner } from "../../utils/slicksettings";
import { heroSlider, sideBanner } from "../../data/homepage";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
export const Hero = ({ sliderLoader, heroSlider }) => {
  return (
    <Wrapper classes="mt-4 flex items-start justify-between flex-nowrap">
      <div className="grid lg:grid-cols-7 lg:gap-x-4 grid-cols-1">
        <div className="lg:col-span-5 col-span-1">
          {!sliderLoader ? (
            <Slider {...singleImageBanner} className="">
              {heroSlider
                ? heroSlider.map((banner, index) => {
                    return (
                      <Link
                        className="outline-none"
                        key={index}
                        to={`/products?search=`}
                      >
                        <img
                          className="w-full h-[500px] rounded-md"
                          src={`https://admin.horecastore.sa/storage/${banner?.image}`}
                          alt={banner.title}
                        />
                      </Link>
                    );
                  })
                : null}
            </Slider>
          ) : (
            <Skeleton width={"100%"} height={"480px"} />
          )}
        </div>
        <div className="lg:col-span-2 col-span-1">
          <div className="flex flex-row lg:flex-col gap-2 lg:gap-4">
            {sideBanner.map((banner, index) => {
              return (
                <Link
                  key={index}
                  to={banner.redirectUrl}
                  className="w-full block object-contain"
                >
                  <img
                    src={banner.imgSource}
                    alt="Horeca Product Banner"
                    className="min-h-[140px] h-[240px] rounded-md lg:min-h-[100px] xl:min-h-[180px]"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
