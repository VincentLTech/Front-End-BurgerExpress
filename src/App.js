import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import Logout from "./components/Logout";

function App() {
  // const isLoggedIn = async (req, res, next) => {
  //   try {
  //     console.log("IN GATEKEEPING");
  //     const user = await User.findOne({
  //       where: {
  //         firebaseUserId: req.headers.authorization,
  //       },
  //     });
  //     if (user) {
  //       req.user = user;
  //       next();
  //     } else {
  //       return res.status(404).send("Please log in!");
  //     }
  //   } catch (error) {
  //     next(error);
  //   }
  // };
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/logout" element={<Logout />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
