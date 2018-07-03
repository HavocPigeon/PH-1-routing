import React, { Component } from 'react';
import About from './About/About';
import Home from './Home/Home';
import { Route, Link } from 'react-router-dom';
import FAQ from './About/FAQ/FAQ'
import Company from './About/Company/Company'

class App extends Component {
  render() {
    return (
      <div>
        This is App.js
        <nav>
          <Link to='/about'>About</Link>
          <Link to='/'>Home</Link>
        </nav>
        <Route exact path='/' component={Home} />
        <Route path='/about' render={() => <About>
          <Route path='/about/faq' component={FAQ}/>
          <Route path='/about/company' component={Company}/>
          </About>} />
      </div>
    );
  }
}

export default App;
