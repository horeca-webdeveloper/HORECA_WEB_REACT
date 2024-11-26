import React, { useState } from "react";
import { apiClient } from "../../utils/apiWrapper";
import { notify } from "../../utils/notify";
import { useCart } from "../../context/CartContext";


export const DeleteCartButton = ({ product, setFetchCall, fetchCall, setCartSummaryFlag, cartSummaryFlag, temp, setTempCartItems }) => {

    const [deleteCartLoader, setDeleteCartLoader] = useState(false);
    const { triggerUpdateCart, updateTempCart } = useCart();

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
    const handlerRemoveItemsFromCartTemp = async (id) => {
        const products = await JSON.parse(localStorage.getItem('CartItems'));
        const updateProduct = products.filter((item) => item.product_id != id);
        localStorage.setItem('CartItems', JSON.stringify(updateProduct));
        localStorage.setItem('TotalCartItems', updateProduct.length);
        updateTempCart(updateProduct.length);
        setTempCartItems(updateProduct);

    }
const saveForLater=async(prod)=>{
    handlerRemoveItemsFromCartTemp(prod.product_id);
      let saveForLaterItems = localStorage.getItem("SaveForLater");
            let tempObj =  prod;
            if (saveForLaterItems) {
                let itemsArray = JSON.parse(saveForLaterItems);
                let itemExists = itemsArray.findIndex(item => item.product_id === prod.product_id);
                if (itemExists == -1) {
                    itemsArray.push(tempObj);  
                } 
                localStorage.setItem("SaveForLater", JSON.stringify(itemsArray));
            } else {
                localStorage.setItem("SaveForLater", JSON.stringify([tempObj]));
                
            }
}


    return (
        <>
            <button className="text-primary text-xs cursor-pointer" onClick={()=>saveForLater(product)}>Save For Later</button>
            <span className="mx-3 text-[#E2E8F0]">|</span>
            {temp ? <button disabled={deleteCartLoader} className={`text-primary text-xs  ${deleteCartLoader ? "" : "cursor-pointer"}`} onClick={() => handlerRemoveItemsFromCartTemp(product.product_id)}>{deleteCartLoader ? "Deleting" : "Delete"}</button> : <button disabled={deleteCartLoader} className={`text-primary text-xs  ${deleteCartLoader ? "" : "cursor-pointer"}`} onClick={() => handlerRemoveItemsFromCart(product)}>{deleteCartLoader ? "Deleting" : "Delete"}</button>}
        </>





    )
}