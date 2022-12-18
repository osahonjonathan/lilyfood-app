import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
  isFoodSidebarOpen: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleFoodSidebar: (state) => {
      state.isFoodSidebarOpen = !state.isFoodSidebarOpen;
    },
    toggleAddFood: (state) => {
      state.isFoodSidebarOpen = true;
    },
  },
});

export const { toggleSidebar, toggleFoodSidebar, toggleAddFood } =
  navbarSlice.actions;

export default navbarSlice.reducer;
