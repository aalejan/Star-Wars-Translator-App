import React, {useState, useEffect} from 'react'
import SearchBar from './components/SearchBar'
import axios from 'axios'
import './App.css';

function App() {

  /*useEffect(() => {
    const pullData = async() => {
        const {data} = axios.get()
    }
    return () => {
      cleanup
    }
  }, [input])*/


  return (
    <div className="App">
      <h1 className="title">What would Yoda say?</h1>
      <SearchBar  />
    </div>
  );
}

export default App;
