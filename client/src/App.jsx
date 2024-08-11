import { Login } from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./components/Signup/Signup";
import { HomePage } from "./pages/HomePage/HomePage";

function App() {
  const base_url = "http://localhost:8080";
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup base_url={base_url} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
