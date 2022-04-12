import Form from "../components/Form";
import "../../Utils/Layout.css";
import { useEffect, useState } from "react";
import useEmailValidate from "../../Hooks/getEmailValidate";
import usePasswordValidate from "../../Hooks/getPasswordValidate";
import Popup from "../components/Popup";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { login, profilePicUrl } from "../../Features/Auth/AuthSlice";
import LoaderPopup from "../components/LoaderPopup";
import { Config } from "../../Config";

const Login = () => {
  // console.log(props)
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailError = useEmailValidate(email);
  const passwordError = usePasswordValidate(password);
 
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  let passwordMisMatch = "Password mismatch";
  let noAccount = [
    "No account registered with this mail id.",
    <br />,
    "Please try to login with registered mail id.",
    <br />,
    <br />,
    "(OR)",
    <br />,
    <br />,
    "Create a new account with this mail id.",
  ];
  const [isLoading, setIsLoading] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");
  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };
  const apiInfo = {
    method: "POST",
    headers: {
      Accept: "application/json,",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  };
  const profilePicAPI = {
    method: "GET",
  };
  const getProfilePicUrl = async (data) => {
    await fetch(String(data.profilePicUrl), profilePicAPI)
      .then((response) => response.text())
      .then((picData) => dispatch(profilePicUrl(picData)));
  };
  const loginClick = async () => {
    setIsLoading(true);
    if (!emailError && !passwordError && email && password) {
      await fetch(Config.API_URL + Config.API.LOGIN, apiInfo)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "10005") {
            dispatch(login(data.data));
            getProfilePicUrl(data.data);
            navigate("/dashboard");
          } else if (data.status === "10004") {
            setShowModal(true);
            setPopupMsg(passwordMisMatch);
            setEmail("");
            setPassword("");
          } else if (data.status === "10003") {
            setShowModal(true);
            setPopupMsg(noAccount);
            setEmail("");
            setPassword("");
          }
          setIsLoading(false);
        });
    }
  };
  const signUpClick = () => {
    navigate("/signUp");
  };
  const forgetPasswordClick = () => {
    navigate("/forgotpassword");
  };

  return (
    <div>
      <div className="login-signup-forgot-div">
        <Form
          blueBtnName="Login"
          orangeBtnName="SignUp"
          onLoginSubmit={loginClick}
          onSignUpSubmit={signUpClick}
          onForgetPasswordSubmit={forgetPasswordClick}
          dividerMessage=""
          fields={[
            {
              category: "email",
              placeholder: "Email",
              name: "",
              onUpdate: getEmail,
              isError : emailError,
              errorMsg: emailError,
            },
            {
              category: "password",
              placeholder: "Password",
              name: "",
              onUpdate: getPassword,
              isError : passwordError,
              errorMsg: passwordError,
            },
          ]}
        />
      </div>
      ){isLoading && <LoaderPopup />}
      {showModal && (
        <Popup
          message={popupMsg}
          width={563}
          height={317}
          btnName="Ok"
          orangeBg={true}
          onClick={() => setShowModal(false)}
        />
      )}
    </div>
  );
};
export default Login;
