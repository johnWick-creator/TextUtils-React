import React from 'react'

export default function TextSummary(props) {
  return (
    <div className="container">
            <h1>Text Summury</h1>
            <p>{props.value}</p>
            <p>Number of words : {props.value.split(" ").length-1}</p>
            <p>Number of letters : {props.value.length}</p>
        </div>
  )
}
