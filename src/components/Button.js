import React , {useState} from 'react'
import axios from 'axios'

 const Button = ({text, character}) => {
const[yodaText, setYodaText] = useState('')
const onTranslateClick = () => {
   

    axios.post(`/translate/${character}.json`, {text})
    .then(res => {
        setYodaText(res.data.contents.translated)
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
                    {yodaText}
                </div>
        </div>
    )
}
export default Button