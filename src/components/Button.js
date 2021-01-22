import React from 'react'
import axios from 'axios'

 const Button = () => {

const onTranslateClick = ({text}) => {

    axios.post("	https://api.funtranslations.com/translate/yoda.json", {text})
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
       
}



    return (
        <div>
              <button onClick={onTranslateClick} className="ui primary button">
                        Translate
                </button>
        </div>
    )
}
export default Button