import { CART_SAVE_ADDRESS } from "./Formconstants";

export const saveShippingAddress = ( data ) => (dispatch) => {
    dispatch({ type: CART_SAVE_ADDRESS, payload: data });
    localStorage.setItem('shippingAddress', JSON.stringify(data));

};