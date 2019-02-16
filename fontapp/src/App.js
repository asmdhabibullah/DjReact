import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from '../src/component/layout/Navbar';
import Footre from '../src/component/layout/Footer';
import Home from '../src/component/content/Home';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Home />
        <Footre />
      </div>
    );
  }
}

export default App;
