import React from "react";
import { getUserStorage } from "../utils/localStorageData";
import DashboardMainWrapper from "../wrappers/DashboardMain";
import mealList from "../utils/mealList";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  toggleFoodSidebar,
  toggleAddFood,
} from "../features/navbar/navbarSlice";
import { saveToCart } from "../features/cart/cartSlice";
import { useSelector } from "react-redux";
import { setCartStorageItem } from "../utils/localStorageData";

const Dashboard = () => {
  const loggedUser = getUserStorage();
  const { totalCount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <DashboardMainWrapper>
      <div className="dashboard-title">
        <h3>Good day, {loggedUser?.name}!</h3>
        <p>What delicious meal are you craving for today?</p>
      </div>
      <div className="menu-section">
        <div className="menu">
          {mealList.map((meal) => {
            const { id, title, image, mealInfo, price } = meal;
            return (
              <Link to={`/${id}`} onClick={() => dispatch(toggleFoodSidebar())}>
                <article className="menu-info" key={id}>
                  <div className="meal-container">
                    <img src={image} alt="" className="meal-image" />
                  </div>
                  <h3 className="title">{title}</h3>
                  <p className="info">{mealInfo}</p>
                  <div className="price-info">
                    <p className="price">N {price}</p>
                    <button
                      className="cart-btn"
                      onClick={() => {
                        const cart = {
                          cartImage: image,
                          cartTitle: title,
                          quantity: totalCount,
                          unitPrice: price,
                          subTotal: totalCount * price,
                        };
                        dispatch(saveToCart(cart));
                        dispatch(toggleAddFood());
                        setCartStorageItem(cart);
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </DashboardMainWrapper>
  );
};

export default Dashboard;
