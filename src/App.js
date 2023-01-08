// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Detail from "./Pages/Detail/Detail";
import Profile from "./Pages/Profile/Profile";

import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/profile"} element={<Profile />}></Route>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/register"} element={<Register />}></Route>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/home"} element={<Home />}></Route>
        <Route path={"/home/detail"} element={<Detail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
