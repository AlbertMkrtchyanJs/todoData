import React from 'react'
import { useSelector } from 'react-redux'

const Box = () => {

 const {isFetching} = useSelector((state)=> state.todoState)

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

const complated = ({id,completed}) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
    method: 'PATCH',
    headers:{
      'content-type' : 'application/json'
    },
    body: JSON.stringify({completed: !completed})
  }) .then((res)=> res.json())
  .then((res)=> props.setData([res]))
}

  return (
    <div> {
      isFetching ? <h1>Loading...</h1> : 
      data.map((el)=>{
        return <li key={el.id}>
          <input type={"checkbox"} checked={el.completed} onChange={()=> complated(el)}/>
         <span>
          {el.title}
          </span>
          <button onClick={()=> remove(el.id)}>X</button>
        </li>
      })}</div>
  )
}

export default Box