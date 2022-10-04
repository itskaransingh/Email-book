import React from "react";
import Header from "./Components/Header";
import Addpage from "./Components/addpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Emailpage from "./Components/Emailpage"



function App() {

  return (

      <div className="overflow-hidden">
        <Router>
          <Header />
            <Routes>
              <Route exact path="/add" element={<Addpage />} />
              <Route exact path="/" element={<Emailpage />} />
            </Routes>
          
        </Router>
      </div>

  );
}

export default App;
