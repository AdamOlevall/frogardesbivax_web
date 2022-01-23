export const getNumberOfItemsInCart = (state) => state.cart.reduce((total, item) => total + item.quantity, 0);

export const getTotalCostForCart = (state) => state.cart.reduce((total, item) => total + item.quantity * Number(item.price), 0);

export const getTotalCostForReceipt= (state) => state.receipt.reduce((total, item) => total + item.quantity * Number(item.price), 0);