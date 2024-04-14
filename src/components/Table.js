import axios from "axios";
import { useEffect, useState } from "react";
import './Table.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Table(){
    const[users,setUsers]=useState([])
    useEffect(()=>{
        // axios.get('http://localhost:27017/login-registration-system/collection')
        axios.get('http://localhost:8000/getUsers')
        .then(users=> setUsers(users.data))
        .catch(err => console.log(err))
    },[])

    return(
        <div className="w-100 d-flex justify-content-center align-items-center">
            <div className="w-75">
                <table className="table table-striped">
                    <thead className="tablehead">
                        <tr class="table-dark">
                            <th>ID</th>
                            <th>Name</th>
                            <th>Date Created</th>
                            <th>Role</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return <tr key={index}>
                                    <td class="table-danger">{user.Id}</td>
                                    <td class="table-info">{user.Name}</td>
                                    <td class="table-warning">{user.DateCreated}</td>
                                    <td lass="table-light">{user.Role}</td>
                                    <td class="table-primary">{user.Status}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
