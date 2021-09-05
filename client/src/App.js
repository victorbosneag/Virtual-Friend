// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom"; 
import Home from './components/Home';
import Register from './components/Register';
import Chat from './components/Chat';
import Login from './components/Login'
import Assistants from './components/Assistants';

function App() {
  return (
    <>
    <BrowserRouter>
    <Route path="/" exact component={Home} />
    <Route path="/register"exact component={Register} />
    <Route path="/login"exact component={Login} />
    <Route path="/chat" exact component={Chat} />
    <Route path="/assistants" exact component={Assistants} />
    </BrowserRouter>
    </>
  );
}

export default App;
