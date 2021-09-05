// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom"; 
import Home from './components/Home';

function App() {
  return (
    <>
    <BrowserRouter>
    <Route path="/" exact component={Home} />
    </BrowserRouter>
    </>
  );
}

export default App;
