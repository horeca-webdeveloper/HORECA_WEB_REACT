import React, { useState, useEffect } from "react";

import { Link, useLocation,useNavigate } from "react-router-dom";
import { notify } from "../../utils/notify.js";
import { useLocalCartCount } from "../../context/LocalCartCount";
import { DeleteCartButton } from "../../shared/CheckoutPage/DeleteCartButton";
import { Counter } from "../../shared/CheckoutPage/Counter.jsx";
import { useCart } from "../../context/CartContext";
import { apiClient } from "../../utils/apiWrapper.js";
import { Layout } from "./Layout.jsx";
import { FaArrowRightLong } from "react-icons/fa6";
import Popup from "../ProfileRegistration/Addresses/Components/Popup.jsx";

export const ReviewCheckout = () => {
    const authToken = localStorage.getItem("authToken");
    const { triggerUpdateCart, updateTempCart } = useCart();
    const location = useLocation();
    const navigate=useNavigate();
    const { currencyTitle, savings, shippingRate, tax, totalAmount } = location.state || {};
 
    const [popupHeading, setPopupHeading] = useState("Shipping Information");
    const [showPopup, setShowPopup] = useState(false);
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
    const [couponError, setCouponError] = useState("");
    const [getData, setData] = useState('');
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

    const handlePayments = async (data) => {
     const userInfo=   JSON.parse(localStorage.getItem('userProfile'));

        const datas = {
          "amount": data.amount,
          // "currency": data.currency.toUpperCase(),
             "currency": "AED",
          "description": userInfo.name,
          "customer_name": userInfo.name,
          "customer_email": userInfo.email
        };

        try {
          setLoader(true);
          const response = await apiClient.post(`/create-payment`, datas);
          setData(response.data);
        } catch (error) {
          console.error('Error:', error);
        } finally {
          setLoader(false);
        }
      }

    const confirmAndPay=()=>{
        if(authToken){
            const data={
                "amount":totalAmount,
                "currency":currencyTitle,
                
            }
             handlePayments(data);
        }else{
            setShowPopup(true);
        }
            
    }

    const handleClick = () => {
        // Navigate to another route
        navigate('/checkout');
      };
      
      useEffect(()=>{
        if(getData.status=="success" && getData.redirect_url){
          window.location.href = getData.redirect_url;
        }
    },[getData]);
    return (
        <React.Fragment>
            <Layout cartItems={cartItems} tempCartItems={tempCartItems} cartSummaryFlag={cartSummaryFlag} removeItemsLoader={removeItemsLoader} listOfStore={listOfStore} confirmAndPayFn={confirmAndPay} >
                <div className="border-2 rounded-[10px] border-[#E2E8F0] mt-[80px]">
                    <div className="flex items-center justify-between bg-[#E2E8F0] px-8 py-3">
                        <h2 className="text-[#424242] text-[28px] font-semibold">Your Address</h2>
                        <span className="text-primary text-lg font-semibold">Edit</span>
                    </div>

                    <div className="px-8 pb-8">
                        <div className="flex items-center justify-between py-4 border-b-[2px] border-b-[#E2E8F0]">
                            <h3 className="text-[#212121] text-lg font-semibold">Shipping Address</h3>
                            <p className="text-[#64748B] text-sm font-semibold">Shipping to more than one address?</p>
                        </div>

                        <div className="flex items-center justify-start py-4 border border-primary rounded-[4px] bg-[#DEF9EC] px-4">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4" />
                            <span className="ml-3 text-[#212121] text-sm"><span className="font-semibold">Mr. Noman Peer</span> Showroom 01 - Building No 9-1 19 Street - Al Quoz - Al Quoz Industrial Area 3 - Dubai - United Arab Emirates <span className="underline text-primary text-base" >Edit</span></span>
                        </div>
                        <span className="mt-3 block text-[#64748B] text-base">+ Add a new Address</span>

                    </div>
                </div>
                {/* show cart item */}
                {!!cartItems && cartItems.length > 0 ?
                    <div className="border-[#E2E8F0] rounded-[10px] border-2 px-5 mt-5">
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
                    <div className="border-2 rounded-[10px] border-[#E2E8F0] mt-6">

                        <div className="flex items-center justify-between bg-[#E2E8F0] px-8 py-3">
                            <h2 className="text-[#424242] text-[28px] font-semibold">Review products and shipping</h2>
                            <span className="text-primary text-lg font-semibold">{!!tempCartItems && tempCartItems.length} items</span>
                        </div>

                        {listOfStore && listOfStore.length && tempCartItems.length > 0 ? listOfStore.map((store, index) => {
                            const filteredItems = tempCartItems && tempCartItems.filter(item => item.store_id === listOfStore[index]);
                            return (
                                <>
                                    {filteredItems.length > 0 ?
                                        <div className="px-8  ">
                                            <div className="bg-[#E2E8F04D] rounded-[10px] px-4 pt-2 pb-4 mt-5">
                                                <div className="flex items-center justify-between  my-2">
                                                    <span className="text-[#424242] text-lg font-semibold">Shipment {index + 1}</span>
                                                    <span className="text-primary text-lg font-semibold cursor-pointer" onClick={handleClick}>Edit</span>
                                                </div>


                                                {tempCartItems && tempCartItems.filter(item => item.store_id === listOfStore[index]).map((prod, index) => {
                                                    return (
                                                        <React.Fragment>
                                                            <div className="h-[1px] w-full bg-[#E2E8F0]"></div>
                                                            <div className="mt-2" key={index}>
                                                                <p className="text-[#B12704] text-lg font-semibold">{getDeliveryDate(prod.delivery_days)}</p>
                                                                <div className="flex mt-3">
                                                                    <Link to={`/product/${prod.product_id}`}>


                                                                        <img className="max-w-[130px]" src={"https://testhssite.com/storage/" + prod.image} alt={prod.name} />
                                                                    </Link>
                                                                    <div className=" ml-4">
                                                                        <p className="text-[#030303] text-lg max-w-[500px] ">{prod.name}</p>
                                                                        <h2 className="font-semibold text-xl text-[#030303] my-3">Quantity : {prod.quantity}</h2>
                                                                        <p className="text-[#030303] font-bold"><span className="text-base font-semibold">{prod.currency_title}</span> {prod.original_price.toFixed(2)}<span className="text-xl font-semibold">.00</span></p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </React.Fragment>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        : null}
                                </>
                            )
                        }) : <div className="w-full  h-[300px] text-gray-400 flex items-center justify-center font-semibold mb-10">No Product Items Available</div>}
                        
                        
                       
                    </div>
                }
                 <div className="mx-8 my-5 px-8 border-2 border-[#E2E8F0] rounded-[10px] flex items-center justify-between py-5">
                            <div className="flex justify-between flex-col">
                                <h4 className="text-[#B12704] text-xl font-bold">Order Total : {currencyTitle && currencyTitle} {totalAmount && totalAmount.toFixed(2)}</h4>
                                <p className="text-[#64748B] text-xs">By placing your order, you agree to Horeca store <span className="font-semibold">Privacy Notice</span>  and <span className="font-semibold">Conditions Of Use.</span></p>
                            </div>
                            <button className="bg-primary text-white flex items-center justify-center py-2 px-3 font-semibold text-base min-w-[300px] rounded-[4px] " onClick={confirmAndPay}><span className="mr-2">Confirm & Pay</span> <FaArrowRightLong /></button>
                        </div>
                <div>
                {showPopup?<Popup setShowPopup={setShowPopup} popupHeading={popupHeading} guestUser={true} amount={totalAmount} currency={currencyTitle}/>:''}
                </div>


            </Layout>
        </React.Fragment>
    )
}