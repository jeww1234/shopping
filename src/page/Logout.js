import React from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = ({setAuthenticate}) => {


    const navigate = useNavigate()
  const logoutUser =(event)=>{
    event.preventDefault();
    console.log("로그인 클릭")
    setAuthenticate(false)
    navigate('/')
  }

  return (
    <div>
      <div variant="warning" type="submit" onSubmit={logoutUser}>
        로그인
      </div>
    </div>
  )
}

export default Logout
