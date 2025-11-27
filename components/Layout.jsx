import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="mb-16"></div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
