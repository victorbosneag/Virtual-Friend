import NavBar from "./Nav";
import logo from '../whitelogo.png'
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom'

function Contact() {
    


    return(
        <div className="Body">
            <NavBar />
            <div className="form-wrapper">
            <div className="form-container">
            <form className="form">
                <div className="log-wrapper">
                <img className="logo-register" src={logo}></img>
                </div>
                <label for="input-username" className="register-form email label-username">Email: </label>
                <input type="email" className=" register-form username input-username"  name="email"></input>
                <label for="input-password" className=" register-form password label-password">Message: </label>
                <input type="text" className="register-form password input-password"  name="message"></input>
                <div className="btn-wrapper">
                    <Link  to='/login'>
                    <Button type="submit" className="front-reg-btn " variant="primary">Register</Button>
                     </Link>
        </div>
            </form>
            </div>
        </div>
        </div>
    )
}

export default Contact