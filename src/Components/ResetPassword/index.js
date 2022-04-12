import { useState } from "react";
import { useNavigate } from "react-router-dom";
import usePasswordValidate from "../../Hooks/getPasswordValidate";
import Input from "../components/Input";
import Popup from "../components/Popup";
import RegButton from "../components/RegButton";

const ResetPassword = () => {
  const logo = require("../../assets/Images/logo.png");
  const navigate = useNavigate()
  const [error, setError] = useState({
    pass: "",
    confPass: "",
  });
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");
  const [isValid, setIsValid] = useState(false);
  const passwordError = usePasswordValidate(password);
  const [showModal , setShowModal] = useState(false)
  const validate = () => {
    let isFormValid = true;
    console.log("insie validate");
    if (!password) {
      isFormValid = false;
      setError((prevState) => ({
        ...prevState,
        pass: "Please enter the password",
      }));
    }
    if (passwordError) {
      isFormValid = false;
      setError((prevState) => ({
        ...prevState,
        pass: passwordError,
      }));
    }
    if (!confPass) {
      isFormValid = false;
      setError((prevState) => ({
        ...prevState,
        confPass: "Please enter confirmed password",
      }));
    }
    if (confPass && password !== confPass) {
        isFormValid = false;
        setError((prevState) => ({
          ...prevState,
          confPass: "Password and confirmed password must be same",
        }));
      }
    setIsValid(isFormValid);
    return isFormValid;
  };
  const passwordChange = async (e) => {
    e.preventDefault();
    if (validate() && !passwordError) {
      console.log("form submitted");
      setShowModal(true)
    }
  };
  return (
    <div className="login-signup-forgot-div">
      <form className="mainForm" onSubmit={passwordChange}>
        <div className="logo font-s-18 font-w-700">
          <img src={logo} />
        </div>

        <Input
          category="password"
          placeholder="New password"
          borderColor="#1B9CFC"
          error={error.pass !== "" && !isValid}
          errorMsg={error.pass}
          onUpdate={(e) => {
            setPassword(e.target.value);
            e.target.value.length <= 0
            ? setError((prevState) => ({
                ...prevState,
                pass: "Please enter password",
              }))
            : setError((prevState) => ({
                ...prevState,
                pass: "",
              }));
        
            // passwordError ? setError(passwordError) : setError("");
          }}
        />
        <Input
          category="password"
          placeholder="Confirm new password"
          borderColor="#1B9CFC"
          error={error.confPass !== "" && !isValid}
          errorMsg={error.confPass}
          onUpdate={(e) => {
            setConfPass(e.target.value);
            e.target.value.length <= 0
            ? setError((prevState) => ({
                ...prevState,
                confPass: "Please enter confirmed password",
              }))
            : setError((prevState) => ({
                ...prevState,
                confPass: "",
              }));
          }}
        />
        <div className="mt-13">
          <RegButton
            btnHeight="50px"
            name="Reset password"
            onClick={() => {
              //   navigate("/forgotpassword/resetpassword");
            }}
            bgColor="#1B9CFC"
            txtColor="#fff"
            type="submit"
            borderRad="5"
          />
        </div>
        <div className="mt-13">
          <RegButton
            btnHeight="50px"
            name="Cancel"
            onClick={() => {
              //   navigate("/forgotpassword/resetpassword");
            }}
            bgColor="#FF8C5D"
            txtColor="#fff"
            borderRad="5"
          />
        </div>
      </form>
      {showModal && (
        <Popup
          message="Your password is updated successfully."
          width={435}
          height={179}
          btnName="Login"
          orangeBg={true}
          onClick={() =>
            {navigate('/login');setShowModal(false)}
          }
        />
      )}
    </div>
  );
};

export default ResetPassword;
