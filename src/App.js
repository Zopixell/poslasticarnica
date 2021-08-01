import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Menu from './components/Menu';
import Gallery from './components/gallery/Gallery';
import ContactUs from './components/ContactUs';
import Footer from './components/pages/Footer';

//<Route path = '/ContactUs' component = {ContactUs}/>

function App() {
  
  return (
    <Router>
      <Navbar /> 
      <Switch>
        <Route path='/' exact component = {Home}/>
        <Route path='/menu'  component = {Menu}/>
        <Route path='/Gallery'  component = {Gallery}/>
        <Route path='/ContactUs'  component = {ContactUs}/>

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
