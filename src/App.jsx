import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/home/About";
import Login from "./pages/authentication/Login";
import SignUp from "./pages/authentication/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;