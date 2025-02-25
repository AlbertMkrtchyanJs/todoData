
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const[data,setData] = useState([])
  const[text,setText] = useState('')

  useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=15')
  .then((res)=> res.json())
  .then((res)=> setData(res))
},[])

const create = () => {
  fetch('https://jsonplaceholder.typicode.com/todos',{
    method : "POST",
    headers:{
      'content-type' : 'application/json'
    },
    body : JSON.stringify({title: text, complated : false})
  })
  .then((res)=> res.json)
  .then((res) => setData([res,...data]))
}

const remove= (id)=>{
  fetch(`https://jsonplaceholder.typicode.com/todos${id}`,{
    method: 'DELETE'
  })
  .then((res) => res.json())
  .then((res) => console.log(res))
}

  return (
    <div>
      <input value={text} onChange={(e)=> setText(e.target.value)} />
      <button onClick={create}>+</button>
    {data.map((el)=>{
      return <li key={el.id}>
        <input type={"checkbox"} />
       <span>
        {el.title}
        </span>
        <button onClick={()=> remove(el.id)}>X</button>
      </li>
    })}
    </div>
  )
}

export default App
