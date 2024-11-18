import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { apiClient } from "../utils/apiWrapper";
import { useLocalCartCount } from "../context/LocalCartCount";
import { ToastContainer, toast } from 'react-toastify';

export const CartButton = ({ productId, quantity, classes, icon, setQuantity, children, productName }) => {
    const { triggerUpdateCart } = useCart();
    const { totalCartItems, incrementCartItems } = useLocalCartCount();
    const [loader, setLoader] = useState(false);
    const notify = (text) => {
        toast.dismiss();
        toast(<span className="line-clamp-2">{`${text} has been added to your cart`}</span>)
    };

    const handlerSubmit = async () => {
        const authToken = localStorage.getItem("authToken");
        setLoader(true)
        if (authToken) {
            try {
                setLoader(true);
                const response = await apiClient.post(`/cart`, {
                    "product_id": productId,
                    "quantity": quantity
                });
                setLoader(false)
                setQuantity ? setQuantity(1) : console.log();
                triggerUpdateCart();
                notify(productName)

            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoader(false);
            }
        }
        else {
            setTimeout(() => {
                setLoader(false);
            }, 500)
            let cartItems = localStorage.getItem("CartItems");
            let tempObj = {
                productId: productId,
                quantity: quantity
            }
            if (cartItems) {
                let itemsArray = JSON.parse(cartItems);
                itemsArray.push(tempObj);
                localStorage.setItem("CartItems", JSON.stringify(itemsArray));
            } else {
                localStorage.setItem("CartItems", JSON.stringify([tempObj]));
            }
            incrementCartItems(quantity)
            triggerUpdateCart();
            notify(productName)
            setQuantity ? setQuantity(1) : console.log()
        }
    }
    return (
        <React.Fragment>
            {!icon ? (
                <button className={`${classes ? classes : "text-[#F9FAFC] bg-primary px-4 py-2  rounded-md max-w-32 mx-auto  font-semibold"}`}
                    style={{ opacity: `${loader ? "0.5" : ""}` }}
                    onClick={() => handlerSubmit()}
                    disabled={loader}
                >Add to Cart </button>
            ) : <button
                className={`${classes ? classes : "flex items-center justify-center bg-[#DEF9EC] p-[10px] w-full px-4 rounded-[4px] ml-2 mt-2 group-hover:bg-primary transition-all duration-500"} `}
                style={{ opacity: `${loader ? "0.5" : "1"}` }}
                disabled={loader}
                onClick={() => handlerSubmit()}
            >{children}
            </button>}
        </React.Fragment>
    )
}
