import React from 'react'

const Box = (props) => {

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
    <div> {props.data.map((el)=>{
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