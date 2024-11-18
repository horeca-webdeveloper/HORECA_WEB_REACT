import React, { useState, useEffect } from "react";
import { FaShareAlt } from "react-icons/fa";
import Skeleton from 'react-loading-skeleton';
import { apiClient } from "../../utils/apiWrapper";
import { useCart } from "../../context/CartContext";
import { IoPrintOutline } from "react-icons/io5"
import { CartButton } from "../CartButton";

export const CompareProducts = ({ productLoader, product, compareProductFields }) => {
    const [loader, setLoader] = useState(false);
    const { triggerUpdateCart } = useCart();
    const [firstRow, setFirstRow] = useState([]);

    const [firstLayer, setFirstLayer] = useState([]);
    const [secondLayer, setSecondLayer] = useState([]);
    const [thirdLayer, setThirdLayer] = useState([]);
    const [forthLayer, setForthLayer] = useState([]);
    const [fifthLayer, setFifthLayer] = useState([])



    useEffect(() => {
        if (product.specifications) {
            let firstLayerTemp = [];
            product.specifications.map((spec) => {
                firstLayerTemp.push(spec.spec_name)
            })
            setFirstLayer(firstLayerTemp.sort())
        }


        if (product.compare_products && firstLayer) {
            let secondLayerTemp = [];
            let found;
            firstLayer.map((first, index) => {
                found = false;
                product.specifications.map((sec, index2) => {
                    if (first === sec.spec_name) {
                        secondLayerTemp.push(sec.spec_value)
                        found = true;
                    }
                })
                if (!found) {
                    secondLayerTemp.push("N/A")
                }
            })

            setSecondLayer(secondLayerTemp)
        }

        if (product.compare_products && firstLayer) {
            let thirdLayerTemp = [];
            let found;
            firstLayer.map((first, index) => {
                found = false;
                product.compare_products[0].specifications.map((sec, index2) => {
                    if (first === sec.spec_name) {
                        thirdLayerTemp.push(sec.spec_value)
                        found = true;
                    }
                })
                if (!found) {
                    thirdLayerTemp.push("N/A")
                }
            })

            setThirdLayer(thirdLayerTemp)
        }

        if (product.compare_products && firstLayer) {
            let forthLayerTemp = [];
            let found;
            firstLayer.map((first, index) => {
                found = false;
                product.compare_products[1].specifications.map((sec, index2) => {
                    if (first === sec.spec_name) {
                        forthLayerTemp.push(sec.spec_value)
                        found = true;
                    }
                })
                if (!found) {
                    forthLayerTemp.push("N/A")
                }
            })

            setForthLayer(forthLayerTemp)
        }

        if (product.compare_products && firstLayer) {
            let fifthLayerTemp = [];
            let found;
            firstLayer.map((first, index) => {
                found = false;
                product.compare_products[2].specifications.map((sec, index2) => {
                    if (first === sec.spec_name) {
                        fifthLayerTemp.push(sec.spec_value)
                        found = true;
                    }
                })
                if (!found) {
                    fifthLayerTemp.push("N/A")
                }
            })

            setFifthLayer(fifthLayerTemp)
        }


    }, [product])






    return (
        <React.Fragment>
            {!productLoader ?
                <div className='col-span-12 my-8 mt-12'>
                    {(product && product.compare_products && product.compare_products.length && product.specifications) ? <table className="min-w-full table-auto border-collapse border-2 border-gray-300 rounded-md">
                        <thead>
                            <tr className="bg-green-100">
                                <th className="w-1/5 p-5 text-start bg-white relative ">
                                    <div className='absolute top-8 w-[80%]'>
                                        <h2 className='text-black-100 text-2xl font-semibold py-2'>Compare with similar products</h2>
                                        <p className='text-[#4A4A4A] text-sm font-normal py-2'>Lorem ipsum dolor sit amet consectetur. Non nunc tincidunt mattis ut. Lobortis donec eget enim euismod quam molestie. Leo pellentesque ante amet felis dignissim ac. Lectus non volutpat tincidunt semper est. Platea quis libero eu tincidunt iaculis ut.</p>
                                    </div>
                                </th>
                                <th className="w-1/5 p-5  relative  border border-x-[1px] bg-[#DEF9EC80]">
                                    <div className='flex flex-col mt-5'>
                                        <span className="font-semibold text-base text-white bg-primary py-2 absolute top-0 left-0 w-full">This Product</span>
                                        <span className='mt-5 text-black-100 text-base font-semibold line-clamp-2'>{product.name}</span>
                                        <img className="mx-auto my-5 w-[200px]" src={"https://testhssite.com/storage/" + product.image} alt="" />
                                        <CartButton productId={product.id} quantity={1} productName={product.name} />
                                    </div>
                                </th>
                                {product.compare_products ? product.compare_products.map((compare, index) => {
                                    return (
                                        <React.Fragment key={index} >
                                            {index < 3 ? (
                                                <th className="w-1/5 p-5  relative  border border-x-[1px] bg-white">
                                                    <div className='flex flex-col mt-5'>
                                                        <span className="flex  items-center  justify-center font-semibold text-base text-primary bg-[#DEF9EC] py-2 absolute top-0 left-0 w-full">Change Product
                                                            <img className="ml-2" src={process.env.PUBLIC_URL + "/icons/write.png"} alt="" /></span>
                                                        <span className='mt-5 text-black-100 text-base font-semibold line-clamp-2 '>{compare.name}</span>
                                                        <img className="mx-auto my-5 w-[200px]" src={"https://testhssite.com/storage/" + compare.image} alt="" />
                                                        <CartButton productId={compare.id} quantity={1} productName={compare.name} />
                                                    </div>
                                                </th>
                                            ) : null}
                                        </React.Fragment>
                                    )
                                }) : null}


                            </tr>
                        </thead>
                        <tbody className='text-[#64748B] font-semibold text-base'>
                            {firstLayer ? firstLayer.map((item, index) => {
                                return (
                                    <tr className={`${index % 2 === 0 ? 'bg-[#DEF9EC]' : 'bg-white'}`}>
                                        <td className="px-5 py-3">{firstLayer[index]}</td>
                                        <td className="px-5 py-3">{secondLayer[index]}</td>
                                        <td className="px-5 py-3">{thirdLayer[index]}</td>
                                        <td className="px-5 py-3">{forthLayer[index]}</td>
                                        <td className="px-5 py-3">{fifthLayer[index]}</td>
                                    </tr>
                                )
                            }) : null}
                            {/* {product.specifications ? product.specifications.map((spec, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        {index < 15 ? (
                                            <tr className={`${index % 2 === 0 ? 'bg-[#DEF9EC]' : 'bg-white'}`}>
                                                <td className="px-5 py-3">{compareProductFields ? compareProductFields[index] : ""}</td>
                                                <td className={`px-4 py-3 text-center  ${index % 2 === 0 ? 'bg-[#DEF9EC]' : 'bg-[#effcf5]'}`}>{spec.spec_value ? spec.spec_value : ""}</td>
                                                {renderingCompareUI(product, index, 0)}
                                                {renderingCompareUI(product, index, 1)}
                                                {renderingCompareUI(product, index, 2)}
                                            </tr>
                                        ) : null}
                                    </React.Fragment>
                                )
                            }) : null} */}
                        </tbody>

                    </table> :
                        <div></div>
                    }
                </div> : <div className='col-span-12 my-8'><Skeleton className='w-full h-[900px] ' /></div>}

            {product.compare_products ? <div className='col-span-12 '>
                <div className='flex items-end justify-end'>
                    <button className='text-white bg-[#64748B] rounded-md py-2 px-5 text-base font-semibold flex items-center mr-4'><FaShareAlt className='mr-1' /><span>Share</span></button>
                    <button className='text-white bg-primary rounded-md py-2 px-5 text-base font-semibold flex items-center'><IoPrintOutline className='mr-1' /><span>Print</span></button>
                </div>
            </div> : null}
        </React.Fragment>
    )
}