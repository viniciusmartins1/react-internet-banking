import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CoOwners from "../../pages/CoOwners";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import NewCoOwner from "../../pages/NewCoOwner";
import NotFound from "../../pages/NotFound";
import Profile from "../../pages/Profile";

const Routes = () => {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <Home />} />
        <Route path="/login" component={() => <Login />} />
        <Route path="/perfil" component={ () =><Profile />} />
        <Route path="/cotitulares" component={ () => <CoOwners />} />
        <Route path="/cotitulares/cadastrar" component={ () => <NewCoOwner />} />
        <Route path="/nao-encontrado" component={ () => <NotFound />} />
      </Switch>
    </Router>
  )
}

export default Routes;