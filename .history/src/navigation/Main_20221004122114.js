import React from 'react'
import { useSelector } from 'react-redux'
impo
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