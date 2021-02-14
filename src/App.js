
import React, { Component } from "react";

import {
   BrowserRouter as Router, 
   Switch,
   Route 
  } from "react-router-dom";
// BrowserRouter
// To add the ability to add routing functionality
// Switch
// Checks provided paths and stops checking all as soon as it finds a match
// Route
// Renders components based on the URL

// Home page
import Nav from "./Component/Nav/Nav";
import Footer from "./Component/Footer/Footer";
import Main from "./Component/Main/Main";

// Pages
import Iphone from "./Pages/Iphone/iphone";
import Mac from "./Pages/Mac/Mac";
import Four04 from "./Pages/Four04/Four04";
import Productpage from "./Pages/Productpage/Productpage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/mac" exact component={Mac} />
            <Route path="/iphone" exact component={Iphone} />
            <Route path="/iphone/:pid" exact component={Productpage} />
            <Route path="/" component={Four04} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;


// import React, {Component} from 'react';
// import logo from './logo.svg';

// import Nav from './Component/Nav/Nav.js';
// import Main from './Component/Main/Main.js';
// import Footer from './Component/Footer/Footer.js';


// import './App.css';


// class App extends Component {
// 	render(){
// 	  return (
// 	    <div> 	
// 		  <Nav/>
// 		  <Main />
// 	    <Footer/> 
// 	    </div>

// 	  )	

//     }

// }

// export default App
