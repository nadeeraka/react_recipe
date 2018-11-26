import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Sr from "./Sr";

import App from "../App";
const Routes = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={App} exact />
      <Route path="/recipe" component={Sr} />
    </div>
  </BrowserRouter>
);

export default Routes;
