import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState:{
        loading:false,
        user:{},
    },
    reducers:{
            loginRequest(state, action){
                return{
                    ...state,
                    loading:true
                }
            },
            loginSuccess(state,action){
                return{
                    loading: false,
                    user:action.payload
                }
            },
            loginFail(state,action){
                return{
                    ...state,
                    loading:false,
                    error: action.payload
                }
            },
            clearError(state,action){
                return{
                    ...state,
                    error:null
                }
            },
            logout(state,action){
                return{
                    ...state,
                    user:{}
                }
            }
        }
    });

const {actions,reducer} = userSlice;

export const {
            loginRequest,
            loginSuccess,
            loginFail,
            logout,
            clearError
            }=actions;

export default reducer