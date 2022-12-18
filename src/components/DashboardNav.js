import React from "react";
import DashboardNavWrapper from "../wrappers/DashboardNavWrapper";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../features/navbar/navbarSlice";

const DashboardNav = () => {
  const dispatch = useDispatch();
  return (
    <DashboardNavWrapper>
      <button className="icon" onClick={() => dispatch(toggleSidebar())}>
        <AiOutlineMenu />
      </button>
    </DashboardNavWrapper>
  );
};

export default DashboardNav;
