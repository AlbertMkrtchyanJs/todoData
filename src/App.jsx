
import { useEffect, useState } from 'react'
import './App.css'
import Input from './components/Input/Input'
import Box from './components/Box/Box'
import { useDispatch, useSelector } from 'react-redux'
import { addTodoTC} from './store/reducers/todoReducer'


function App() {
  const {todos ,text} = useSelector((state)=>state.todoState)
 const dispatch = useDispatch()
 

  useEffect(()=>{
   dispatch(addTodoTC())
},[])





  return (
    <div>
      
      <Input />
    <Box />
    </div>
  )
}

export default App
