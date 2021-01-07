import { Component } from "react";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import { BrowserRouter, Route, Switch } from "react-router-dom";
class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blogs/:id" exact component={Profile} />; }} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
