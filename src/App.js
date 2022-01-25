
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from  './components/Home'
import NavBar from './components/NavBar'
import Menu from './components/Menu'

function App() {
  return (
  <BrowserRouter>
    <NavBar />

    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Menu" element={<Menu />} />
      

    </Routes>
</BrowserRouter>
  );
}

export default App;
