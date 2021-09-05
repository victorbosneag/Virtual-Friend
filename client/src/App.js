// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom"; 
import Home from './components/Home';
import Register from './components/Register';

function App() {
  return (
    <>
    <BrowserRouter>
    <Route path="/" exact component={Home} />
    <Route path="/register"exact component={Register} />
    </BrowserRouter>
    </>
  );
}

export default App;
