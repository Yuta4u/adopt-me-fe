// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Detail from "./Components/Detail/Detail";

import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Router>
      <Routes>
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
