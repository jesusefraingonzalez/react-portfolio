import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/contact.html">
          <Contact />
        </Route>
        <Route exact path="/portfolio.html">
          <Portfolio />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
