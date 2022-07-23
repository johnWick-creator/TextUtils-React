import React, { useState } from 'react'
import TextSummary from './TextSummary';

export default function Form() {

    const [iniText,setText] = useState("type some thing here!!")

    function clearInput(){
        setText("")
    }

    function handleText(event){
        const value = event.target.value
        setText(value)        
    }

    function upperCaseText(){
        let newText = iniText.toUpperCase();
        setText(newText)
    }

    function lowerCaseText(){
        let newText = iniText.toLowerCase();
        setText(newText)
    }

    function clearText(){
        setText("");
    }

  return (
    <div className="form-group my-3 mx-5">
        <label htmlFor="exampleFormControlTextarea1">Change text State</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"  onChange = {handleText} onClick={clearInput} value={iniText}></textarea>
        <button className='btn btn-primary my-3' onClick = {upperCaseText}>To Upper Case</button>
        <button className='btn btn-primary my-3 mx-2' onClick = {lowerCaseText}>To lower case</button>
        <button className='btn btn-primary my-3 mx-2' onClick = {clearText}>Clear text</button>

        <TextSummary value={iniText}/>
    </div>
  )
}
