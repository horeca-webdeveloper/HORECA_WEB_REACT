import React from "react";
import Skeleton from "react-loading-skeleton";

export const FeatureHeader = ({ data, title, selectedItem, setSelectedItem, loader, classes }) => {
    return (
        <div>
            <div className={`flex flex-rows items-center justify-between ${classes} border-b border-[#E2E8F0] pb-5`}>
                <h2 className="text-black-100 font-semibold text-2xl">{title}</h2>
                <ul className="text-gray-700 text-lg flex flex-row">
                    {loader ? (
                        // Show loading skeletons if loading
                        Array.from({ length: 5 }).map((_, index) => (
                            <Skeleton key={index} count={1} width={"150px"} className="mx-3" height={"30px"} />
                        ))
                    ) : (
                        data ? data.map((brand, index) => {
                            const isSelected = brand === selectedItem;
                            return (
                                <li
                                    className={`inline mx-3 cursor-pointer hover:text-primary transition-all ${isSelected ? ' text-primary' : ''}`}
                                    key={index}
                                    onClick={() => setSelectedItem(brand)}
                                >
                                    {brand}
                                </li>
                            );
                        }) : null
                    )}
                </ul>
            </div>
        </div>
    );
};
