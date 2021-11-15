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
import UserProfile from "../pages/UserProfile";
import ChatTest from "../components/ChatTest";
import Post from "../pages/Post";

import AddFriend from "../components/AddFriend";

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
      {/* <Header /> */}
      <Switch>
        <Route exact path={"/"} component={Home} />
        <PublicRoute path={"/join"} component={Join} />
        <PrivateRouter path={"/mypage"} component={MyPage} />
        <PrivateRouter path={"/posts"} component={Post} />

        <PrivateRouter path={"/users/:id"} component={UserProfile} />
        <PrivateRouter path={"/users"} component={Users} />
        
        <PrivateRouter path={"/chat/:roomId"} component={ChatRoom} />
        <PrivateRouter path={"/chat"} component={Chat} />
        <PrivateRouter path={"/chatTest"} component={ChatTest} />
        
        <PrivateRouter path={"/find/:nickname"} component={AddFriend} />

        <Redirect to="/" />
      </Switch>
      {/* <Footer /> */}
      <BottomNav />
    </Suspense>
  );
};

export default Router;
