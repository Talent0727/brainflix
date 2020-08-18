import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import Navbar from "./components/Navbar";
import VideoUpload from "./Pages/VideoUpload";
import NotFound from "./Pages/NotFound";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Navbar />
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/videos" component={App} exact />
        <Route path="/videos/:id" component={App} exact />
        <Route path="/upload" component={VideoUpload} />

        <Route component={NotFound} />
      </Switch>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
