import React from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent';
import DetailViewComponent from './components/DetailViewComponent';
import ReviewComponent from './components/ReviewComponent';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route path='/reviews'>
            <ReviewComponent />
          </Route>

          <Route path='/detail'>
            <DetailViewComponent />
          </Route>

          <Route path='/'>
            <HomeComponent />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
