import React from 'react'
import SearchBar from './SearchBar'
import Image from './Image'
import './Translator.css'

 const Translator = () => {
    return (
    <div>
        <h1 className="title"><Image source="yoda.jpg" />What would Yoda say?</h1>
      <SearchBar character="yoda"  />
      <h1 className="title"><Image source="jar-jar-binks.jpg" /> What would Jar Jar Binks say? </h1>
      <SearchBar character="gungan" />
      <h1 className="title"><Image source="Vader.jpeg" />What would a Sith Lord say?</h1>
      <SearchBar character="sith" />
      <h1 className="title"><Image source="Mando.jpg" />What would the Mandalorian say? (Din Djarin)  </h1>
      <SearchBar character="mandalorian" />
    </div>
    )
}

export default Translator
