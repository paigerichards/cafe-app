import React, { Component } from 'react';
import coffee from './coffee.gif'
import './App.css';
import ProductMenu from './component/ProductMenu'


const data = [
  {
    name: "LOOONG Black",
    price: 4
  },
  {
    name: "Fair Trade Muffin",
    price: 5
  },
  {
    name: "Aussie Toastieee",
    price: 6
  },
  {
    name: "Dark Tea",
    price: 4
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={coffee} className="App-logo" alt="logo" />
          <h2>Welcome to Virtual Cafe</h2>
        </div>
        <ProductMenu items={ data } />
        <div>

        </div>
      </div>

    );
  }
}

export default App;
