import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { getUsers } from './api'
import { FaEdit } from 'react-icons/fa';
import './style.css'


export const UserList = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            const users = await getUsers()
            setUsers(users)
        }
        fetchUsers()
    }, [])


    return (
    <div className = "container"> 
        <div className = "mt-3">
            <h3> User List</h3>
            <table className = "table table-striped mt-3">
                <thead>
                    <tr>
                        <th> Last Name </th>
                        <th> First Name </th>
                        <th> Middle Name </th>
                        <th> Age </th>
                        <th> Gender </th>
                        <th> Address </th>
                        <th> Email </th>
                        <th> Contact No. </th>
                        <th> Action </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => {
                            return (
                                <tr key={user._id}>
                                       
                                        <td>{user.lastName}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.middleName}</td>
                                        <td>{user.age}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.address}</td>
                                        <td>{user.email}</td>
                                        <td>{user.number}</td>
                                        <td>
                                            <Link to={`/edit/${user._id}`} ><FaEdit style={{ color: '#fcdb03' }} /></Link>
                                        </td>
                                        <td>
                                            <Link to={`/delete/${user._id}`} ><FaTrash style={{ color: '#fc0303' }} /></Link>
                                        </td>
                                    </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
    )
}