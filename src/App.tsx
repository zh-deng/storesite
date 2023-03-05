import React from 'react';
import './App.scss';
import { Categorybar, Filter, Footer, Header, Navbar, Products, Searchbar, Shoppingcart } from './containers';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Shoppingcart />
      <Header />
      <Searchbar />
      <Filter />
      <Categorybar />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
