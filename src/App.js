// import { Routes } from "react-router-dom";
// import { Route } from "react-router-dom";
// import { Router } from "react-router-dom";
// import Part1 from "./part1";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Part1 />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from "react";
import Part1 from "./part1";
import Part2 from "./part2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/part1" element={<Part1 />}></Route>
        <Route path="/part2" element={<Part2 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
