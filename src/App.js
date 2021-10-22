import { MainContainer, SpinnerContainer } from "./App.style";
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";
import AuthRouter from "./Router/AuthRouter/AuthRouter";
import UserRouter from "./Router/UserRouter/UserRouter";
import GuestRouter from "./Router/GuestRouter/GuestRouter";
import NotFound from "./Screens/Gust/HomePageNotFound/NotFound.jsx";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
import { Suspense } from "react";

export default function App() {
  const state = useSelector((state) => state);
  return (
    <MainContainer>
      <Suspense fallback={<SpinnerContainer/>}>
      <ErrorBoundary>
        <Navbar state={state}></Navbar>
        <Switch>
          {GuestRouter()}
          {state.userDetails.user._id ? UserRouter() : AuthRouter()}
          <Route key={60} path={"*"}>
            <NotFound />
          </Route>
        </Switch>
      </ErrorBoundary>
      </Suspense>
    </MainContainer>
  );
}
