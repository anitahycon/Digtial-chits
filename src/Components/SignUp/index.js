import Form from "../components/Form";
// import { withRouter } from "react-router-dom";
import "../../Utils/Layout.css";
import { useState } from "react";
import Popup from "../components/Popup";
import useNameValidate from "../../Hooks/getUserNameValidate";
import useEmailValidate from "../../Hooks/getEmailValidate";
import usePasswordValidate from "../../Hooks/getPasswordValidate";
import  {useNavigate}  from "react-router-dom";
import { Config } from "../../Config";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [validUser, setValidUser] = useState(false);
  const [inValidUser, setInValidUser] = useState(false);

  const emailError = useEmailValidate(email);
  const passwordError = usePasswordValidate(password);
  const nameError = useNameValidate(userName);

  let text = [
    "An account already exists on this mail id",
    <br />,
    "please try to login",
    <br />,
    <br />,
    "(OR)",
    <br />,
    <br />,
    "Create an account with different",
    <br />,
    "mail id",
  ];
  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const getUserName = (e) => {
    setUserName(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };
  const loginClick = () => {
    navigate('/login')
    // history.push("/login");
  };
  const apiInfo = {
    method: "POST", 
    body: JSON.stringify({
      username: userName,
      email: email,
      password: password,
    }),
  };
  const alreadyExist = () => {
    setShowModal(false);
  };
  const signUpClick = () => {
    if (
      !emailError &&
      !passwordError &&
      !nameError &&
      email &&
      userName &&
      password
    ) {
      fetch(
        Config.API_URL + Config.API.SIGN_UP,
        apiInfo
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("signup--",data)
          if (data.status === "10001") {
            setShowModal(true);
            setInValidUser(true);
          } else if (data.status === "10002") {
            setShowModal(true);
            setValidUser(true);
          }
        });
    }
  };
  return (
    <div className="login-signup-forgot-div">
      <Form
        blueBtnName="SignUp"
        orangeBtnName="Login"
        onLoginSubmit={loginClick}
        onSignUpSubmit={signUpClick}
        fields={[
          {
            category: "email",
            placeholder: "Email",
            name: "",
            onUpdate: getEmail,
            errorMsg: emailError,
          },
          {
            category: "text",
            placeholder: "Username",
            name: "",
            onUpdate: getUserName,
            errorMsg: nameError,
          },
          {
            category: "password",
            placeholder: "Password",
            name: "",
            onUpdate: getPassword,
            errorMsg: passwordError,
          },
        ]}
      />
      {/* modal */}
      {showModal && validUser && (
        <Popup
          picture={require("../../assets/Images/checkMark.png")}
          title="Thank you."
          message="Successfully created your account."
          width={354}
          height={302}
          btnName="Login"
          orangeBg={true}
          onClick={() => navigate("/login")}
        />
      )}
      {showModal && inValidUser && (
        <Popup
          message={text}
          width={563}
          height={317}
          btnName="Ok"
          orangeBg={false}
          onClick={alreadyExist}
        />
      )}
    </div>
  );
};
export default SignUp;
