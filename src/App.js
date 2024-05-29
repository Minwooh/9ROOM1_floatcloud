import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeMain from "./pages/HomeMain";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="homemain" element={<HomeMain />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
