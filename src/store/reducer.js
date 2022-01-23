import { ADD_TO_CART, INCREASE_ITEM, DECREASE_ITEM, REMOVE_ITEM, COMPLETE_PURCHASE, RESET_SHIPPING_INFO } from "./actions";

const initialState = {
   cart: [],
   receipt: [],
   shippingInfo: {
     firstName: '',
     lastName: '',
     mail: '',
     phone: '',
     street: '',
     zipCode: '',
     city: '',
   }
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART: {
        const existingItem = state.cart.find(item => item.id === action.payload.id);
        if (existingItem) {
          const updatedItem = {...existingItem, quantity: existingItem.quantity + action.payload.quantity};
          const cartWithoutExistingItem = state.cart.filter(item => item.id !== existingItem.id);
          return { ...state, cart: [...cartWithoutExistingItem, updatedItem].sort((a, b) => a.id.localeCompare(b.id))};
        }
        return { ...state, cart: [...state.cart, action.payload]};
      }

      case INCREASE_ITEM: {
        const existingItem = state.cart.find(item => item.id === action.payload);
        const updatedItem = {...existingItem, quantity: existingItem.quantity + 1};
        const cartWithoutExistingItem = state.cart.filter(item => item.id !== existingItem.id);
        return { ...state, cart: [...cartWithoutExistingItem, updatedItem].sort((a, b) => a.id.localeCompare(b.id))};
      }

      case DECREASE_ITEM: {
        const existingItem = state.cart.find(item => item.id === action.payload);
        const updatedItem = {...existingItem, quantity: existingItem.quantity -1};
        const cartWithoutExistingItem = state.cart.filter(item => item.id !== existingItem.id);
        return { ...state, cart: [...cartWithoutExistingItem, updatedItem].sort((a, b) => a.id.localeCompare(b.id))};
      }

      case REMOVE_ITEM: {
        const existingItem = state.cart.find(item => item.id === action.payload);
        return { ...state, cart: state.cart.filter(item => item.id !== existingItem.id)};
      }

      case COMPLETE_PURCHASE:
        return {
          ...state,
          cart: [],
          receipt: state.cart,
          shippingInfo: action.payload,
        };

        case RESET_SHIPPING_INFO:
          return {
            ...state,
            receipt: [],
            shippingInfo: {},
          };
        
      default:
        return state;
      }
  }
  
  export default cartReducer;