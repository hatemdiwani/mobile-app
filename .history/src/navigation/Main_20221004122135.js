import React from 'react'
import { useSelector } from 'react-redux'
import Home from './Home'
import Home from './Home'
const Main = () => {

    const {token} = useSelector(state => state.auth)

  return (
 <>

 {
    token
    ?
    <Home />
 }
 
 </>
  )
}

export default Main