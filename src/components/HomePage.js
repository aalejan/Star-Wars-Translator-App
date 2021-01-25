import React from 'react'
import './HomePage.css'
import { NavLink } from 'react-router-dom'


 const HomePage = () => {
    return (
        <div className="bg_image">
            <div className="container">
                 <div className="sub-title">Translator</div>
                 <NavLink to="/Translator">
                 <button className="ui inverted primary button">TRY IT NOW</button>
                </NavLink>   
            </div>
        </div>
    )
}

export default HomePage
