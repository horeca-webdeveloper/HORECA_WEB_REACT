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
    const { triggerUpdateCart, updateTempCart } = useCart();
    const { incrementCartItems } = useLocalCartCount();
    const [loader, setLoader] = useState(false)
    const [activeTab, setActiveTab] = useState('saved');
    const [cartItems, setCartItems] = useState([]);
    const [tempCartItems, setTempCartItems] = useState(JSON.parse(localStorage.getItem('CartItems')));
    const [saveForLaterTemp, setTempSaveForLater] = useState(JSON.parse(localStorage.getItem('SaveForLater')));
    const [listOfStore, setListOfStore] = useState([]);
    const [fetchCall, setFetchCall] = useState(false);
    const [cartSummaryFlag, setCartSummaryFlag] = useState(false);
    const [sameDeliveryTime, setSameDeliveryTime] = useState(false);
    const [maxDeliveryDate, setMaxDeliveryDate] = useState(0)
    const [removeItemsLoader, setRemoveItemsLoader] = useState(false);
    const [discountPercent, setDiscountPercent] = useState(0)
    const [couponCodeValue, setCouponCodeValue] = useState("");
    const [couponError, setCouponError] = useState("")



    const getDeliveryDate = (days) => {
        // Ensure the input is a valid number. If invalid, default to 5.
        days = isNaN(Number(days)) ? 5 : Number(days);
    
        // Calculate the future date by adding the number of days to today
        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + days);
    
        // Get the full day of the week (e.g., "Sunday")
        const dayOfWeek = futureDate.toLocaleString('en-US', { weekday: 'long' });
    
        // Get the day of the month and the month name
        const day = futureDate.getDate();
        const month = futureDate.toLocaleString('en-US', { month: 'long' });
    
        // Return the formatted date as "DayOfWeek, Day Month"
        return `${dayOfWeek}, ${day} ${month}`;
    };
    const fetchingCart = async () => {
        setLoader(true)
        try {
            const response = await apiClient.get('/cart');
            setCartItems(response.data.data);
            let temp = [];
            response.data.data.forEach((prod) => {
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



    const handlerSameDeliveryDate = (e) => {
        setSameDeliveryTime(e.target.checked)
        let maxDeliveryDates;
        if (e.target.checked) {
            if (cartItems.length > 0) {
                cartItems.forEach((item) => {
                    maxDeliveryDates = maxDeliveryDate > Number(item.product.delivery_days) ? maxDeliveryDate : Number(item.product.delivery_days)
                })
            } else if (tempCartItems.length > 0) {
                tempCartItems.forEach((item) => {
                    maxDeliveryDates = maxDeliveryDate > Number(item.delivery_days) ? maxDeliveryDate : Number(item.delivery_days)
                })
            }


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
            setListOfStore([]);
            setCouponError("")

        } catch (error) {
            console.error('Error:', error);
        } finally {
            setRemoveItemsLoader(false)
        }
    }
    //temporary cart
    const handlerRemoveAllItemsFromCartTemp = async () => {
        setRemoveItemsLoader(true)
        localStorage.removeItem('CartItems');
        localStorage.removeItem('TotalCartItems');
        setTempCartItems(0);
        updateTempCart(0);
        setListOfStore([]);
        setRemoveItemsLoader(false)

    }
    const buyItAgain=async()=>{
        let savedItems= JSON.parse(localStorage.getItem('SaveForLater'))|| [];
        let cartItems= JSON.parse(localStorage.getItem('CartItems')) || [];
        cartItems = cartItems.concat(savedItems);
        localStorage.setItem('CartItems', JSON.stringify(cartItems));
        localStorage.removeItem('SaveForLater');
        incrementCartItems(savedItems.length);
        triggerUpdateCart();
    }

    useEffect(() => {
        fetchingCart();
    }, [fetchCall]);

    useEffect(() => {
        if (cartItems.length == 0) {

            let temp = [];
            if (tempCartItems && tempCartItems.length > 0) {
                tempCartItems.forEach((prod) => {
                    if (!temp.includes(prod.store_id)) {
                        temp.push(prod.store_id)
                    }
                })
                setListOfStore(temp)
            }
        }
    }, [cartItems, fetchCall]);

    useEffect(() => {
        if (sameDeliveryTime) {
            const deliveryDate = getDeliveryDate(maxDeliveryDate);
            localStorage.setItem('sameDeliveryDate', JSON.stringify({ sameDeliveryTime, deliveryDate }));
        } else {
            localStorage.removeItem('sameDeliveryDate');
        }
    }, [sameDeliveryTime]);

    useEffect(() => {
        setTempCartItems(JSON.parse(localStorage.getItem('CartItems')));
        setTempSaveForLater(JSON.parse(localStorage.getItem('SaveForLater')));
    }, [triggerUpdateCart])



    return (
        <React.Fragment>
            <Layout cartItems={cartItems} cartSummaryFlag={cartSummaryFlag} removeItemsLoader={removeItemsLoader}>
                <Breadcrumb items={firstBreadCrumb} classes={"mt-7"} />
                {/* show cart item */}
                {!!cartItems && cartItems.length > 0 ? <div className="border-[#E2E8F0] rounded-[10px] border-2 px-5 mt-5">
                    <div className="flex items-center mt-5">
                        <h3 className="font-semibold text-[28px] text-[#424242]">Shopping Cart</h3>
                        {cartItems ? <p className="text-[#64748B] text-base ml-2">({cartItems.length} Items)</p> : null}
                    </div>
                    {listOfStore && listOfStore.length && cartItems.length > 0 ? (
                        <div className="my-3 flex items-center justify-between">
                            <div className="flex items-center justify-between text-gray-700 mt-1">
                                <div className="flex items-center">
                                    <input type="checkbox" id="sameDelivery" value={sameDeliveryTime} onChange={(e) => handlerSameDeliveryDate(e)} className="cursor-pointer outline-none w-4 h-4  border-primary rounded accent-primary" />
                                    <label className="ml-2 text-sm" htmlFor="sameDelivery">I want all items together in one shipment without additional shipping cost.</label>
                                </div>
                            </div>
                            <button className={`text-gray-400 text-sm underline`} onClick={handlerRemoveAllItemsFromCart}>Remove All Items from Cart</button>
                        </div>
                    ) : null}
                    {listOfStore && listOfStore.length && cartItems.length > 0 ? listOfStore.map((store, index) => {
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
                                                        {/* <WishListButton product={prod} /> */}
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
                </div> :

                    //show temp cart items
                    <div className="border-[#E2E8F0] rounded-[10px] border-2 px-5 mt-5">
                        <div className="flex items-center mt-5">
                            <h3 className="font-semibold text-[28px] text-[#424242]">Shopping Cart</h3>
                            {tempCartItems && tempCartItems.length > 0 ? <p className="text-[#64748B] text-base ml-2">({tempCartItems.length} Items)</p> : null}
                        </div>
                        {listOfStore && listOfStore.length && tempCartItems.length > 0 ? (
                            <div className="my-3 flex items-center justify-between">
                                <div className="flex items-center justify-between text-gray-700 mt-1">
                                    <div className="flex items-center">
                                        <input type="checkbox" id="sameDelivery" value={sameDeliveryTime} onChange={(e) => handlerSameDeliveryDate(e)} className="cursor-pointer outline-none w-4 h-4  border-primary rounded accent-primary" />
                                        <label className="ml-2 text-sm" htmlFor="sameDelivery">I want all items together in one shipment</label>
                                    </div>
                                </div>
                                <button className={`text-gray-400 text-sm underline`} onClick={handlerRemoveAllItemsFromCartTemp}>Remove All Items from Cart</button>
                            </div>
                        ) : null}

                        {listOfStore && listOfStore.length && tempCartItems.length > 0 ? listOfStore.map((store, index) => {
                            const filteredItems = tempCartItems && tempCartItems.filter(item => item.store_id === listOfStore[index]);

                            return (
                                <>
                                    {filteredItems.length > 0 ? <div className="rounded-[10px]  bg-[#E2E8F04D] p-4 my-5">
                                        <h2 className="text-[#424242] font-semibold text-lg mb-4">Shipment {index + 1}</h2>
                                        {tempCartItems && tempCartItems.filter(item => item.store_id === listOfStore[index]).map((prod, index) => {
                                            return (
                                                <React.Fragment>
                                                    <div className={`flex flex-row items-center mb-8 relative "}`} key={index}>
                                                        <Link to={`/product/${prod.product_id}`}>
                                                            <img className="max-w-[130px]" src={"https://testhssite.com/storage/" + prod.image} alt={prod.name} />
                                                        </Link>
                                                        <div className="basis-1/2 ml-3" >
                                                            <Link to={`/product/${prod.product_id}`}>
                                                                <h3 className="text-[#030303] text-lg leading-5 ">{prod.name}</h3>
                                                                <p className="my-2 text-base font-semibold text-[#030303]"><span>{prod.currency_title}</span><span className="text-xl font-bold ml-2">{prod.original_price.toFixed(2)}</span><span className="text-[#B12704] ml-3">/ Each</span></p>
                                                            </Link>
                                                            <div>
                                                                <Counter product={prod} setCartSummaryFlag={setCartSummaryFlag} cartSummaryFlag={cartSummaryFlag} />
                                                                <span className="mx-3 text-[#E2E8F0]">|</span>
                                                                {/* <WishListButton product={prod} temp={true} /> */}

                                                                <DeleteCartButton product={prod} setTempCartItems={setTempCartItems} temp={true} />
                                                            </div>
                                                        </div>
                                                        <div className="basis-1/4 max-w-[250px] px-5">
                                                            <div className="flex  flex-col items-center mb-4">
                                                                <div className="flex items-start mt-4">
                                                                    <div className="flex flex-col ml-3" >
                                                                        <label className="text-base text-primary font-semibold">{maxDeliveryDate ? getDeliveryDate(maxDeliveryDate) : getDeliveryDate(prod.delivery_days)}</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className=" text-[#030303] text-lg font-semibold">
                                                            {prod.currency_title} {prod.original_price ? (prod.original_price * prod.quantity).toFixed(2) : (prod.original_price * prod.quantity).toFixed(2)}
                                                        </div>
                                                    </div>
                                                </React.Fragment>
                                            )
                                        })}
                                    </div> : null}

                                </>
                            )
                        }) : <div className="w-full  h-[300px] text-gray-400 flex items-center justify-center font-semibold mb-10">No Product Items Available</div>}
                    </div>


                }

                <div className="flex flex-col border-[#E2E8F0] rounded-[10px] border-2 px-5 mt-5 pt-5">
                    <div className="flex items-center ml-5">
                        <button
                            className={`text-[#64748B] font-semibold text-lg px-4 pl-0 py-2  transition-all border-b-2 border-b-transparent ${activeTab === 'saved' ? ' border-b-primary' : ''}`}
                            onClick={() => setActiveTab('saved')}
                        >
                            Saved for Later ({saveForLaterTemp && saveForLaterTemp.length?saveForLaterTemp.length:0} Items )
                        </button>
                        <button
                            className={`text-[#64748B] font-semibold text-lg px-4 py-2 transition-all border-b-2 border-b-transparent ${activeTab === 'buy' ? ' border-b-primary' : ''}`}
                            onClick={buyItAgain}
                        >
                            Buy it Again
                        </button>


                    </div>

                    {saveForLaterTemp && saveForLaterTemp.length <= 0 ? 
                     <div className={`grid sm:grid-cols-3 grid-cols-3 gap-5`}>
                    
                    No Product items available</div> : ''}
                    <div className={`grid sm:grid-cols-3 grid-cols-3 gap-5`}>
                       
                        {
                            saveForLaterTemp && saveForLaterTemp.map((items, index) => {
                                return (
                                    <ProductCard
                                        key={index}
                                        classes="col-span-1 mt-1 "
                                        product={items}
                                        removeItem={true}
                                        setTempSaveForLater={setTempSaveForLater}
                                    />
                                );
                            })
                        }
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