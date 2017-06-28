import React, { Component } from 'react';
import ProductMenu from './component/ProductMenu'
import './App.css';

const data = [
  {
    name:'Long Black',
    price: 4
  },
  {
    name:'Short Black',
    price: 3
  },
  {
    name:'Cappucino',
    price: 5
  },
  {
    name:'Muffin',
    price: 5
  },
  {
    name:'Toastie',
    price: 2
  },
  {
    name:'Tea',
    price: 2
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Virtual Cafe</h2>
        </div>
        <ProductMenu items={ data }/>
      </div>
    );
  }
}

export default App;
