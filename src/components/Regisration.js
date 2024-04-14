import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './Regisration.css'

function Regisration() {
    const history=useNavigate();

    const [name,setName]=useState('');

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const [dob,setDob]=useState('');
    async function submit(e){
        e.preventDefault();

        try{

            //await axios.post("http://localhost:8000/signup",
            await axios.post("http://localhost:8000/regisration",
            {
                name,email,password,dob
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    history("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">

            <h1>Regisration</h1>

            <form action="POST">
                <input className="registrationForm" type="text"  onChange={(e) => { setName(e.target.value) }} placeholder="Enter Name" />

                <input className="registrationForm" type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input className="registrationForm" type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                
                <input className="registrationForm" type="date" onChange={(e) => { setDob(e.target.value) }}></input>
                <input id="submitButton" type="submit" onClick={submit} />
            </form>

            <br />
            <p>OR</p>
            <br />
            <Link to="/">Login Page</Link>
        </div>
    )
}

export default Regisration