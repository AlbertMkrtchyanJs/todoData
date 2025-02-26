import React, { useState } from 'react'


const Input = (props) => {

   const[text,setText] = useState('')

  const create = () => {
    fetch('https://jsonplaceholder.typicode.com/todos',{
      method : "POST",
      headers:{
        'content-type' : 'application/json'
      },
      body : JSON.stringify({title: text, complated : false})
    })
    .then((res)=> res.json())
    .then((res) => props.setData([res,...props.data]),setText(''))
  }
  return (
    <div> 
       <input value={text} onChange={(e)=> setText(e.target.value)} />
      <button onClick={create}>+</button>
      </div>
  )
}

export default Input