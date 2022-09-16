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
          <Route exact path="/my-react-project-1/Login" element={<Login/>}></Route>
          <Route exact path="/my-react-project-1/Lib" element={<TestScroll/>}></Route>
          <Route exact path="/my-react-project-1/Logout" element={<Home/>}></Route>
          <Route exact path="/my-react-project-1/TestScroll" element={<TestScroll/>}></Route>
       </Routes>
       </div>
     </Router>
    </React.Fragment>

  );
}

export default App;
