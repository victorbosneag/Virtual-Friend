import NavBar from "./Nav";
import logo from '../whitelogo.png'
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom'

function Login() {
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
                <input className=" register-form username input-username"></input>
                <label for="input-password" className=" register-form password label-password">Password: </label>
                <input type="password" className="register-form password input-password"></input>
                <div className="btn-wrapper">
                    <Link  to='/login'>
                    <Button type="submit" className="front-reg-btn " variant="primary">Login</Button>
                     </Link>
        </div>
            </form>
            </div>
        </div>
        </div>
    )
}

export default Login