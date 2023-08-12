import React from 'react'
import { combineReducers } from 'redux'
import authReducer from './authReducer'
import patientReducer from './patientReducer'

export default combineReducers({
    autho:authReducer,
    patient:patientReducer
})
