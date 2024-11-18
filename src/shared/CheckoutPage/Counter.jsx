import React, { useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { apiClient } from "../../utils/apiWrapper";
import { useCart } from "../../context/CartContext";
import { notify } from "../../utils/notify";

export const Counter = ({ product, cartSummaryFlag, setCartSummaryFlag }) => {
    const [loader, setLoader] = useState(false)
    const authToken = localStorage.getItem("authToken");
    const { triggerUpdateCart, incrementCartItems } = useCart();

    const handlerIncrement = async () => {
        setLoader(true);
        product.quantity++;
        if (authToken) {
            try {
                const response = await apiClient.post(`/cart`, {
                    "product_id": product.product_id,
                    "quantity": 1
                });
                setLoader(false)
                notify("", "Item has been added to your cart.")
                triggerUpdateCart();
                setCartSummaryFlag(!cartSummaryFlag)

            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoader(false);
            }
        }
        else {
            setCartSummaryFlag(!cartSummaryFlag)
            setTimeout(() => {
                setLoader(false);
            }, 500)
            let cartItems = localStorage.getItem("CartItems");
            let tempObj = {
                "product_id": product.product_id,
                "quantity": 1
            }
            if (cartItems) {
                let itemsArray = JSON.parse(cartItems);
                itemsArray.push(tempObj);
                localStorage.setItem("CartItems", JSON.stringify(itemsArray));
            } else {
                localStorage.setItem("CartItems", JSON.stringify([tempObj]));
            }
            incrementCartItems(1)
            triggerUpdateCart();
        }
    }

    const handlerDecrement = async () => {
        setLoader(true);
        product.quantity--;
        if (authToken) {
            try {
                const response = await apiClient.put(`/cart/decrease`, {
                    "product_id": product.product_id,
                    "quantity": 1
                });
                setLoader(false)
                setCartSummaryFlag(!cartSummaryFlag)
                triggerUpdateCart();
                notify("", "has been removed from your cart.")

            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoader(false);
            }
        }
        else {
            setCartSummaryFlag(!cartSummaryFlag)
            setTimeout(() => {
                setLoader(false);
            }, 500)
            let cartItems = localStorage.getItem("CartItems");
            let tempObj = {
                "product_id": product.product_id,
                "quantity": 1
            }
            if (cartItems) {
                let itemsArray = JSON.parse(cartItems);
                itemsArray.push(tempObj);
                localStorage.setItem("CartItems", JSON.stringify(itemsArray));
            } else {
                localStorage.setItem("CartItems", JSON.stringify([tempObj]));
            }
            incrementCartItems(-1)
            triggerUpdateCart();
        }
    }
    return (
        <div className={`inline-flex  items-center rounded-[4px] border border-[#BCE3C9] relative z-[50] p-2 ${loader ? "" : "cursor-pointer "}`} style={{ opacity: `${loader ? "0.5" : "1"}` }}>
            <button onClick={() => handlerDecrement(product)} className={`${loader ? "" : "cursor-pointer "}`} disabled={loader}>
                <FiMinus size={16} className="text-gray-700" />
            </button>
            <span className='text-primary font-semibold text-base mx-2'>{product.quantity}</span>
            <button onClick={() => handlerIncrement(product)} className={`${loader ? "" : "cursor-pointer "}`} disabled={loader}>
                <FiPlus size={16} className="text-gray-700" />
            </button>
        </div>
    )
}