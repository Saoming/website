import React from "react"
import {Route, BrowserRouter as Router, Switch } from "react-router-dom" 
import CaseStudy from "./pages/case-study";
import Commission from "./pages/commission";
import Home from "./pages/home";

const App = () =>  {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/commission" component={Commission}></Route>
          <Route path="/case-study" component={CaseStudy}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
