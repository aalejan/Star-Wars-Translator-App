import React from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'


 const HomePage = () => {
    return (
        <div className="bg_image">
            <div className="container">
                 <div className="sub-title">Translator</div>
                 <Link to="/Translator">
                 <button className="ui inverted primary button">TRY IT NOW</button>
                </Link>   
            </div>
        </div>
    )
}

export default HomePage
