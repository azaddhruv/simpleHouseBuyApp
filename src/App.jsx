import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import ListContainer from './components/ListContainer';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <ListContainer />
    </div>
  );
}

export default App;
