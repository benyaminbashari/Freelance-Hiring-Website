import App from "./App";
import Register from "./Register";
import Login from "./Login";
import ProfileEmployer from "./ProfileEmployer";
import Hire from "./Hire"
import Jobs from "./Jobs";
import ErrorPage from "./ErrorPage";
import React from "react";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Profile from "./Profile";
import ProjectPage from "./ProjectPage";
import AfterSignup from "./AfterSignup";

const Router = () => {
  return (
      <BrowserRouter>
          <Switch>
              <Route exact path="/" component={App}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/profile" component={Profile}/>
              <Route exact path={"/projectPage"} component={ProjectPage}/>
              <Route exact path="/hire" component={Hire}/>
              <Route exact path="/profile" component={ProfileEmployer}/>
              <Route exact path="/hire" component={Hire}/>
              <Route exact path="/jobs" component={Jobs}/>
              <Route exact path="/after" component={AfterSignup}/>
              <Route path="*" render={(props) => <ErrorPage msgs={['404', 'Page Not Found']} />}/>
          </Switch>
      </BrowserRouter>
  )
};

export default Router;