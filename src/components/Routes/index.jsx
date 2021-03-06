import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CoOwners from "../../pages/CoOwners";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import NewCoOwner from "../../pages/NewCoOwner";
import NotFound from "../../pages/NotFound";
import Profile from "../../pages/Profile";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {

  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact component={() => <Home />} />
        <Route path="/login" exact component={() => <Login />} />
        <PrivateRoute path="/perfil" exact component={ () =><Profile />} />
        <PrivateRoute path="/cotitulares" exact component={ () => <CoOwners />} />
        <PrivateRoute path="/cotitulares/cadastrar" exact component={ () => <NewCoOwner />} />
        <Route path="/nao-encontrado" component={() => <NotFound />} />
        <Route  component={() => <NotFound />}/>
      </Switch>
    </Router>
  )
}

export default Routes;