import React from 'react'
import { Login } from '../type';

const initial={loginUser:{},loading:true};
const authReducer = (state=initial,action) => {
        switch(action.type){
            case Login:
                return{
                    ...state,
                    loginUser:action.payload,
                    loading:false
                }
                default:
                    return state;

        }
}

export default authReducer
