import React , {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'



const TranslateText = styled.div`
    margin-top: 50px;
    font-size: 1.5rem;
    font-weight: 400;
`

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
                <TranslateText>
                    {characterText}
                </TranslateText>
        </div>
    )
}
export default Button