import React from "react";
import {
  FaHome,
  FaPeopleCarry,
  FaCalendar,
  FaBookmark,
  FaTimes,
  FaSignOutAlt,
} from "react-icons/fa";
import logo from "../images/DashboadLogo.png";
import { Link } from "react-router-dom";
import SmallDashboardSidebarWrapper from "../wrappers/SmallDashboardSidebarWrapper";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../features/navbar/navbarSlice";
import { logoutUser } from "../features/user/userSlice";

const SmallDashboardSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.navbar);
  const dispatch = useDispatch();
  return (
    <SmallDashboardSidebarWrapper>
      {/* add class show to div later */}
      <section
        className={isSidebarOpen ? "small-sidebar show" : "small-sidebar"}
      >
        <button
          className="dashboard-close-btn"
          onClick={() => dispatch(toggleSidebar())}
        >
          <FaTimes />
        </button>
        <img src={logo} alt="" className="nav-logo" />
        <ul className="dashboard-links">
          <Link
            className="dashboard-link"
            to="/"
            onClick={() => dispatch(toggleSidebar())}
          >
            <FaHome size={20} />
            <h3>Dashboard</h3>
          </Link>

          <Link
            className="dashboard-link"
            to="/#"
            onClick={() => dispatch(toggleSidebar())}
          >
            <FaPeopleCarry size={20} />
            <h3>Your Profile</h3>
          </Link>

          <Link
            className="dashboard-link "
            to="/#"
            onClick={() => dispatch(toggleSidebar())}
          >
            <FaCalendar size={20} />
            <h3>Order</h3>
          </Link>

          <Link
            className="dashboard-link"
            to="/#"
            onClick={() => dispatch(toggleSidebar())}
          >
            <FaBookmark size={20} />
            <h3>Your Cart</h3>
          </Link>

          <Link
            className="dashboard-link"
            to="/landing"
            onClick={() => dispatch(logoutUser())}
          >
            <FaSignOutAlt size={20} />
            <h3>Log Out</h3>
          </Link>
        </ul>
      </section>
    </SmallDashboardSidebarWrapper>
  );
};

export default SmallDashboardSidebar;
