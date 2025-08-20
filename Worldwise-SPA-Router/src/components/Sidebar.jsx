import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Sidebar.module.css";
import AppNav from "./AppNav";
import Logo from "./Logo";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      {/* <p>List of Cities</p> */}
              {/* Nested Routes */}
      <Outlet />
              {/* Nested Routes */}


      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
};

export default Sidebar;
