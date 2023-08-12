import React from 'react'
import { Link } from 'react-router-dom'
import GetAllPatient from '../../Components/Patient/GetAllPatient'

const PatientPage = () => {
  return (
    <div style={{textAlign:'center'}}>
      <h1>PatientPage</h1>
      <Link to="/AddPatient" className="btn btn-primary">Add New Patient</Link>
      <GetAllPatient/>
    </div>
  )
}

export default PatientPage
