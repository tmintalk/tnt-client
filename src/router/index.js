import React, { Suspense, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";

import { GET_ME_REQUEST } from '../reducers/user';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Join from "../pages/Join";

const Router = () => {
  const dispatch = useDispatch();
  const [cookies, ] = useCookies(['Authorization']);

  useEffect(() => {
    if (cookies.Authorization) {
      dispatch({
        type: GET_ME_REQUEST
      })
    }
  }, [cookies, dispatch]);

  return (
    <Suspense>
      <Header />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/join"} component={Join} />
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
