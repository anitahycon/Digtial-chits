import Form from "../components/Form";
import { useNavigate, withRouter } from "react-router-dom";
import "../../Utils/Layout.css";
import { useState } from "react";
import useEmailValidate from "../../Hooks/getEmailValidate";
import Input from "../components/Input";
import RegButton from "../components/RegButton";
import { Config } from "../../Config";
import Popup from "../components/Popup";
const ForgotPassword = () => {
  const logo = require("../../assets/Images/logo.png");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);
  let emailResult = useEmailValidate(email);
  const apiInfo = {
    method: "POST",
    headers: {
      Accept: "application/json,",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  };
  const [showModal, setShowModal] = useState(false);
  const [redirectOTP, setRedirectOTP] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");
  const sendInstructionClick = async (e) => {
    e.preventDefault();
    if (validate() && !emailResult && !isValid) {
      await fetch(Config.API_URL + Config.API.FORGOT_PASSWORD, apiInfo)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "10007") {
            setPopupMsg(
              "There was no account in our records on this mail id.Please re-check and try again."
            );
            setShowModal(true);
            setRedirectOTP(false);
          } else {
            setShowModal(true);
            setPopupMsg("OTP send on your mail please check");
            setRedirectOTP(true);
          }
        });
      // navigate("/login");
    }
  };
  const validate = () => {
    let isFormValid = true;
    if (!email) {
      isFormValid = false;
      setError("Please enter valid email");
    }
    if (emailResult) {
      isFormValid = false;
      setError(emailResult);
    }
    setIsValid(isFormValid);

    return isFormValid;
  };
  return (
    <div className="login-signup-forgot-div">
      <form className="mainForm" onSubmit={sendInstructionClick}>
        <div className="logo font-s-18 font-w-700">
          <img src={logo} />
        </div>
        <p className="font-s-16 forgot-password-info mt-13">
          Enter the email address you used when you  joined and we’ll send
          you instructions to reset  your password.
        </p>
        <Input
          category="email"
          placeholder="Email Address"
          borderColor="#1B9CFC"
          error={error !== "" && !isValid}
          errorMsg={error}
          onUpdate={(e) => {
            setEmail(e.target.value);
            e.target.value.length <= 0
              ? setError("Please enter valid email")
              : setError("");
          }}
        />
        <div className="my-1em">
        <RegButton
          btnHeight="50px"
          name="Send Reset Instructions"
          onClick={() => {}}
          bgColor="#1B9CFC"
          txtColor="#fff"
          type="submit"
          borderRad="5"
        />
        </div>
       
      </form>
      {showModal && (
        <Popup
          message={popupMsg}
          width={563}
          height={317}
          btnName="Ok"
          orangeBg={true}
          onClick={() =>
            redirectOTP
              ? navigate("/forgotpassword/otp", { state: { email : email }})
              : setShowModal(false)
          }
        />
      )}
    </div>
  );
};
export default ForgotPassword;
