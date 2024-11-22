import React, { useState } from "react";
import { Wrapper } from "../../shared/Wrapper";
import { Link } from "react-router-dom";
import { Category } from "./Category";

export const Categories = ({ categories }) => {
  return (
    <Wrapper>
      {/* Categories Header  */}
      <div className="flex items-center justify-between mt-11">
        <h2 className="text-black-100  font-semibold text-[16px] sm:text-2xl">
          Shop by Categories
        </h2>
        <Link
          to="/collections"
          className="text-gray-700 text-[14px] sm:text-lg"
        >
          All Categories
        </Link>
      </div>

      {/* categories List  */}
      <div className="grid grid-cols-2 items-center justify-between gap-4 my-8 sm:flex sm:flex-wrap">
        {categories.map((category, index) => {
          if (index < 6) {
            return (
              <React.Fragment key={index}>
                {index < 14 ? <Category category={category} /> : null}
              </React.Fragment>
            );
          }
        })}
      </div>
    </Wrapper>
  );
};
