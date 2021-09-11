import React from 'react'
import { RegForm } from './RegForm';
import { userReg } from './api'
import { useHistory } from 'react-router-dom';
import './style.css'

export const UserReg = () => {
    const history = useHistory()
    const onSubmit = async (data) => {
        const obj = await userReg(data)
        console.log(obj)
        history.push("/")
    }
    return (
        <div className="container reg-container">
            <div className="mt-4 form-container">
                <div className="title">
                    <h4>Register User</h4>
                </div>
                <RegForm onSubmit = {onSubmit}/>
            </div>
        </div>
    )
}