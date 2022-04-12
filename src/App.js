import "./App.css";
import Login from "./Components/Login";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import SignUp from "./Components/SignUp";
import ForgotPassword from "./Components/ForgotPassword";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import ChitPlans from "./Components/ChitPlans";
import Auction from "./Components/Auction";
import { useSelector } from "react-redux";
import Header from "./Components/components/Header";
import ErrorPage from "./Components/ErrorPage";
import ChitPlanInfo from "./Components/ChitPlanInfo";
import Payment from "./Components/Payment";
import Careers from "./Components/Careers";
import Apply from "./Components/Careers/Apply";
import OTP from "./Components/OTP";
import ResetPassword from "./Components/ResetPassword";
import ContactUs from "./Components/ContactUs";
import SpineWheel from "./Components/SpineWheel";
function App() {
  const authValue = useSelector((state) => state.auth.user.isLoginIn);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/forgotpassword/otp" element={<OTP />} />
        <Route path="/forgotpassword/resetpassword" element={<ResetPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pagenotfound" element={<ErrorPage />} />
        
      </Routes>
      <Header isAuth={authValue} />
      <Routes>
       
         
        {authValue ? <Route path="/dashboard" element={<Dashboard />} /> :  <Route path="/" index element={<Home />} /> }
        
        <Route
          path="/dashboard/auction"
          element={<Auction isAuth={authValue} />}
        />
        <Route path="/dashboard/chitplans" element={<ChitPlans />} />
        <Route path="/chitplans/chitplaninfo" element={<ChitPlanInfo />} />
        <Route path="/chitplans/payment" element={<Payment />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/career/apply" element={<Apply />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/auction/wheel" element={<SpineWheel />} />
        {/* <Route path="*"  element={<Navigate to="/pagenotfound" />}/> */}
      </Routes>
    </Router>
  );
}

export default App;
