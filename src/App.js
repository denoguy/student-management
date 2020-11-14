import React from "react";
import "./App.css";
import AddStudent from "./components/AddStudent";
import Sidebar from "./components/Sidebar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ViewStudents from "./components/ViewStudents";
import Event from "./components/Event";
import Account from "./components/Account";
import Result from "./components/Result";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <AddStudent />
            </Route>
            <Route exact path="/viewstudents">
              <ViewStudents />
            </Route>
            <Route path="/event">
              <Event />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
            <Route path="/result">
              <Result />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
