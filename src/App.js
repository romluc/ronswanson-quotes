import React from 'react';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Quote from './components/Quote';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Hero />
      <Quote />
    </div>
  );
};

export default App;
