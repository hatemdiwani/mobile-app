import React from 'react'
import { useSelector } from 'react-redux'

const Main = () => {

    const {token} = useSelector(state => state.auth)

  return (
 <>

 {
    token
    ?
    
 }
 
 </>
  )
}

export default Main