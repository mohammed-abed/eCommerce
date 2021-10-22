import React from "react";
import { Route } from "react-router";
// import { lazy } from "react";
import Specification from "../../Components/Specification/Specification";
import { HomePage } from "../../Screens/Gust/HomePage/HomePage";
import Product from "../../Screens/Gust/product/Product";
import { Search } from "../../Screens/Gust/product/Search";
import { TopRateProduct } from "../../Screens/Gust/product/TopRateProduct";
import SoppingCarts from "../../Screens/User/Cart/SoppingCarts";
// key from 1 to 99
// const HomePage = lazy(() => import("../../Screens/Gust/HomePage/HomePage"));
// const Specification = lazy(() => import("../../Components/Specification/Specification"));
// const SoppingCarts = lazy(() => import("../../Screens/User/Cart/SoppingCarts"));
// const TopRateProduct = lazy(() => import("../../Screens/Gust/product/TopRateProduct"));
// const Product = lazy(() => import("../../Screens/Gust/product/Product"));
// const Search = lazy(() => import("../../Screens/Gust/product/Search"));
function GuestRouter(props) {
  return [
    <Route key={1} exact={true} path={"/"} component={HomePage} />,
    <Route
      key={2}
      exact={true}
      path={"/product/:id"}
      component={Specification}
    />,
    <Route
      key={3}
      exact={true}
      path={"/soppingCarts"}
      component={SoppingCarts}
    />,
    <Route key={4} exact={true} path={"/product"} component={Product} />,
    <Route
      key={5}
      exact={true}
      path={"/topRateProduct"}
      component={TopRateProduct}
    />,
    <Route key={6} path={"/search"} exact={true} component={Search} />,

  ];
}

export default GuestRouter;
