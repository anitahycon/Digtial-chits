import Form from "../components/Form";
import { useNavigate, withRouter } from "react-router-dom";
import "../../Utils/Layout.css";
import { useState } from "react";
import useEmailValidate from "../../Hooks/getEmailValidate";
const ForgotPassword = () => {
  const [email, setEmail] = useState(""); 
  const emailError = useEmailValidate(email);
  const navigate = useNavigate();
  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const sendInstructionClick = () => {
     if (!emailError && email) {
      navigate('/login')
      // history.push("/login");
    }
  };
  return (
    <div className="login-signup-forgot-div">
      <Form
        blueBtnName="Send Reset Instructions"
        onLoginSubmit={sendInstructionClick}
        fields={[
          {
            category: "email",
            placeholder: "Email Address",
            name: "",
            onUpdate: getEmail,
            errorMsg: emailError,
          },
        ]}
      />
    </div>
  );
};
export default ForgotPassword;
