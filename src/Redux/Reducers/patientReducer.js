import React from 'react'
import { Add_Patient } from '../type';

const initial={AddPatient:{},loading:true};
const patientReducer = (state=initial,action) => {
        switch(action.type){
            case Add_Patient:
                return{
                    ...state,
                    AddPatient:action.payload,
                    loading:false
                }
                default:
                    return state;

        }
}
export default patientReducer
