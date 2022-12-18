import React from "react";
import { Outlet } from "react-router-dom";
import {
  DashboardSidebar,
  SmallDashboardSidebar,
  DashboardNav,
} from "../components";
import SharedLayoutWrapper from "../wrappers/SharedLayout";

const SharedLayout = () => {
  return (
    <SharedLayoutWrapper>
      <main className="dashboard">
        <DashboardSidebar />
        <SmallDashboardSidebar />
        <div>
          <section className="dashboard-page">
            <DashboardNav />
            <Outlet />
          </section>
        </div>
      </main>
    </SharedLayoutWrapper>
  );
};

export default SharedLayout;
