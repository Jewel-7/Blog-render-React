import { Component } from "react";
import Home from "../pages/Home";
import Blog from "../pages/Blog";

import { BrowserRouter, Route, Switch } from "react-router-dom";
class Render extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blogs/:id" exact component={Blog} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Render;
