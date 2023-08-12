import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import { AddPatient, addPatient } from '../../Redux/Actions/PatientAction';

const AddPatientHook = () => {
        const dispatch = useDispatch();
        const navigate = useNavigate();
        //Basic
        const [PasNumber, setPasNumber] = useState('00')
        const [Forenames, setForenames] = useState('')
        const [Surname, setSurname] = useState('')
        const [DateOfBirth, setDateOfBirth] = useState(new Date())
        const [SexCode, setSexCode] = useState('')
        const [HomeTelephoneNumber, setHomeTelephoneNumber] = useState('')
        //////////////////NextOfKin
        const [NokName, setNokName] = useState('')
        const [NokRelationshipCode, setNokRelationshipCode] = useState('')
        const [NokAddressLine1, setNokAddressLine1] = useState('')
        const [NokAddressLine2, setNokAddressLine2] = useState('')
        const [NokAddressLine3, setNokAddressLine3] = useState('')
        const [NokAddressLine4, setNokAddressLine4] = useState('')
        const [NokPostcode, setNokPostcode] = useState('')
        ////////////////////////GpDetails
        const [GpCode, setGpCode] = useState('00')
        const [GpInitials, setGpInitials] = useState('')
        const [GpSurname, setGpSurname] = useState('')
        const [GpPhone, setGpPhone] = useState('')
        const [loading, setLoading] = useState(true)
        const [isPress, setIsPress] = useState(false)

        
    const onChangePasNumber = (e) =>{setPasNumber(e.target.value)}
    const onChangeForenames = (e) =>{setForenames(e.target.value)}
    const onChangeSurname = (e) =>{setSurname(e.target.value)}
    const onChangeDateOfBirth = (e) =>{setDateOfBirth(e.target.value)}
    const onChangeSexCode = (e) =>{setSexCode(e.target.value)}
    const onChangHomeTelephoneNumber = (e) =>{setHomeTelephoneNumber(e.target.value)}
    const onChangeNokName = (e) =>{setNokName(e.target.value)}
    const onChangNokRelationshipCode = (e) =>{setNokRelationshipCode(e.target.value)}
    const onChangeNokAddressLine1 = (e) =>{setNokAddressLine1(e.target.value)}
    const onChangeNokAddressLine2 = (e) =>{setNokAddressLine2(e.target.value)}
    const onChangeNokAddressLine3 = (e) =>{setNokAddressLine3(e.target.value)}
    const onChangeNokAddressLine4 = (e) =>{setNokAddressLine4(e.target.value)}
    const onChangeNokPostcode = (e) =>{setNokPostcode(e.target.value)}
    const onChangeGpCode = (e) =>{setGpCode(e.target.value)}
    const onChangeGpInitials = (e) =>{setGpInitials(e.target.value)}
    const onChangeGpSurname = (e) =>{setGpSurname(e.target.value)}
    const onChangeGpPhone = (e) =>{setGpPhone(e.target.value)}


  
    const onSubmit = async () => {
        setIsPress(true)
        setLoading(true)
       
        await dispatch(addPatient({
            PasNumber,
            Forenames,
            Surname,
            DateOfBirth,
            SexCode,
            HomeTelephoneNumber,
            NokName,
            NokRelationshipCode,
            NokAddressLine1,
            NokAddressLine2,
            NokAddressLine3,
            NokAddressLine4,
            NokPostcode,
            GpCode,
            GpSurname,
            GpInitials,
            GpPhone,
        }))

        setLoading(false)
        setIsPress(false)
    }
    const res = useSelector(state => state.patient.AddPatient)
    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res)
                debugger;
                if (res.data.requestStatus === 200) {
                   
                    NotificationManager.success(res.data.message, 'success!', 2000);
                    setTimeout(() => {
                        window.location.href = "/Patient"
                    }, 1500);
                } else {
                    NotificationManager.error("Fill All Fields", 'error!', 2000);
                }
                setLoading(true)
            }
        }
    }, [loading])

 return  [ PasNumber,Forenames, Surname,   DateOfBirth,  SexCode, HomeTelephoneNumber, NokName,
    NokRelationshipCode,NokAddressLine1,NokAddressLine2, NokAddressLine3,NokAddressLine4,NokPostcode,
    GpCode, GpSurname, GpInitials, GpPhone,onChangePasNumber,onChangeForenames,
    onChangeSurname, onChangeDateOfBirth,onChangeSexCode,onChangHomeTelephoneNumber,onChangeNokName,
    onChangNokRelationshipCode,onChangeNokAddressLine1,onChangeNokAddressLine2,
    onChangeNokAddressLine3,onChangeNokAddressLine4,onChangeNokPostcode,onChangeGpCode,onChangeGpInitials,onChangeGpSurname,
    onChangeGpPhone, loading,onSubmit, isPress]

}

export default AddPatientHook
