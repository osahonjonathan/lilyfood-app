import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import navbarReducer from "../features/navbar/navbarSlice";
import passwordReducer from "../features/password/passwordSlice";
import userReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    securePass: passwordReducer,
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
