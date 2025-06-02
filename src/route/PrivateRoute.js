import React from 'react'
import Product_detail from '../page/Product_detail'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({authenticate}) => {
    console.log(authenticate)
  return authenticate == true?<Product_detail/> :<Navigate to="/login" />
}

export default PrivateRoute
