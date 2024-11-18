import React from "react";
import { CiSearch } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router";

export const RelatedSearch = ({ relatedSearch }) => {
    const location = useLocation();
    const navigate = useNavigate();


    const handlerRelatedSearch = (name) => {
        let filterName = name.replace(/ /g, '-');
        navigate(`/products?search=${filterName}`)
    }

    return (
        < React.Fragment >
            {
                relatedSearch ? (
                    <React.Fragment >
                        <div className="mb-5 mt-8">
                            <h2 className="text-black-100 text-lg font-semibold">Related Searches</h2>
                            <div className="flex flex-row flex-wrap items-center  ">
                                {relatedSearch.map((relate, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            {index < 14 ? <button className="flex flex-row items-center justify-center bg-[#F1F1F2] rounded-full py-2 px-4 text-sm mr-3 mt-3">
                                                <CiSearch size={"18px"} color="#030303" />
                                                <span className="ml-1 text-black-100" onClick={() => handlerRelatedSearch(relate.name)}>{relate.name}</span>
                                            </button> : null}
                                        </React.Fragment>
                                    )
                                })}
                            </div>
                        </div>
                        < div className="w-full h-[1px] bg-[#E2E8F0] my-5">    </div>
                    </React.Fragment >
                ) : null}
        </ React.Fragment>
    )
}