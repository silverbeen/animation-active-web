import React from "react";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import {
  Rotation,
  Mouse,
  Dispersion,
  SingIn,
  SignUp,
  Main,
} from "../components/index";

function MainRouter() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/rotation" component={Rotation} exact />
        <Route path="/mouse" component={Mouse} exact />
        <Route path="/dispersion" component={Dispersion} exact />
        <Route path="/sign-in" component={SingIn} exact />
        <Route path="/sign-up" component={SignUp} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default MainRouter;
