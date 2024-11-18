import React, { useState } from "react";
import { useWishlist } from "../../context/WishListContext";
import { apiClient } from "../../utils/apiWrapper";
import { notify } from "../../utils/notify";

export const WishListButton = ({ product }) => {
    const [wishListLoader, setWishListLoader] = useState();
    const { triggerUpdateWishList } = useWishlist();


    const handlerRemoveWishlist = async (product) => {
        setWishListLoader(true);
        const authToken = localStorage.getItem("authToken");
        if (authToken) {
            try {
                const response = await apiClient.delete(`/wishlist/remove`, {
                    params: { product_id: product.id }
                });
                product.in_wishlist = false;
                triggerUpdateWishList()
                notify(product.name, response.data.message)
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setWishListLoader(false);
            }
        }
    }


    const handlerAddWishList = async (product) => {
        setWishListLoader(true);
        const authToken = localStorage.getItem("authToken");
        if (authToken) {
            try {
                const response = await apiClient.post(`/wishlist/add`, {
                    "product_id": product.id,
                });
                product.in_wishlist = true;
                triggerUpdateWishList();
                notify(product.name, response.data.message)

            } catch (error) {
                console.error('Error:', error);
            } finally {
                setWishListLoader(false);
            }
        }
    }

    return (
        <React.Fragment>
            {product.product.in_wishlist ? <button disabled={wishListLoader} className={`text-primary text-xs ${wishListLoader ? "" : "cursor-pointer "}`} onClick={() => handlerRemoveWishlist(product.product)}> {wishListLoader ? "Removing from Wishlist" : "Remove from Wishlist"}  </button> : <button disabled={wishListLoader} className={`text-primary text-xs ${wishListLoader ? "" : "cursor-pointer "}`} onClick={() => handlerAddWishList(product.product)}>{wishListLoader ? "Adding to Wishlist" : "Add to Wishlist"} </button>}
        </React.Fragment>
    )
}