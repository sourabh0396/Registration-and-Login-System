import React from "react"
import {useLocation, Link, useNavigate} from 'react-router-dom';
import Table from "./Table";

function Home (){
    const location=useLocation()

    return (
        <div className="homepage">

            {/* <h1>Hello {location.state.id} and welcome to the home</h1> */}
            <div className="d-flex justify-content-end">
                <Link to="/signup" className=" bi bi-person-fill btn btn-warning  w-25 d-flex justify-content-center m-4"><span className="bi bi-person text-white"></span>Log Out</Link>
                
            </div>
            <Table/>
            

        </div>
    )
}

export default Home