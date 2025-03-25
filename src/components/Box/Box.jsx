import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTC } from '../../store/reducers/createReducer'
import { deleteTC } from '../../store/reducers/removeReducer'



const Box = () => {
const dispatch = useDispatch() 
 
 const {isFetching} = useSelector((state)=> state.todoState)
 const {data} = useSelector(state => state.completedState)

    const remove= () =>{
    dispatch(deleteTC())
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
          <button onClick={ remove()}>X</button>
        </li>
      })}</div>
  )
}

export default Box