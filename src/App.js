import React from "react";
import "./App.css";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import InformationPage from "./pages/InformationPage.js";
import contact from "./pages/contact.js";
import NavBar from "./components/Navbar.js";
import Login from './pages/Login.js';

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="">
          <Route path="/" component={Home} exact />
          <Route path="/about" component={AboutPage} exact />
          <Route path="/contact" component={contact} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/info/:id" component={InformationPage} exact />
        </div>
      </div>
    </Router>
  );
}

export default App;
