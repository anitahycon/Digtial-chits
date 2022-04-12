import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { saveChitUserDetails } from "../../Features/UserChits/UserChitsSlice";
import DropDown from "../components/DropDown";
import Footer from "../components/Footer";
import Input from "../components/Input";
import RegButton from "../components/RegButton";
import { Country, State, City } from "country-state-city";
import "./index.css";
import Button from "../components/Button";

const Payment = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const useData = useSelector((state) => state.auth.user);

  const cardsArr = [
    require("../../assets/Images/Amex.png"),
    require("../../assets/Images/Discover.png"),
    require("../../assets/Images/Mastercard.png"),
    require("../../assets/Images/Visa.png"),
  ];
  const year = [2022, 2023, 2024, 2025, 2026, 2026, 2027, 2028, 2029, 2030];
  const city = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Surat",
    "Pune",
    "Jaipur",
  ];
  const states = [
    {
      name: "Maharashtra",
      cities: [
        {
          name: "Mumbai",
          taluka: [
            { name: "Andheri", code: "111111" },
            { name: "Thane", code: "222222" },
            { name: "Badalapur", code: "3333333" },
          ],
        },
        {
          name: "Pune",
          taluka: [
            { name: "Haveli", code: "444444" },
            { name: "Hadpsar", code: "555555" },
            { name: "Daund", code: "666666" },
          ],
        }, 
      ],
    }, 
  ];
  const [getCity, setCity] = useState([]);
  const [getTaluka, setTaluka] = useState([]);
  const statesHandler = (e) => {
    setError((prevState) => ({
      ...prevState,
      stateErr: "",
    }));
    let city = states.filter((state) => state.name == e.target.value);
    city = city.map((item) => item.cities);
    let newArr = [];
    for (let i = 0; i < city[0].length; i++) {
      newArr.push(city[0][i]);
    }
    setCity(newArr);
    setAllData((prevState) => ({
      ...prevState,
      state: e.target.value,
    }));
  };

  const cityHandler = (e) => {
    let taluka = getCity.filter((city) => city.name == e.target.value);
    taluka = taluka.map((item) => item.taluka);
    let newTalArr = [];
    for (let i = 0; i < taluka[0].length; i++) {
      newTalArr.push(taluka[0][i]);
    }
    setTaluka(newTalArr);
    setAllData((prevState) => ({
      ...prevState,
      city: e.target.value,
    }));
    setError((prevState) => ({
      ...prevState,
      cityErr: "",
    }));
  };
  const talukaHandler = (e) => {
    var index = e.nativeEvent.target.selectedIndex;
    setAllData((prevState) => ({
      ...prevState,
      taluka: e.nativeEvent.target[index].text,
      pinCode: e.target.value,
    }));
    setError((prevState) => ({
      ...prevState,
      talukaErr: "",
    }));
  };
  const month = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "June",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var d = new Date();
  var currentYear = d.getFullYear();
  var currentMonth = month[d.getMonth()];
  const [result, setResult] = useState(false);
  const [allData, setAllData] = useState({
    cardName: "",
    cardNumber: "",
    cardMonth: 0,
    cardYear: 0,
    cardCVV: "",

    sAddress: "",
    pinCode: "",
    city: "",
    state: "",
    taluka: "",

    chit_id: state._id,
    installment: state.installment,
    chitValue: state.chit_value,
    user_id: useData._id,
  });
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState({
    cardNameErr: "",
    cardNumberErr: "",
    cardMonthErr: "",
    cardYearErr: "",
    cvvErr: "",
    sAddressErr: "",
    cityErr: "",
    talukaErr: "",
    stateErr: "",
    pinErr: "",
  });

  const cardExpireValidation = () => {
    if (allData.cardYear == currentYear && allData.cardMonth == currentMonth) {
      setResult(true);
    } else setResult(false);
    return result;
  };
  useEffect(() => {
    cardExpireValidation();
  }, [getCity, allData.cardYear, allData.cardMonth, result]);
  const validate = () => {
    let isFormValid = true;
    if (!allData.cardName) {
      isFormValid = false;
      setError((prevState) => ({
        ...prevState,
        cardNameErr: "Please enter card name",
      }));
    }
    if (!allData.cardNumber) {
      isFormValid = false;
      setError((prevState) => ({
        ...prevState,
        cardNumberErr: "Please enter card number",
      }));
    }
    if (!allData.cardMonth) {
      isFormValid = false;
      setError((prevState) => ({
        ...prevState,
        cardMonthErr: "Please select expiry month",
      }));
    }
    if (!allData.cardYear) {
      isFormValid = false;
      setError((prevState) => ({
        ...prevState,
        cardYearErr: "Please select expiry year",
      }));
    }
    if (!allData.cardCVV) {
      isFormValid = false;
      setError((prevState) => ({
        ...prevState,
        cvvErr: "Please enter card cvv number",
      }));
    }
    if (!allData.sAddress) {
      isFormValid = false;
      setError((prevState) => ({
        ...prevState,
        sAddressErr: "Please enter street address",
      }));
    }
    if (!allData.city) {
      isFormValid = false;
      setError((prevState) => ({
        ...prevState,
        cityErr: "Please select city",
      }));
    }
    if (!allData.state) {
      isFormValid = false;
      setError((prevState) => ({
        ...prevState,
        stateErr: "Please select state",
      }));
    }
    if (!allData.taluka) {
      isFormValid = false;
      setError((prevState) => ({
        ...prevState,
        talukaErr: "Please select taluka",
      }));
    }
    if (!allData.pinCode) {
      isFormValid = false;
      setError((prevState) => ({
        ...prevState,
        pinErr: "Please enter pincode",
      }));
    }
    setIsValid(isFormValid);
    
    return isFormValid;
  };
  const payNow = async (e) => {
    e.preventDefault();
    if (validate() && !result) {
      dispatch(saveChitUserDetails(allData))
      navigate("/dashboard");
    }
  };

  const cardNumberValidate = (e) => {
    setError((prevState) => ({
      ...prevState,
      cardNumberErr: "",
    }));
    const inputVal = e.target.value.replace(/ /g, "");
    let inputNumbersOnly = inputVal.replace(/\D/g, "");
    if (inputNumbersOnly.length > 16) {
      inputNumbersOnly = inputNumbersOnly.substr(0, 16);
    }
    const splits = inputNumbersOnly.match(/.{1,4}/g);
    let spacedNumber = "";
    if (splits) {
      spacedNumber = splits.join(" ");
    }
    setAllData((prevState) => ({
      ...prevState,
      cardNumber: spacedNumber,
    }));
  };
  return (
    <div className="wrapper">
      <div className="content main-100 mb-50">
        <div className="chit-info-div">
          <p className="mychits-title1 orange-txt font-s-38 font-w-700 left-txt">
            Payment
          </p>
          <form onSubmit={payNow}>
            <div className="d-flex mt-40">
              <div className="flex-1 pr-60">
                <p className="orange-txt font-s-28 font-w-700 left-txt">
                  Card Information
                </p>

                <Input
                  category="text"
                  placeholder="Name on card"
                  borderColor="#1B9CFC"
                  error={error.cardNameErr !== "" && !isValid}
                  errorMsg={error.cardNameErr}
                  onUpdate={(e) => {
                    setAllData((prevState) => ({
                      ...prevState,
                      cardName: e.target.value,
                    }));

                    e.target.value.length <= 0
                      ? setError((prevState) => ({
                          ...prevState,
                          cardNameErr: "Please enter card name",
                        }))
                      : setError((prevState) => ({
                          ...prevState,
                          cardNameErr: "",
                        }));
                  }}
                />
                <input
                  placeholder="Card Number"
                  className="input-div pinCodeBorder"
                  type="text"
                  value={allData.cardNumber}
                  onChange={cardNumberValidate}
                />
                {error.cardNumberErr !== "" && !isValid && (
                  <p className="error">Please enter card number</p>
                )}

                <div className="mt-13">
                  {cardsArr.map((cardImg, i) => (
                    <img
                      alt="noimage"
                      src={cardImg}
                      key={i}
                      className="mr-10"
                      width={29}
                      height={19}
                    />
                  ))}
                </div>
                <div className="d-flex flex-1 justify-space">
                  <div className="w-32">
                    <DropDown
                      title="Exp Month"
                      list={month}
                      error={error.cardMonthErr !== "" && !isValid}
                      errorMsg={error.cardMonthErr}
                      onChageAction={(e) => {
                        console.log("month value --", e);
                        setAllData((prevState) => ({
                          ...prevState,
                          cardMonth: e,
                        }));
                        e.length <= 0
                          ? setError((prevState) => ({
                              ...prevState,
                              cardMonthErr: "Please select expiry month",
                            }))
                          : setError((prevState) => ({
                              ...prevState,
                              cardMonthErr: "",
                            }));
                      }}
                    />
                  </div>
                  <div className="w-32">
                    <DropDown
                      title="Exp Year"
                      list={year}
                      error={error.cardYearErr !== "" && !isValid}
                      errorMsg={error.cardYearErr}
                      onChageAction={(e) => {
                        setAllData((prevState) => ({
                          ...prevState,
                          cardYear: e,
                        }));
                        e.length <= 0
                          ? setError((prevState) => ({
                              ...prevState,
                              cardYearErr: "Please select expiry year",
                            }))
                          : setError((prevState) => ({
                              ...prevState,
                              cardYearErr: "",
                            }));
                      }}
                    />
                    {result ? <p className="error">Card expaired</p> : ""}
                  </div>
                  <div className="w-32">
                    <Input
                      maxLength="3"
                      category="password"
                      placeholder="CVV"
                      borderColor="#1B9CFC"
                      error={error.cvvErr !== "" && !isValid}
                      errorMsg={error.cvvErr}
                      onUpdate={(e) => {
                        setAllData((prevState) => ({
                          ...prevState,
                          cardCVV: e.target.value,
                        }));
                        e.target.value.length <= 0
                          ? setError((prevState) => ({
                              ...prevState,
                              cvvErr: "please enter card cvv number",
                            }))
                          : setError((prevState) => ({
                              ...prevState,
                              cvvErr: "",
                            }));
                      }}
                    />
                  </div>
                </div>

                <p className="orange-txt font-s-28 font-w-700 left-txt mt-13">
                  Billing address
                </p>
                <div>
                  <Input
                    category="text"
                    placeholder="Street address"
                    borderColor="#1B9CFC"
                    error={error.sAddressErr !== "" && !isValid}
                    errorMsg={error.sAddressErr}
                    onUpdate={(e) => {
                      setAllData((prevState) => ({
                        ...prevState,
                        sAddress: e.target.value,
                      }));
                      e.length <= 0
                        ? setError((prevState) => ({
                            ...prevState,
                            sAddressErr: "please enter street address",
                          }))
                        : setError((prevState) => ({
                            ...prevState,
                            sAddressErr: "",
                          }));
                    }}
                  />
                </div>
                {/* <div className="d-flex"> */}
                <div className="d-flex flex-1 justify-space">
                  <div className="w-48">
                    <select className="exp-month" onChange={statesHandler}>
                      <option>State</option>
                      {states.map((item, index) => (
                        <option key={index} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    {error.stateErr !== "" && !isValid && (
                      <p className="error">Please select state</p>
                    )}
                  </div>
                  <div className="w-50">
                    <select
                      className="exp-month"
                      name="selectedCity"
                      onChange={cityHandler}
                    >
                      <option>City</option>
                      {getCity.map((city, i) => (
                        <option value={city.name} key={i}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                    {error.cityErr !== "" && !isValid && (
                      <p className="error">Please select city</p>
                    )}
                  </div>
                </div>
                <div className="d-flex flex-1 justify-space">
                  <div className="w-48">
                    <select className="exp-month" onChange={talukaHandler}>
                      <option>Taluka</option>
                      {getTaluka.map((item, index) => (
                        <option key={index} value={item.code}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    {error.talukaErr !== "" && !isValid && (
                      <p className="error">Please select taluka</p>
                    )}
                  </div>
                  <div className="w-50">
                    <span className="input-div pinCodeBorder">
                      {allData.pinCode ? allData.pinCode : "Pin Code"}
                    </span>
                    
                  </div>
                </div>
                <div className="d-flex flex-1 justify-space">
                  <div className="w-48"></div>
                </div>
                {/* </div> */}
              </div>
              {/* payment box */}
              <div className="payment-box d-flex orange-bg center p-40 white-txt f-colum">
                <p className="font-s-24 font-w-600">First Installment</p>
                <p className="mt-13">
                  <span className="font-s-24 font-w-600">₹ </span>
                  <span className="font-s-40 font-w-700">
                    {state.installment}
                  </span>
                </p>
                <div className="mt-13 w-100">
                  <RegButton bgColor="white" txtColor="#FEA47F" name="Pay Now" type="submit" orangeBg={false} />
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

export default Payment;
