// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom"; 
import Home from './components/Home';
import Register from './components/Register';
import Chat from './components/Chat';

function App() {
  return (
    <>
    <BrowserRouter>
    <Route path="/" exact component={Home} />
    <Route path="/register"exact component={Register} />
    <Route path="/chat" exact component={Chat} />
    </BrowserRouter>
    </>
  );
}

export default App;
