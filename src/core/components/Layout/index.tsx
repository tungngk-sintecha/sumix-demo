import { FC, Fragment, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const noLayoutRoutes = ["/login", "/register", "/forgot-password", "/otp"];

  const isNoLayoutRoute = noLayoutRoutes.includes(location.pathname);

  return (
    <Fragment>
      {!isNoLayoutRoute && <Header />}
      <main className="">{children}</main>
      {!isNoLayoutRoute && <Footer />}
    </Fragment>
  );
};

export default Layout;
