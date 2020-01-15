import React from 'react';
import './App.css'
import About from './AboutPage';
import Nav from './Navbar';
import Shop from './Shop';
import Contact from './Contact';
import UserDetails from './UserDetails'
import Params from './Params';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
            <Nav/>
    <Switch>
            <Route path="/" exact component={Home}/>
            
            <Route path="/about" exact component={About}/>
            <Route path="/about/:id" component={UserDetails}/>
            <Route path="/shop" exact component={Shop}/>
            <Route path= "/shop/:user_id" component={Params}/>
            <Route path="/contact" component={Contact}/>
    </Switch>      
    </div>
    </Router>
  )
}

const Home = () => {
  return(
    <h1>Home Page</h1>
  )
}

export default App;