import React, { useEffect } from 'react'
import { allUser } from '../../store/action/userAction'
import { useDispatch, useSelector } from 'react-redux'

const Documentation = () => {
  const { user } = useSelector(state => state)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(allUser())
  }, [])

  console.log('user', user)
  return (
    <>
      <h1 className="font-bold">
        Hello world!
      </h1>
     
    </>
  )
}

export default Documentation