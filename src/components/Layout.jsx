import {Outlet} from "react-router-dom";
import Navigation from "./Navigation";
import {Suspense} from "react";
import Loading from "./Loading";

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Layout;
