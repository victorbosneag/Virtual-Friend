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
            <form className="form-chat">
                <label>Username: </label>
                <input type="text"></input>
                <label>message: </label>
                <input></input>
                <button className="btn-primary">send</button>
            </form>
            </div>
        </div>
    )
}

export default Chat