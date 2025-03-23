import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTC } from '../../store/reducers/createReducer'


const Input = () => {

const dispatch = useDispatch()

const {text} = useSelector(state => state.createState)

  const create = useEffect(()=>{
    dispatch(createTC())
  })
  
  return (
    <div> 
       <input value={text} onChange={(e)=> dispatch(e.target.value)} />
      <button onClick={create}>+</button>
      </div>
  )
}

export default Input