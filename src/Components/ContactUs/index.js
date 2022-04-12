import { useState } from "react";
import useEmailValidate from "../../Hooks/getEmailValidate";
import Footer from "../components/Footer";
import Input from "../components/Input";
import RegButton from "../components/RegButton";
import "./index.css";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNo: "",
    message: "",
    aggree: "",
  });
  const [msgErr, setMsgErr] = useState("");
  const [error, setError] = useState({
    nameErr: "",
    emailErr: "",
    mobileNoErr: "",
    aggreeErr: "",
  });
  let emailResult = useEmailValidate(formData.email);
  let pattern = /^([a-z]+\s)*[a-z]+$/;
  let nameResult = pattern.test(formData.name);
  const [isValid, setIsValid] = useState(false);
  const validate = () => {
    
    let isFormValid = true;
    if (!formData.name) {
      isFormValid = false;
      setError((prevState) => ({
        ...prevState,
        nameErr: "Please enter name",
      }));
    }
    if (!nameResult) {
      isFormValid = false;
      setError((prevState) => ({
        ...prevState,
        nameErr: "Please use only letters and spaces",
      }));
    }
    if (!formData.email) {
      isFormValid = false;
      setError((prevState) => ({
        ...prevState,
        emailErr: "Please enter email",
      }));
    }
    if (emailResult) {
      isFormValid = false;
      setError((prevState) => ({
        ...prevState,
        emailErr: emailResult,
      }));
    }
    if (!formData.mobileNo) {
      isFormValid = false;
      setError((prevState) => ({
        ...prevState,
        mobileNoErr: "Please enter mobile number",
      }));
    }
    if (!formData.message) {
      isFormValid = false;
      setMsgErr("Please type your message in the above box");
    }
    if (!formData.aggree) {
      isFormValid = false;
      setError((prevState) => ({
        ...prevState,
        aggreeErr: "Please select checkbox",
      }));
    }
    setIsValid(isFormValid);
    return isFormValid;
  };

  const saveData = async (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("form submitted", formData);
    }
  };
  const getMessage = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      message: e.target.value,
    }));
    setMsgErr("");
  };
  const aggreeHandler = (e) => {
    
    setError((prevState) => ({
      ...prevState,
      aggreeErr: "",
    }));
    setFormData((prevState) => ({
      ...prevState,
      aggree: e.target.checked,
    }));
  };
  return (
    <div className="wrapper">
      <div className="content main-100 mb-50">
        <div className="contactForm">
          <p className="orange-txt font-s-38 font-w-700 left-txt">
            Get in Touch
          </p>
          <form onSubmit={saveData}>
            <div className="d-flex">
              <div className="flex-1 ">
                <Input
                  category="text"
                  placeholder="Full Name"
                  borderColor="#1B9CFC"
                  error={error.nameErr !== "" && !isValid}
                  errorMsg={error.nameErr}
                  onUpdate={(e) => {
                    setFormData((prevState) => ({
                      ...prevState,
                      name: e.target.value,
                    }));

                    e.target.value.length <= 0
                      ? setError((prevState) => ({
                          ...prevState,
                          nameErr: "Please enter name",
                        }))
                      : setError((prevState) => ({
                          ...prevState,
                          nameErr: "",
                        }));
                  }}
                />
                <Input
                  category="email"
                  placeholder="Email Address"
                  borderColor="#1B9CFC"
                  error={error.emailErr !== "" && !isValid}
                  errorMsg={error.emailErr}
                  onUpdate={(e) => {
                    setFormData((prevState) => ({
                      ...prevState,
                      email: e.target.value,
                    }));

                    e.target.value.length <= 0
                      ? setError((prevState) => ({
                          ...prevState,
                          emailErr: "Please enter email",
                        }))
                      : setError((prevState) => ({
                          ...prevState,
                          emailErr: "",
                        }));
                  }}
                />
                <Input
                  category="number"
                  placeholder="Mobile Number"
                  borderColor="#1B9CFC"
                  error={error.mobileNoErr !== "" && !isValid}
                  errorMsg={error.mobileNoErr}
                  onUpdate={(e) => {
                    setFormData((prevState) => ({
                      ...prevState,
                      mobileNo: e.target.value,
                    }));

                    e.target.value.length <= 0
                      ? setError((prevState) => ({
                          ...prevState,
                          mobileNoErr: "Please enter mobile no",
                        }))
                      : e.target.value.length > 10
                      ? setError((prevState) => ({
                          ...prevState,
                          mobileNoErr:
                            "Please enter only 10 digit mobile number",
                        }))
                      : setError((prevState) => ({
                          ...prevState,
                          mobileNoErr: "",
                        }));
                  }}
                />
                <div className="my-1em">
                  <textarea
                    className="pinCodeBorder mesgTxtArea font-s-18"
                    placeholder="Message"
                    onChange={(e) => getMessage(e)}
                  />
                  {msgErr && <p className="error">{msgErr}</p>}
                </div>
                <div className="d-flex ">
                  <input
                    type="checkbox"
                    className="square-24"
                    name="agree"
                    value="agree"
                    onClick={(e) => {
                      aggreeHandler(e);
                    }}
                  />
                  <label for="aggree" className="ml-10">
                    I aggree that my submitted data is belong collected and
                    stored.
                  </label>
                </div>
                {error.aggreeErr !== "" && (
                  <p className="error">{error.aggreeErr}</p>
                )}
                <div className="mt-13 w-100">
                  <RegButton
                    fontSize={14}
                    fontWt={700}
                    btnHeight={50}
                    name="Submit"
                    onClick={() => {}}
                    bgColor="#FEA47F"
                    txtColor="#fff"
                    type="submit"
                    borderRad="5"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
