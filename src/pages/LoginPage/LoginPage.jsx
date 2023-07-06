import React from 'react'
import './loginStyle.css'

import Login from '../../component/Login/Login'

const LoginPage = () => {
  // const isUserLoggedIn = useSelector((state)=> state.auth.isLoggedIn)  
  // if(isUserLoggedIn)  return <Navigate to='/' replace/>
  return (
    <div className="main">
    <Login />
    <div className="links">
        
    </div>
</div>
  )
}

export default LoginPage