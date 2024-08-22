import React from 'react'
import ProductDetail from '../page/ProductDetail'
import { Navigate } from 'react-router-dom'

const PrivateRoute = (authenticate) => {
    console.log("authenticate", authenticate)
  return authenticate === true?<Navigate to='/login' /> : <Navigate to='/login' /> 
}

export default PrivateRoute 
