import NavBar from "./Nav"
import bluelogo from '../blue-logo.png'
import axios from "axios"
function Chat() {
    const message = () => {
        axios.get('http://localhost:5000/signup', {
            message: ''
      })
    }
    return(
        <div className="Body">
            <NavBar />
            <div className="img-div">
            <img src={bluelogo}></img>
            </div>
            <div className="chat-div-wrapper">
            <div className="chat-div">

            </div>
            </div>
        </div>
    )
}

export default Chat