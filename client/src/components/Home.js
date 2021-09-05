import NavBar from "./Nav";
import logo from '../assist (4).png'
import { Button } from "react-bootstrap";

function Home() {
    return(
    <div className="Body">
        <NavBar />
        <div className="centered">
        <img src={logo}></img>
        </div>
        <div className="btn-wrapper">
        <Button type="button" className="front-reg-btn " variant="primary">Register</Button>
        </div>
        
    </div>
    )
}

export default Home;