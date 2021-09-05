import NavBar from "./Nav";
import logo from '../whitelogo.png'
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios";
function Register() {
        const [registerUsername, setRegisterUsername] = useState('')
        const [registerPassword, setRegisterPassword] = useState('')
        
     
     const register = () => {
         axios.post('http://localhost:5000/signup', {
             username: registerUsername,
             password: registerPassword
       })
     }
     
        function userSubmit(event) {
         console.log(event.target.value)
     }
    return(
        <div className="Body">
            <NavBar />
            <div className="form-wrapper">
            <div className="form-container">
            <form className="form">
                <div className="log-wrapper">
                <img className="logo-register" src={logo}></img>
                </div>
                <label for="input-username" className="register-form username label-username">Username: </label>
                <input className=" register-form username input-username" onChange={userSubmit} name="username"></input>
                <label for="input-password" className=" register-form password label-password">Password: </label>
                <input type="password" className="register-form password input-password" onChange={userSubmit} name="password"></input>
                <div className="btn-wrapper">
                    <Link  to='/login'>
                    <Button onClick={register} type="submit" className="front-reg-btn " variant="primary">Register</Button>
                     </Link>
        </div>
            </form>
            </div>
        </div>
        </div>
    )
}
export default Register