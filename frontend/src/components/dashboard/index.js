import React from 'react'
import { USER_LOGOUT } from '../../api/endPoints'

const Dashboard = () => {
    const logout = ()=>{
        localStorage.clear()
    }
  return (
    <div>
        <h1>Dashboard</h1>
        <a href={`${process.env.REACT_APP_SERVER}${USER_LOGOUT}`}><button onClick={logout}>Logout</button></a>
    </div>
  )
}

export default Dashboard