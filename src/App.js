import React from 'react'
import SearchBar from './components/SearchBar'
import HomePage from './components/HomePage'
import './App.css';
import Image from './components/Image'


const App = () => {

  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
 /*<h1 className="title"><Image source="yoda.jpg" />What would Yoda say?</h1>
      <SearchBar character="yoda"  />
      <h1 className="title"><Image source="jar-jar-binks.jpg" /> What would Jar Jar Binks say? </h1>
      <SearchBar character="gungan" />
      <h1 className="title"><Image source="Vader.jpeg" />What would a Sith Lord say?</h1>
      <SearchBar character="sith" />*/