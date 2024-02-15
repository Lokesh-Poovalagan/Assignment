import Cookies from 'js-cookie'
import { loginFail, loginRequest, loginSuccess ,clearError, logout} from '../slice/userslice'
import axios from 'axios'

export const login = (username,password) =>async(dispatch)=> {
  try{
        dispatch(loginRequest())
        const {data} = await axios.post(`https://dummyjson.com/auth/login`,{username,password})
        const {token}=data
        Cookies.set('token',token,{expires:7})
        dispatch(loginSuccess(data))
  }
  catch(error){
        dispatch(loginFail(error.response.data.message))
  }
}


export const clearAuthError = dispatch =>{
      dispatch(clearError())
  }

export const logOut=dispatch=>{
      Cookies.remove('token')
      dispatch(logout())
}