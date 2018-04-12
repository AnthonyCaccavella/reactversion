import React, { Component } from 'react';
// import firestore from './firestore';
import './App.css';
import BusinessInfo from './Components/AddBusiness/BusinessInfo/BusinessInfo';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BusinessInfo/>
      </div>
    )
  }
}
export default App;
