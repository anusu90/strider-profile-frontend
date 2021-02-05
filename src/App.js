import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



// IMPORT COMPONENTS //
import Header from "./components/header/header"
import NavBar from "./components/navbar/navbar"
import Hero from "./components/hero/hero"
import About from "./components/about/about"
import Resume from "./components/resume/resume"
import Portfolio from "./components/portfolio/portfolio"
import Contact from "./components/contact/contact"


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
            <Header component={NavBar} a={5}>
            </Header>
            <Hero></Hero>
            <main id="main">
              <About id="about"></About>
              <Portfolio id="portfolio"></Portfolio>
              <Resume id="resume"></Resume>
              <Contact id="contact"></Contact>
            </main>
          </Route>
        </Switch>

      </Router>

    </>

  );
}

export default App;
