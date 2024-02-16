import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';
import axios from 'axios'
import './login.css'

export default function Signup() {
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" })
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        console.log(credentials);
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:5000/api/createuser",{name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation})
        // const response = await fetch("http://localhost:5000/api/createuser", {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
        // })
        // const json =await response.json();
        // console.log(json);
        navigate("/");
        // if(!json.success){
        //     alert("Enter Valid Credentials")
        // }
    } catch (error) {
        console.error("An error occurred:", error);
    }
    }
    const onChange = (event) => {
        console.log(event.target.value);
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    return (
        <>
        <Navbar/>
            <div className='container-1'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">User Name</label>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputaddress" className="form-label">Address</label>
                        <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} id="exampleInputPassword1" />
                    </div>

                    <button  type='submit'  className=" m-3 btn btn-primary">Submit</button>
                    <Link to="/login" className=" m-3 btn btn-danger">Already a User</Link>
                </form>
            </div>
        </>
    )
}
