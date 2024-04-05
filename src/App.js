import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LoginSignup/LandingPage";
import LoginForm from "./Components/LoginSignup/LoginForm";
import Home from "./Components/Home";
import SignupFormFarmer from "./Components/LoginSignup/SignUpFormFarmer";
import SignupFormCustomer from "./Components/LoginSignup/SignUpFormCustomer";
import ForgotPassword from "./Components/LoginSignup/ForgotPassword";
import ResetPassword from "./Components/LoginSignup/ResetPassword";
import SignupOtp from "./Components/LoginSignup/SignupOtp";
import Schemes from "./Components/FarmerDashboard/Schemes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup/farmer" element={<SignupFormFarmer />}></Route>
        <Route path="/signup/customer" element={<SignupFormCustomer />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/reset-password" element={<ResetPassword />}></Route>
        <Route path="/otpforsignup" element={<SignupOtp />}></Route>
        <Route path="/schemes" element={<Schemes />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
