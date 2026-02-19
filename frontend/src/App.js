import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* login page */}
        <Route path="/" element={<Login />} />

        {/* register page */}
        <Route path="/register" element={<Register />} />

        {/* netMirror page */}
        <Route path="/home" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
