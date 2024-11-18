import React, { useState } from "react";
import { Wrapper } from "../../shared/Wrapper";
import { Link } from "react-router-dom";
import { Category } from "./Category";

export const Categories = ({ categories }) => {


    return (
        <Wrapper>
            {/* Categories Header  */}
            <div className="flex items-center justify-between mt-11">
                <h2 className="text-black-100 text-2xl font-semibold">Shop by Categories</h2>
                <Link to="/collections" className="text-gray-700 text-lg">All Categories</Link>
            </div>

            {/* categories List  */}
            <div className="flex flex-wrap items-center justify-between gap-4 my-8">
                {categories.map((category, index) => {
                    return (
                        <React.Fragment key={index} >
                            {index < 14 ? <Category category={category} /> : null}
                        </React.Fragment>
                    )
                })}
            </div>
        </Wrapper>
    )
}