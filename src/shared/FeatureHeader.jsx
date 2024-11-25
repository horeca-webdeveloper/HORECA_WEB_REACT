import React from "react";
import Skeleton from "react-loading-skeleton";

export const FeatureHeader = ({
  data,
  title,
  selectedItem,
  setSelectedItem,
  loader,
  classes,
}) => {
  const smScreen =
    "flex items-center text-[12px] sm:text-lg overflow-x-auto space-x-4 px-2 py-1";
  const BgScreen =
    "flex items-center text-[12px] sm:text-lg space-x-4 px-2 py-1";

  const flexSm = "flex-col";
  const flexBg = "flex";
  return (
    <div>
      <div
        className={`flex items-center ${classes} border-b border-[#E2E8F0] pb-5`}
      >
        <div
          style={window.innerWidth < 640 ? { flexSm } : { flexBg }}
          className={`${
            window.innerWidth < 640
              ? "flex-col overflow-hidden text-black-100 font-semibold text-sm"
              : "flex items-center overflow-hidden text-black-100 font-semibold text-sm sm:text-2xl"
          }`}
        >
          <h2 className="text-black-100 font-semibold text-sm sm:text-2xl">
            {title}
          </h2>
          <ul
            style={
              window.innerWidth < 640
                ? {
                    overflow: "auto",
                    scrollbarWidth: "none", // For Firefox
                    msOverflowStyle: "none", // For Internet Explorer and Edge
                  }
                : {}
            }
            className={window.innerWidth < 640 ? smScreen : BgScreen}
          >
            {loader
              ? // Show loading skeletons if loading
                Array.from({ length: 5 }).map((_, index) => (
                  <Skeleton
                    key={index}
                    count={1}
                    width={"150px"}
                    className="mx-3"
                    height={"30px"}
                  />
                ))
              : data
              ? data.map((brand, index) => {
                  const isSelected = brand === selectedItem;
                  return (
                    <li
                      className={`shrink-0 px-3 py-1 cursor-pointer rounded ${
                        isSelected
                          ? " text-[#64748B] font-light"
                          : "text-[#186737] font-light"
                      }`}
                      key={index}
                      onClick={() => setSelectedItem(brand)}
                    >
                      <div className="text-center ">{brand}</div>
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
};
