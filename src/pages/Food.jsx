import React from "react";
import { useParams } from "react-router-dom";
import mealList from "../utils/mealList";
import { Dashboard } from "../pages";
import FoodWrapper from "../wrappers/FoodWrapper";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseCount,
  decreaseCount,
  saveToCart,
} from "../features/cart/cartSlice";
import { FaTimes } from "react-icons/fa";
import { toggleFoodSidebar } from "../features/navbar/navbarSlice";
import { setCartStorageItem } from "../utils/localStorageData";

const Food = () => {
  const { totalCount } = useSelector((store) => store.cart);
  const { isFoodSidebarOpen } = useSelector((store) => store.navbar);
  const dispatch = useDispatch();
  const { foodId } = useParams();
  const food = mealList.find((meal) => meal.id == foodId);
  const { id, title, image, price, info, time, piece } = food;

  const addFoodToCart = () => {
    dispatch(toggleFoodSidebar());
    const cart = {
      cartImage: image,
      cartTitle: title,
      quantity: totalCount,
      unitPrice: price,
      subTotal: totalCount * price,
    };
    dispatch(saveToCart(cart));
    setCartStorageItem(cart);
  };

  return (
    <FoodWrapper>
      <Dashboard />
      <div className={isFoodSidebarOpen ? "clr" : null}>
        <div
          className={isFoodSidebarOpen ? "single-food show" : "single-food"}
          key={id}
        >
          <button
            className="close"
            onClick={() => dispatch(toggleFoodSidebar())}
          >
            <FaTimes />
          </button>
          <img src={image} alt="" className="food-img" />
          <h3 className="food-title">{title}</h3>
          <p className="food-info">{info}</p>
          <div className="food-details">
            <p>NGN {price}</p>
            <p>{time}</p>
            <p>{piece}</p>
          </div>
          <div className="cart-count">
            <div className="btn-container">
              <button
                onClick={() =>
                  totalCount > 1 ? dispatch(decreaseCount()) : null
                }
              >
                -
              </button>
              <h3>{totalCount}</h3>
              <button onClick={() => dispatch(increaseCount())}>+</button>
            </div>
            <button className="cart-btn" onClick={addFoodToCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </FoodWrapper>
  );
};

export default Food;
