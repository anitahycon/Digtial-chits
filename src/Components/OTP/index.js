import Form from "../components/Form";
import { useLocation, useNavigate, withRouter } from "react-router-dom";
import "../../Utils/Layout.css";
import { useEffect, useState } from "react";
import useEmailValidate from "../../Hooks/getEmailValidate";
import Input from "../components/Input";
import RegButton from "../components/RegButton";
import { Config } from "../../Config";
import Popup from "../components/Popup";
import "./index.css";
const OTP = () => {
  const logo = require("../../assets/Images/logo.png");
  const [OTP, setOTP] = useState("");
  const { state } = useLocation();

  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validate = () => {
    let isFormValid = true;
    if (!OTP) {
      isFormValid = false;
      setError("Please enter OTP");
    }
    setIsValid(isFormValid);
    return isFormValid;
  };
  const verifyOTP = async (e) => {
    e.preventDefault();
    if (validate() && !isValid) {
      navigate("/forgotpassword/resetpassword");
    }
  };
  const [countDown, setCountDown] = useState(60 * 2);
  const [runTimer, setRunTimer] = useState(true);

  useEffect(() => {
    let timerId;
    if (runTimer) {
      timerId = setInterval(() => {
        setCountDown((countDown) => countDown - 1);
      }, 1000);
    } else {
      clearInterval(timerId);
    }
    return () => clearInterval(timerId);
  }, [runTimer]);
  const seconds = String(countDown % 60).padStart(2, 0);
  const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);
  useEffect(() => {
    if (countDown < 0 && runTimer) {
      console.log("expired");
      setRunTimer(false);
      setCountDown(0);
    }
  }, [countDown, runTimer, minutes, seconds]);
  
  return (
    <div className="login-signup-forgot-div">
      <form className="mainForm" onSubmit={verifyOTP}>
        <div className="logo font-s-18 font-w-700">
          <img src={logo} />
        </div>
        <p className="font-s-20 font-w-500 forgot-password-info mt-13 text-center">
          Enter OTP received in your email inbox.
          <br />
        </p>
        <span className="text-center">{state.email}</span>
        <Input
          category="number"
          placeholder="Enter OTP"
          borderColor="#1B9CFC"
          error={error !== "" && !isValid}
          errorMsg={error}
          onUpdate={(e) => {
            setOTP(e.target.value);
            e.target.value.length <= 0
              ? setError("Please enter OTP")
              : setError("");
            e.target.value.length > 7
              ? setError("OTP should not be more than 6 digits")
              : setError("");
          }}
        />
        <div className="timer error font-w-700">
          {minutes}:{seconds}
        </div>
        <div className={"w-25 float-right mb-10 " + (error ? "mt-n1" : "")}>
          <RegButton
            fontSize={14}
            fontWt={700}
            btnHeight={15}
            name="Resend OTP"
            onClick={() => {navigate("/forgotpassword");}}
            bgColor="#fff"
            txtColor="#1B9CFC"
            borderRad="5"
          />
        </div>
        <div>
          <RegButton
            btnHeight="50px"
            name="Verify OTP"
            bgColor="#1B9CFC"
            txtColor="#fff"
            type="submit"
            borderRad="5"
          />
        </div>
      </form>
    </div>
  );
};
export default OTP;
