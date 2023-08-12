import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../Redux/Actions/AuthoAction';
import { NotificationManager } from 'react-notifications';

const Loginhook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(true)
    const [isPress, setIsPress] = useState(false)
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onSubmit = async () => {
        setIsPress(true)
        setLoading(true)
        await dispatch(loginUser({
            Username:email,
            Password: password
        }))

        setLoading(false)
        setIsPress(false)
    }
    const res = useSelector(state => state.autho.loginUser)
    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res)
                debugger;
                if (res.data.requestStatus === 200 && res.data.data.token) {
                    localStorage.setItem("token", res.data.data.token)
                    NotificationManager.success('Logged in successfully', 'success!', 2000);
                    setTimeout(() => {
                        window.location.href = "/"
                    }, 1500);
                } else {
                    localStorage.removeItem("token")
                }

                if (res.data.requestStatus === 401) {
                    localStorage.removeItem("token")
                   NotificationManager.error('Wrong username and password', 'error!', 2000);
                }
                setLoading(true)
            }
        }
    }, [loading])

    return [email, password, loading, onChangeEmail, onChangePassword, onSubmit, isPress]

}

export default Loginhook
