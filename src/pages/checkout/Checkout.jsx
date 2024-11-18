import React, { useState, useEffect } from "react";
import { Breadcrumb } from "../../shared/Breadcrumb";
import { Link, useNavigate } from "react-router-dom";
import { notify } from "../../utils/notify.js";
import { useLocalCartCount } from "../../context/LocalCartCount";
import { toast } from "react-toastify";
import { DeleteCartButton } from "../../shared/CheckoutPage/DeleteCartButton";
import { WishListButton } from "../../shared/CheckoutPage/WishListButton.jsx";
import { Counter } from "../../shared/CheckoutPage/Counter.jsx";
import { InfinitySpin } from 'react-loader-spinner';
import { ProductCard } from "../../shared/ProductCard";
import Slider from "react-slick"
import { fiveSlider } from "../../utils/slicksettings";
import { Wrapper } from "../../shared/Wrapper";
import { firstBreadCrumb, shipmentOne, recomendProduct, buyProducts } from "../../data/checkoutConfig";
import { CustomCheckbox } from "../../shared/CustomCheckbox";
import { FiMinus, FiPlus } from "react-icons/fi"
import { FaLongArrowAltRight, FaCheck } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { apiClient } from "../../utils/apiWrapper.js";
import { Layout } from "./Layout.jsx";


