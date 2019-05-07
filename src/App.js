import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contacts from './components/Contacts';
import Header from './components/Header';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import   Provider   from './context';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';



class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
         <div className="App">
      <Header branding = 'Contact Manager' />
      <div className='container'>
        <Switch>
          <Route exact path = "/" component = {Contacts}/>
          <Route exact path = "/add" component = {AddContact}/>
          <Route exact path = "/edit/:id" component = {EditContact}/>
          
          <Route exact path = "/about" component = {About}/>
          
          <Route component = {NotFound} />
          
        </Switch>

        
      </div>
     </div>
      </Router>
     </Provider>
     
    );
    }
  }

  

export default App;
