import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../../components/Header";
import Loader from "../../components/Loader/Loader";
import styles from "./Layout.module.scss";

// wrapper for everything, add things to be common accross all pages.

const Layout = ({ outlet }) => {
  const location = useLocation();

  const isHome = location.pathname === "/";
  return (
    <>
      {/* add other elements such as navigation and footer */}
      <Header />
      <main>
        <Suspense fallback={<Loader />}>{outlet ? outlet : <Outlet />}</Suspense>
      </main>
    </>
  );
};

export default Layout;
