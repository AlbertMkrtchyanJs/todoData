
import { useEffect, useState } from 'react'
import './App.css'
import Input from './components/Input/Input'
import Box from './components/Box/Box'


function App() {
  const[data,setData] = useState([])
 

  useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=15')
  .then((res)=> res.json())
  .then((res)=> setData(res))
},[])





  return (
    <div>
      <Input setData ={setData} data ={data}/>
    <Box setData ={setData} data ={data}/>
    </div>
  )
}

export default App
