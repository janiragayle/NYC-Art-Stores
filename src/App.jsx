import React from 'react';
import './App.css';
import List from './components/List';

const App = () => {

  return (
    <div className="App">
      <h1>NYC's Art Stores</h1>
      <h3>NYC has an endless pool of resources of art supplies. Whether you're a painter, crocheter, 
        <br></br>photograper, or just an appreciator of crafts, theres a store for you. - Nira (your neighborhood mixed media artist)</h3>
      <List />
    </div>
  )
}

export default App