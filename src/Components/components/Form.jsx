import Input from "../components/Input";
import Button from "./Button";
import "./common.css";
import '../Common.css'
import "../../Utils/Fonts.css";
const Form = (props) => {
  const {
    blueBtnName,
    orangeBtnName,
    onLoginSubmit,
    onSignUpSubmit,
    onForgetPasswordSubmit,
    isError,
    errorMsg
  } = props;
  const logo = require("../../assets/Images/logo.png"); 
  return (
    <div className="mainForm">
      <div className="logo font-s-18 font-w-700">
        <img src={logo} />
      </div>
      {blueBtnName === "Send Reset Instructions" && (
        <p className="font-s-16 forgot-password-info">
          Enter the email address you used when you <br /> joined and we’ll send
          you instructions to reset <br /> your password.
        </p>
      )}
      {props.fields.map((items, index) => (
        
        <div key={index}>
          <Input
            category={items.category}
            placeholder={items.placeholder}
            onUpdate={items.onUpdate}
            error={isError}
            errorMsg={errorMsg}
          />
          {items.errorMsg && <p className="error mt-n10 mb-5">{items.errorMsg}</p>}
        </div>
      ))}
      <Button
        name={blueBtnName}
        onClick={
          blueBtnName === "Login" || blueBtnName === "Send Reset Instructions"
            ? onLoginSubmit
            : onSignUpSubmit
        }
        orangeBg={false}
      />
      {blueBtnName === "Login" && (
        <button
          onClick={onForgetPasswordSubmit}
          className="forgot-pass font-s-14"
        >
          Forgot Password?
        </button>
      )}
      {blueBtnName !== "Send Reset Instructions" && (
        <p className="text-between-line ">
          {blueBtnName === "Login"
            ? "Create an account"
            : "Already have an account"}
        </p>
      )}
      {blueBtnName !== "Send Reset Instructions" && (
        <Button
          name={orangeBtnName}
          onClick={orangeBtnName === "SignUp" ? onSignUpSubmit : onLoginSubmit}
          orangeBg={true}
        />
      )}
    </div>
  );
};
export default Form;
