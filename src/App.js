import React from "react";
import "./App.css";
import Home from "./pages/Home";
import InformationPage from "./pages/InformationPage.js";
import admin from "./pages/AdminPage.js";
import NavBar from "./components/Navbar.js";
import login from "./pages/Login";
import newSuggestion from "./pages/NewSuggestionPage.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { StateProvider } from "./state";

const App = () => {
  const initialState = {
    user: "admin",
    pw: "nuaslal"
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "changeUser":
        return {
          ...state,
          user: action.user
        };
      default:
        return state;
    }
  };

  const [state, updateState] = React.useState(initialState);

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <div className="App">
          {console.log(state)}
          <NavBar userName={state.user} />
          <Route path="/" component={Home} exact />
          <Route path="/admin" component={admin} exact />
          <Route path="/newSuggestion" component={newSuggestion} exact />
          <Route path="/login" component={login} exact />
          <Route path="/info/:id" component={InformationPage} exact />
        </div>
      </Router>
    </StateProvider>
  );
};

export default App;
