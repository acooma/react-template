import React from "react";
import "./App.css";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ArticlesPage from "./pages/ArticlesPage.js";
import ArticlesList from "./pages/ArticlesList.js";
import NavBar from "./components/Navbar.js";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="">
          <Route path="/" component={Home} exact />
          <Route path="/about" component={AboutPage} exact />
          <Route path="/articles-list" component={ArticlesList} exact />
          <Route path="/article/:name" component={ArticlesPage} exact />
        </div>
      </div>
    </Router>
  );
}

export default App;
