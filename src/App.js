
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LoginSignup/LandingPage";
import LoginForm from "./Components/LoginSignup/LoginForm";
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
