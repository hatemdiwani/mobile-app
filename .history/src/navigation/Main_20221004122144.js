import React from 'react'
import { useSelector } from 'react-redux'
import Home from './Home'
import Auth from './Auth'
const Main = () => {

    const {token} = useSelector(state => state.auth)

  return (
 <>

 {
    token
    ?
    <Home />
    :
    <Auth />
 }
 
 </>
  )
}

export default Main