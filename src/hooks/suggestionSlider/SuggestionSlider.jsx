import React from "react";
import Slider from "react-slick";
import { settings } from "../../utils/slicksettings";
import { ProductCard } from "../../shared/ProductCard";

export const SuggestionSlider = ({ title, productList }) => {
    return (
        <div className="mb-10">
            <div className="flex items-center justify-between mx-2 my-8">
                <h2 className="font-semibold text-black-100 text-2xl">{title}</h2>
            </div>

            <Slider {...settings} className="arrow__wrapper">
                {productList ? productList.map(((product, index) => {
                    return (
                        <ProductCard classes="" key={index} product={product} />
                    )
                })) : null}
            </Slider>
        </div>
    )
}

