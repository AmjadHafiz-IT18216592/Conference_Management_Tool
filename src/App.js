

import React from "react"
import './App.css';
//import Home from './Pages/Home'
import Home from './Connectors/MainHome'
//import Submit from './Pages/Submit';
//import Events from './Pages/Events';
import Events from './Connectors/Main';
import Downloads from './Pages/Downloads'
import  Participants from './Pages/Participants'
import Data from './Server/fetch';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router,Route,Switch ,Link,Redirect} from "react-router-dom";
import Presentation from "../src/Connectors/presEvent";
import Workshop from "../src/Connectors/Workshop";
import Files from "../src/Connectors/Files"

function App() {
  return (
      <Router>
        <header>

        <h1>Conference Management Tool</h1>


<ul>
  <li><Link to="/home">Home</Link></li>
  <li><Link to="/event">Events</Link></li>
  <li><Link to="/part">Participants</Link></li>
  <li><Link to="/download">Downloads</Link></li>
    <li><Link to="/files">Files</Link></li>

</ul>
          </header>
          <div className="App">

          <Switch>
            <Route path="/home" style={{textDecoration:'none'}}><Home/></Route>

          </Switch>
          <Switch>
            <Route path="/event" style={{textDecoration:'none'}}>
              <Events/>
            </Route>
          </Switch>
          <Switch>
            <Route path="/download" style={{textDecoration:'none'}}>
              <Downloads/>
            </Route>
          </Switch>
          <Switch>
            <Route path="/part" style={{textDecoration:'none'}}>
              <Participants/>
            </Route>
          </Switch>
              <Switch>
                  <Route path="/data" style={{textDecoration:'none'}}>
                      <Data/>
                  </Route>
              </Switch>
              <Switch>
                  <Route path="/workshops"style={{textDecoration:'none'}}>
                      <Workshop/>
                  </Route>
              </Switch>
              <Switch>
                  <Route path="/presentations" style={{textDecoration:'none'}}>
                      <Presentation/>
                  </Route>
              </Switch>
              <Switch>
                  <Route path="/files" style={{textDecoration:'none'}}>
                  <Files/>
                  </Route>
              </Switch>
          <br>{}</br>
        </div>

      </Router>
  );
}

export default App;

