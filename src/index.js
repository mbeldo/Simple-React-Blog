import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import promise from "redux-promise";
import "./index.css";
//Import components
import PostIndex from "./components/post_index";
import PostNew from "./components/post_new";
import reducers from "./reducers";
import PostShow from "./components/post_show";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router basename="">
      <Switch>
        <Route path="/posts/new" component={PostNew} />
        <Route path="/posts/:id" component={PostShow} />
        <Route path="/" component={PostIndex} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
