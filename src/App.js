import React from 'react'
import SearchBar from './components/SearchBar'
import './App.css';

const App = () => {

  return (
    <div className="App">
      <h1 className="title">What would Yoda say?</h1>
      <SearchBar character="yoda"  />
      <h1 className="title">What would Jar Jar Binks say? </h1>
      <SearchBar character="gungan" />
    </div>
  );
}

export default App;
