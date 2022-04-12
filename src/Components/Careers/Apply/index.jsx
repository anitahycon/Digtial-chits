import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../../components/Button";
import DropDown from "../../components/DropDown";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import RegButton from "../../components/RegButton";

const Apply = () => {
  const { state } = useLocation();
  const { positionName, overview, description } = state;

  const newArr = [];

  const [careerData, setCareerData] = useState([
    {
      userName: "",
      phoneNo: "",
      email: "",
      positionName: positionName,
      resume: "",
    },
  ]);
  const [error, setError] = useState({
    userNameErr: "",
    phoneNoErr: "",
    emailErr: "",
    resumeErr: "",
  });
  const [isValid, setIsValid] = useState(false);
  const getJobDescription = () => {
    for (var i = 0; i < description.length; i++) {
      newArr.push(description[i].name);
    }
    return (
      <ul className="mt-13 font-s-24 lght-blc-txt ml-20">
        {newArr.map((list, i) => (
          <li key={i}>{list}</li>
        ))}
      </ul>
    );
  };

  const validate = () => {
    let isFormValid = true;
    if (!careerData.userName) {
      isFormValid = false;
      setError((prevState) => ({
        ...prevState,
        userNameErr: "Please enter user name",
      }));
    }
    if (!careerData.email) {
      isFormValid = false;
      setError((prevState) => ({
        ...prevState,
        emailErr: "Please enter email",
      }));
    }
    if (!careerData.phoneNo) {
      isFormValid = false;
      setError((prevState) => ({
        ...prevState,
        phoneNoErr: "Please enter contact number",
      }));
    }
    if (!careerData.resume) {
      isFormValid = false;
      setError((prevState) => ({
        ...prevState,
        resumeErr: "Please upload resume",
      }));
    }
    setIsValid(isFormValid);
    return isFormValid;
  };

  const careerSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("form submitted...");
    }
  };

  const fileUpload = (e) => {
    const file = e.target.files[0];
    var regex = new RegExp("(.*?).(pdf|docx|doc)$");
    console.log("file size",file.size)
    if (!regex.test(file.name)) {
      setError((prevState) => ({
        ...prevState,
        resumeErr: "Please upload doc , docx files only",
      }));
    } else if(file.size > 1e5){ //100000
      setError((prevState) => ({
        ...prevState,
        resumeErr: "Please upload a file smaller than 1 MB",
      }));
    } 
     else {
      setError((prevState) => ({
        ...prevState,
        resumeErr: "",
      }));
    }
    
    // else
    // {
    //   setError((prevState) => ({
    //     ...prevState,
    //     resumeErr: "",
    //   }));
    // }
  };

  return (
    <div className="wrapper">
      <div className="content">
        <div className="chit-info-div mt-40">
          <p className="mychits-title1 orange-txt font-s-34 font-w-700 left-txt ">
            {positionName}
          </p>
          <div className="w-100 mt-40">
            <p className="orange-txt font-w-700 font-s-28">Overview</p>
            <p className="font-s-24 mt-13 lght-blc-txt line-ht-34">
              {overview}
            </p>
          </div>
          <div className="w-100 mt-40">
            <p className="orange-txt font-w-700 font-s-28">Job Description</p>
            {getJobDescription()}
          </div>
          <div className="w-100 mt-40">
            <p className="orange-txt font-w-700 font-s-28">Apply</p>
            <form onSubmit={careerSubmit}>
              <Input
                category="text"
                placeholder="Full Name"
                borderColor="#1B9CFC"
                error={error.userNameErr !== "" && !isValid}
                errorMsg={error.userNameErr}
                onUpdate={(e) => {
                  setCareerData((prevState) => ({
                    ...prevState,
                    userName: e.target.value,
                  }));

                  e.target.value.length <= 0
                    ? setError((prevState) => ({
                        ...prevState,
                        userNameErr: "Please enter user name",
                      }))
                    : setError((prevState) => ({
                        ...prevState,
                        userNameErr: "",
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
                  setCareerData((prevState) => ({
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
                error={error.phoneNoErr !== "" && !isValid}
                errorMsg={error.phoneNoErr}
                onUpdate={(e) => {
                  setCareerData((prevState) => ({
                    ...prevState,
                    phoneNo: e.target.value,
                  }));

                  e.target.value.length <= 0
                    ? setError((prevState) => ({
                        ...prevState,
                        phoneNoErr: "Please enter contact number",
                      }))
                    : setError((prevState) => ({
                        ...prevState,
                        phoneNoErr: "",
                      }));
                  e.target.value.length > 10
                    ? setError((prevState) => ({
                        ...prevState,
                        phoneNoErr: "Please enter only 10 digit contact number",
                      }))
                    : setError((prevState) => ({
                        ...prevState,
                        phoneNoErr: "",
                      }));
                }}
              />
              <div className="my-15">
                <input
                  type="file"
                  className="pinCodeBorder w-100"
                  onChange={fileUpload}
                />
                
                {error.resumeErr !== "" && !isValid && (
                  <p className="error">{error.resumeErr}</p>
                )}
              </div>
              <RegButton
                bgColor="#FEA47F"
                txtColor="white"
                name="Submit"
                type="submit"
                orangeBg={true}
              />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Apply;
