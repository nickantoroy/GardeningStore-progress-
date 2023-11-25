import Home from "./Home";
import Logic from "./Components/Login-Register/Logic";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login-register" element={<Logic/>}></Route>
    </Routes>
    </>
  )
}

export default App