export const Checkout = () => {
    const [loader, setLoader] = useState(false)
    const [activeTab, setActiveTab] = useState('saved');
    const [cartItems, setCartItems] = useState([]);
    const [listOfStore, setListOfStore] = useState([]);
    const [fetchCall, setFetchCall] = useState(false);
    const [cartSummaryFlag, setCartSummaryFlag] = useState(false);
    const [sameDeliveryTime, setSameDeliveryTime] = useState(false);
    const [maxDeliveryDate, setMaxDeliveryDate] = useState(0)
    const { triggerUpdateCart } = useCart();
    const [removeItemsLoader, setRemoveItemsLoader] = useState(false);
    const [discountPercent, setDiscountPercent] = useState(0)
    const [couponCodeValue, setCouponCodeValue] = useState("");
    const [couponError, setCouponError] = useState("")


    const getDeliveryDate = (days) => {
        days = Number(days)
        let temp = !isNaN(days) ? days : 5
        const futureDate = new Date(new Date().setDate(new Date().getDate() + Number(temp)));
        const day = String(futureDate.getDate()).padStart(2, '0');
        const month = String(futureDate.getMonth() + 1).padStart(2, '0');
        const year = futureDate.getFullYear();
        return `${day}/${month}/${year}`
    };
    const fetchingCart = async () => {
        setLoader(true)
        try {
            const response = await apiClient.get('/cart');
            setCartItems(response.data.data)
            let temp = [];
            response.data.data.map((prod) => {
                if (!temp.includes(prod.product.store_id)) {
                    temp.push(prod.product.store_id)
                }
            })
            setListOfStore(temp)
        } catch (error) {
            console.error('Error:', error);
        }
        finally {
            setLoader(false)
        }
    }

    useEffect(() => {
        fetchingCart();
    }, [fetchCall])

    const handlerSameDeliveryDate = (e) => {
        setSameDeliveryTime(e.target.checked)
        let maxDeliveryDates;
        if (e.target.checked) {
            cartItems.map((item) => {
                maxDeliveryDates = maxDeliveryDate > Number(item.product.delivery_days) ? maxDeliveryDate : Number(item.product.delivery_days)
            })
        }
        else {
            maxDeliveryDates = 0;
        }

        setMaxDeliveryDate(maxDeliveryDates)
    }

    const handlerRemoveAllItemsFromCart = async () => {
        setRemoveItemsLoader(true)
        try {
            const response = await apiClient.delete(`/cart`, {
            });
            notify("All Cart Items Succesfully Deleted")
            setFetchCall(!fetchCall)
            triggerUpdateCart();
            setCartSummaryFlag(!cartSummaryFlag)
            setDiscountPercent(0);
            setCouponCodeValue("");
            setCouponError("")

        } catch (error) {
            console.error('Error:', error);
        } finally {
            setRemoveItemsLoader(false)
        }
    }

    return (
        <React.Fragment>
            <Layout cartItems={cartItems} cartSummaryFlag={cartSummaryFlag} removeItemsLoader={removeItemsLoader}>
                <Breadcrumb items={firstBreadCrumb} classes={"mt-7"} />

                <div className="border-[#E2E8F0] rounded-[10px] border-2 px-5 mt-5">
                    <div className="flex items-center mt-5">
                        <h3 className="font-semibold text-[28px] text-[#424242]">Shopping Cart</h3>
                        {cartItems ? <p className="text-[#64748B] text-base ml-2">({cartItems.length} Items)</p> : null}
                    </div>
                    {listOfStore && listOfStore.length ? (
                        <div className="my-3 flex items-center justify-between">
                            <div className="flex items-center justify-between text-gray-700 mt-1">
                                <div className="flex items-center">
                                    <input type="checkbox" id="sameDelivery" value={sameDeliveryTime} onChange={(e) => handlerSameDeliveryDate(e)} className="cursor-pointer outline-none w-4 h-4  border-primary rounded accent-primary" />
                                    <label className="ml-2 text-sm" htmlFor="sameDelivery">I want all items together in one shipment</label>
                                </div>
                            </div>
                            <button className={`text-gray-400 text-sm underline`} onClick={() => handlerRemoveAllItemsFromCart()}>Remove All Items from Cart</button>
                        </div>
                    ) : null}
                    {listOfStore && listOfStore.length ? listOfStore.map((store, index) => {
                        return (
                            <div className="rounded-[10px]  bg-[#E2E8F04D] p-4 my-5">
                                <h2 className="text-[#424242] font-semibold text-lg mb-4">Shipment {index + 1}</h2>
                                {cartItems.filter(item => item.product.store_id === listOfStore[index]).map((prod, index) => {
                                    return (
                                        <React.Fragment>
                                            <div className={`flex flex-row items-center mb-8 relative "}`} key={index}>
                                                <Link to={`/product/${prod.product_id}`}>
                                                    <img className="max-w-[130px]" src={"https://testhssite.com/storage/" + prod?.product?.images[0]} alt={prod.product.name} />
                                                </Link>
                                                <div className="basis-1/2 ml-3" >
                                                    <Link to={`/product/${prod.product_id}`}>
                                                        <h3 className="text-[#030303] text-lg leading-5 ">{prod.product.name}</h3>
                                                        <p className="my-2 text-base font-semibold text-[#030303]"><span>{prod.product.currency.title}</span><span className="text-xl font-bold ml-2">{prod.product.sale_price ? prod.product.sale_price.toFixed(2) : prod.product.original_price.toFixed(2)}</span><span className="text-[#B12704] ml-3">/ Each</span></p>
                                                    </Link>
                                                    <div>
                                                        <Counter product={prod} setCartSummaryFlag={setCartSummaryFlag} cartSummaryFlag={cartSummaryFlag} />
                                                        <span className="mx-3 text-[#E2E8F0]">|</span>
                                                        <WishListButton product={prod} />
                                                        <span className="mx-3 text-[#E2E8F0]">|</span>
                                                        <DeleteCartButton fetchCall={fetchCall} setFetchCall={setFetchCall} product={prod} setCartSummaryFlag={setCartSummaryFlag} cartSummaryFlag={cartSummaryFlag} />
                                                    </div>
                                                </div>
                                                <div className="basis-1/4 max-w-[250px] px-5">
                                                    <div className="flex  flex-col items-center mb-4">
                                                        <div className="flex items-start mt-4">
                                                            <div className="flex flex-col ml-3" >
                                                                <label className="text-base text-primary font-semibold">{maxDeliveryDate ? getDeliveryDate(maxDeliveryDate) : getDeliveryDate(prod.product.delivery_days)}</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=" text-[#030303] text-lg font-semibold">
                                                    {prod.product.currency.title} {prod.product.sale_price ? (prod.product.sale_price * prod.quantity).toFixed(2) : (prod.product.original_price * prod.quantity).toFixed(2)}
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    )
                                })}
                            </div>
                        )
                    }) : <div className="w-full  h-[300px] text-gray-400 flex items-center justify-center font-semibold mb-10">No Product Items Available</div>}
                </div>

                <div className="flex flex-col border-[#E2E8F0] rounded-[10px] border-2 px-5 mt-5 pt-5">
                    <div className="flex items-center ml-5 ">
                        <button
                            className={`text-[#64748B] font-semibold text-lg px-4 pl-0 py-2  transition-all border-b-2 border-b-transparent ${activeTab === 'saved' ? ' border-b-primary' : ''}`}
                            onClick={() => setActiveTab('saved')}
                        >
                            Saved for Later (2 Items )
                        </button>
                        <button
                            className={`text-[#64748B] font-semibold text-lg px-4 py-2 transition-all border-b-2 border-b-transparent ${activeTab === 'buy' ? ' border-b-primary' : ''}`}
                            onClick={() => setActiveTab('buy')}
                        >
                            Buy it Again
                        </button>
                    </div>

                    <div className="mt-4 p-4 ">
                        {activeTab === 'saved' ? (
                            <div className="grid grid-cols-3 gap-8 ">
                                {buyProducts.map(((product, index) => {
                                    return (
                                        <ProductCard classes="col-span-1 mt-1  min-h-[600px]" key={index} product={product} />
                                    )
                                }))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-3 gap-8 ">
                                {buyProducts.map(((product, index) => {
                                    return (
                                        <ProductCard classes="col-span-1 mt-1  min-h-[600px]" key={index} product={product} />
                                    )
                                }))}
                            </div>
                        )}
                    </div>
                </div>
                <div>
                </div>
                <div className="my-5 w-full">
                    <img className="w-full block" src={process.env.PUBLIC_URL + "/images/checkout/banner.png"} alt="" />
                </div>

            </Layout>
        </React.Fragment>
    )
}