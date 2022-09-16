import React from "react";
import Home from "./Components/Home";
import Login from "./Components/Login";
import TestScroll from "./Components/TestScroll";
import Header from "./Components/Header";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <React.Fragment>
     <Router>
       <div>
       <Header/>
       <Routes>
        <Route exact path="/my-react-project-1/" element={<Home/>}></Route>
          <Route exact path="/Login" element={<Login/>}></Route>
          <Route exact path="/Lib" element={<TestScroll/>}></Route>
          <Route exact path="/Logout" element={<Home/>}></Route>
          <Route exact path="/TestScroll" element={<TestScroll/>}></Route>
       </Routes>
       </div>
     </Router>
    </React.Fragment>

  );
}

export default App;
