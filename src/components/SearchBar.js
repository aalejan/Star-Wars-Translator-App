import React, { useState} from 'react'
import './SearchBar.css'


const SearchBar = ({onFormSubmit}) => {
    const [term, setTerm] = useState('')

   const  onSubmit = (event) => {
        event.preventDefault();


       onFormSubmit(term);
    };

    return ( 
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label >Enter Text Here:</label>
                    <input type="text" value={term} onChange={(event) => setTerm(event.target.value)}/>  
                </div>
                <button class="ui primary button">
                        Translate
                </button>
            </form>
        </div>
    )

}

export default SearchBar