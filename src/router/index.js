import React, { Suspense, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";

import { GET_ME_REQUEST } from "../reducers/user";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Join from "../pages/Join";
import PublicRoute from "./publicRoute";
import PrivateRouter from "./privateRoute";
import BottomNav from "../components/BottomNav";
import Users from "../pages/Users";
import MyPage from "../pages/MyPage";
import Chat from "../pages/Chat";
import ChatRoom from "../components/ChatRoom";

const Router = () => {
  const dispatch = useDispatch();
  const [cookies] = useCookies(["Authorization"]);

  useEffect(() => {
    if (cookies.Authorization) {
      dispatch({
        type: GET_ME_REQUEST,
      });
    }
  }, [cookies, dispatch]);

  return (
    <Suspense>
      <Header />
      <Switch>
        <Route exact path={"/"} component={Home} />

        <PublicRoute path={"/join"} component={Join} />
        <PrivateRouter path={"/users"} component={Users} />
        <PrivateRouter path={"/mypage"} component={MyPage} />
        <PrivateRouter path={"/chat/:roomId"} component={ChatRoom} />
        <PrivateRouter path={"/chat"} component={Chat} />
        <Redirect to="/" />
      </Switch>
      <Footer />
      <BottomNav />
    </Suspense>
  );
};

export default Router;
