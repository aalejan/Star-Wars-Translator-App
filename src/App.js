import React, {useState, useEffect} from 'react'
import SearchBar from './components/SearchBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="title">What would Yoda say?</h1>
      <SearchBar  />
    </div>
  );
}

export default App;
