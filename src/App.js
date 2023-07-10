import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header'
import NavBar from './Components/NavBar';
import About from './Components/About';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
  <NavBar/>
  <Header />
  <Home />
  {/* <Routes> */}
    {/* <Route path='/' element={<Home />}/> */}
  {/* //  <Route path="/about" element={<About />}/> */}
  {/* </Routes> */}
    </div>
  );
}

export default App;
