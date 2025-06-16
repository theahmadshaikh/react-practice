import { configureStore } from "@reduxjs/toolkit";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import cartReducer from "./cartSlice";
import cartDrawerReducer from "./cartDrawerSlice";
const appStore = configureStore({
 reducer:{
    cart:cartReducer,
    cartDrawer:cartDrawerReducer,
 }
});
export default appStore;