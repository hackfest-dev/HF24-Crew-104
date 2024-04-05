import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LoginSignup/LandingPage";
import LoginForm from "./Components/LoginSignup/LoginForm";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
