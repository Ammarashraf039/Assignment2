import React from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent';
import DetailViewComponent from './components/DetailViewComponent';
import ReviewComponent from './components/ReviewComponent';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar'
function App() {
  return (
    <div className="App">

      <NavBar />
      <BrowserRouter>
        <Switch>

          <Route path='/reviews/:id' render={(props) => <ReviewComponent {...props} />}/>
          <Route path='/detail/:id' render={(props) => <DetailViewComponent {...props} />}/>
          
          <Route path='/'>
            <HomeComponent />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
