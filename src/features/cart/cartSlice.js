import { createSlice } from "@reduxjs/toolkit";
// import mealList from "../../utils/mealList";
import { toast } from "react-toastify";
import { getCartStorageItem } from "../../utils/localStorageData";

const initialState = {
  carts: getCartStorageItem(),
  totalCount: 1,
  cartImage: "",
  cartTitle: "",
  quantity: 0,
  unitPrice: 0,
  subTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseCount: (state) => {
      state.totalCount = state.totalCount + 1;
    },
    decreaseCount: (state) => {
      state.totalCount = state.totalCount - 1;
    },
    saveToCart: (state) => {
      toast.success("Added To Cart Successfully");
      state.totalCount = 1;
    },
    checkWork: () => {
      return {
        totalCount: getCartStorageItem()?.totalCount,
        cartImage: getCartStorageItem()?.cartImage,
        cartTitle: getCartStorageItem()?.cartTitle,
      };
    },
  },
});

// console.log(state);

export const { increaseCount, decreaseCount, saveToCart, checkWork } =
  cartSlice.actions;

export default cartSlice.reducer;
