
import logo from './logo.svg';
import React from "react"
import './App.css';
import Home from './Pages/Home'
//import Submit from './Pages/Submit';
import Events from './Pages/Events';
import Downloads from './Pages/Downloads'
import  Participants from './Pages/Participants'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router,Route,Switch ,Link,Redirect} from "react-router-dom";


function App() {
  return (
      <Router>
        <br>{}</br>
        <p className="mainHeading" >Conference Management Tool</p>
        <br>{}</br>
        <div className="App">


          <br>{}</br>

          <Link to="/home">Home</Link>
          <Link to="/event">Events</Link>
          <Link to="/part">Participants</Link>
          <Link to="/download">Downloads</Link>

          <Switch>
            <Route path="/home">
              <Home/>
            </Route>
          </Switch>
          <Switch>
            <Route path="/event">
              <Events/>
            </Route>
          </Switch>
          <Switch>
            <Route path="/download">
              <Downloads/>
            </Route>
          </Switch>
          <Switch>
            <Route path="/part">
              <Participants/>
            </Route>
          </Switch>
          <br>{}</br>
        </div>
      </Router>
  );
}

export default App;
