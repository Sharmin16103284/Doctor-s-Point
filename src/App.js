import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Service from "./components/Home/Service/Service";
import AboutUs from "./components/Home/AboutUs/AboutUs";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import Contacts from "./components/Home/Contacts/Contacts";
import Login from "./components/Shared/Login/Login";
import PrivetRoute from "./components/Shared/Login/PrivetRoute/PrivetRoute";
import Navbar from "./components/Shared/Navbar/Navbar";
import NotFound from "./components/Shared/NotFound/NotFound";
import AuthProvider from "./Context/AuthProvider";
import Registration from "./components/Shared/Registration/Registration";


function App() {

  return (
    <AuthProvider>
      <Router>
        <Navbar></Navbar>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <PrivetRoute path="/aboutUs">
            <AboutUs></AboutUs>
          </PrivetRoute>

          <Route path="/registration">
            <Registration></Registration>
          </Route>

          <PrivetRoute path="/bookAppointment/:id">
            <ServiceDetail></ServiceDetail>
          </PrivetRoute>

          <PrivetRoute path="/contact">
            <Contacts></Contacts>
          </PrivetRoute>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
