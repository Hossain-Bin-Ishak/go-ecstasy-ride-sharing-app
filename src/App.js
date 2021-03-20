import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import RideDetail from './Components/RideDetail/RideDetail';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import NoMatch from './Components/NoMatch/NoMatch';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import RideInfo from './Components/RideDetail/RideInfo';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="app-container">
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/ride-info/:rideId">
              <RideInfo></RideInfo>
            </Route>
            <PrivateRoute path="/destination">
              <RideDetail />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
            <NoMatch></NoMatch>
            </Route>
          </Switch>
      </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;