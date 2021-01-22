import React , {useState} from 'react'
import axios from 'axios'

 const Button = ({text, character}) => {
const[characterText, setcharacterText] = useState('')
const onTranslateClick = () => {
   

    axios.post(`/translate/${character}.json`, {text})
    .then(res => {
        setcharacterText(res.data.contents.translated)
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
                <div>
                    {characterText}
                </div>
        </div>
    )
}
export default Button