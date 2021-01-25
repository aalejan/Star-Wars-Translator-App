import React, { useState} from 'react'
import Button from './Button'





const SearchBar = ({character}) => {
    const [text, setText] = useState('')

   const  onSubmit = (event) => {
        event.preventDefault();       
    };

    return ( 
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label >Enter Text Here:</label>
                    <input type="text" value={text} onChange={(event) => setText(event.target.value)}/> 
                </div>
                <Button character={character} text={text} >
                        Translate
                </Button>
            </form>
        </div>
    )

}

export default SearchBar