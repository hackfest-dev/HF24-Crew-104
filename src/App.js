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
import FarmerProfile from "./Components/FarmerDashboard/FarmerProfile";
import OrdersReceived from "./Components/FarmerDashboard/OrdersReceived";
import FarmerProduct from "./Components/FarmerDashboard/FarmerProduct";
import CustomerHome from "./Components/CustomerDashboard/CustomerHome";
import CustomerProfile from "./Components/CustomerDashboard/CustomerProfile";
import CustomerOrders from "./Components/CustomerDashboard/CustomerOrders";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/schemes" element={<Schemes />}></Route>
        <Route path="orders-received" element={<OrdersReceived />}></Route>
        <Route path="/myproducts" element={<FarmerProduct />}></Route>
        <Route path="/farmer-profile" element={<FarmerProfile />}></Route>
        <Route path="/register" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup/customer" element={<SignupFormCustomer />} />
        <Route path="/signup/farmer" element={<SignupFormFarmer />} />
        <Route path="/reset-password" element={<ResetPassword />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/otpforsignup" element={<SignupOtp />}></Route>
        <Route path="/customer-home" element={<CustomerHome />}></Route>
        <Route path="/customer-profile" element={<CustomerProfile />}></Route>
        <Route path="/customer-orders" element={<CustomerOrders />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
