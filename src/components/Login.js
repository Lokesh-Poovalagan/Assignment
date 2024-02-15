import React, { useEffect, useState } from 'react'
import {  login} from "../action/userActions"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Login = () => {
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const dispatch=useDispatch()
    const {loading,error}=useSelector(state=>state.userState)
    const navigate=useNavigate()
    const token = Cookies.get('token')
    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(login(name,password))
    }

    useEffect(()=>{
        if(token){
            navigate('/')
        }
    },[token,navigate])
    

    return (
    <>
        <div id="login_page" className="row wrapper"> 
            <div className="col-10 col-lg-5">
                <form className="shadow-lg" onSubmit={submitHandler}>
                    <h1 className="mb-3">Login</h1>
                    <h5 id='error' style={error?{}:{display:"none"}}>Invalid name or password</h5>

                    <div className="form-group">
                        <label htmlFor="name_field">name</label>
                        <input
                            id="name_field"
                            className="form-control"
                            value={name}
                            onChange={e=>{setName(e.target.value)}}
                        />
                    </div>
        
                    <div className="form-group">
                        <label for="password_field">Password</label>
                        <input
                            type="password"
                            id="password_field"
                            className="form-control"
                            value={password}
                            onChange={e=>{setPassword(e.target.value)}}
                        />
                    </div>
        
                    <button
                    id="login_button"
                    type="submit"
                    className="btn btn-block py-3"
                    disabled={loading}
                    >
                    LOGIN
                    </button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login