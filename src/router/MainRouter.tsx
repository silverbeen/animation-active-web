import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
        <Route path="/" component={Main} exact={true} />
        <Route path="/rotation" component={Rotation} exact={true} />
        <Route path="/mouse" component={Mouse} exact={true} />
        <Route path="/dispersion" component={Dispersion} exact={true} />
        <Route path="/sign-in" component={SingIn} exact={true} />
        <Route path="/sign-up" component={SignUp} exact={true} />
      </Switch>
    </BrowserRouter>
  );
}

export default MainRouter;
