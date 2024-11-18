import React, { useState } from "react";
import { apiClient } from "../../utils/apiWrapper";
import { notify } from "../../utils/notify";
import { useCart } from "../../context/CartContext";

export const DeleteCartButton = ({ product, setFetchCall, fetchCall, setCartSummaryFlag, cartSummaryFlag }) => {

    const [deleteCartLoader, setDeleteCartLoader] = useState(false);
    const { triggerUpdateCart } = useCart();

    const handlerRemoveItemsFromCart = async () => {
        setDeleteCartLoader(true)
        const authToken = localStorage.getItem("authToken");
        if (authToken) {
            try {
                const response = await apiClient.delete(`/cart/${product.product_id}`, {
                    params: { product_id: product.product_id }
                });
                triggerUpdateCart();
                setFetchCall(!fetchCall);
                setCartSummaryFlag(!cartSummaryFlag);
                notify(product.product.name, " has been removed from cart.")
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setDeleteCartLoader(false)
            }
        }
    }

    return (
        <button disabled={deleteCartLoader} className={`text-primary text-xs  ${deleteCartLoader ? "" : "cursor-pointer"}`} onClick={() => handlerRemoveItemsFromCart(product)}>{deleteCartLoader ? "Deleting" : "Delete"}</button>
    )
}