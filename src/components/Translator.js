import React from 'react'
import SearchBar from './SearchBar'
import Image from './Image'
import Vader from '../images/Vader.jpeg'
import Mando from '../images/Mando.jpg'
import JarJar from '../images/jar-jar-binks.jpg'
import Yoda from '../images/yoda.jpg'
import './Translator.css'

 const Translator = () => {
    return (
    <div className='bg-image'>
        <h1 className="title"><Image source={Yoda} />What would Yoda say?</h1>
      <SearchBar character="yoda"  />
      <h1 className="title"><Image source={JarJar} /> What would Jar Jar Binks say? </h1>
      <SearchBar character="gungan" />
      <h1 className="title"><Image source={Vader} />What would a Sith Lord say?</h1>
      <SearchBar character="sith" />
      <h1 className="title"><Image source={Mando} />What would the Mandalorian say? (Din Djarin)  </h1>
      <SearchBar character="mandalorian" />
    </div>
    )
}

export default Translator
