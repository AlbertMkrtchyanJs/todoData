import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTC } from '../../store/reducers/createReducer'



const Box = () => {
const dispatch = useDispatch() 
 
 const {isFetching} = useSelector((state)=> state.todoState)
 const {data} = useSelector(state => state.completedState)

    const remove= (id) =>{
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
    method: 'DELETE',
    headers:{
      'content-type' : 'application/json'
    }
  })
  .then((res) => res.json())
  .then((res) => props.setData( props.data.filter((data)=> data.id !== id)))
  
}


  const create = useEffect(()=>{
    dispatch(createTC())
  })

  return (
    <div> {
      isFetching ? <h1>Loading...</h1> : 
      data.map((el)=>{
        return <li key={el.id}>
          <input type={"checkbox"} checked={el.completed} onChange={()=> create(el)}/>
         <span>
          {el.title}
          </span>
          <button onClick={()=> remove(el.id)}>X</button>
        </li>
      })}</div>
  )
}

export default Box