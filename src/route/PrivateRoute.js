import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = (authenticate) => {
    console.log("authenticate", authenticate)
  return authenticate === true?<Navigate to='/login' /> : <Navigate to='/login' /> 
}

export default PrivateRoute 
