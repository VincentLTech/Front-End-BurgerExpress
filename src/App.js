import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Home from "./components/Home";
import Menu from "./components/Menu";

function App() {
  return (
    
    <BrowserRouter>
      <NavBar />
    
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
