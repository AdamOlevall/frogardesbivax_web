export const ADD_TO_CART = "add_to_cart";
export const DECREASE_ITEM = "increase_item";
export const INCREASE_ITEM = "decrease_item";
export const REMOVE_ITEM = "remove_item";
export const COMPLETE_PURCHASE = "complete_purchase";
export const RESET_SHIPPING_INFO = "reset_shipping_info";

export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item,
});

export const increaseItem = (id) => ({
    type: INCREASE_ITEM,
    payload: id,
});

export const decreaseItem = (id) => ({
    type: DECREASE_ITEM,
    payload: id,
});

export const removeItem = (id) => ({
    type: REMOVE_ITEM,
    payload: id,
});

export const completePurchase = (shippingInfo) => ({
    type: COMPLETE_PURCHASE,
    payload: shippingInfo,
});

export const resetShippingInfo = () => ({
    type: RESET_SHIPPING_INFO,
});
