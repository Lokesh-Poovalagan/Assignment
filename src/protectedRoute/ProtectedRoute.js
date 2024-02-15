import Cookies from 'js-cookie'
import React from 'react'
import {useSelector} from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const {loading}=useSelector(state=>state.userState)
    const token=Cookies.get('token')
    if(token){
        return children
    }
    if(!token && !loading){
        return <Navigate to={"/login"}/>
    }

}

export default ProtectedRoute