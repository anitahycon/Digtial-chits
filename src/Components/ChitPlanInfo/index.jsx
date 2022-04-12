import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";
import "./index.css";
 
const ChitPlanInfo = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const {
    _id,
    chit_value,
    months,
    min_installment,
    max_installment,
    min_bid_payable,
    max_bid_payable,
  } = state.data;
  const [bidValue, setBidValue] = useState(0);

  const StartDateOne = new Date();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let FirstDate = `${StartDateOne.getDate()}-${
    month[StartDateOne.getMonth()]
  }-${StartDateOne.getFullYear()}`;
  let SecondDate = `${StartDateOne.getDate()}-${
    month[StartDateOne.getMonth()]
  }-${StartDateOne.getFullYear()}`;
 
  if (StartDateOne.getDate() == 1) {
    SecondDate = `${StartDateOne.setDate(15)}-${
      month[StartDateOne.getMonth()]
    }-${StartDateOne.getFullYear()}`;
    SecondDate = `${StartDateOne.getUTCDate()}-${
      month[StartDateOne.getMonth()]
    }-${StartDateOne.getFullYear()}`;
  }

  if (StartDateOne.getDate() > 1 && StartDateOne.getDate() <= 15) {
    console.log("date is between 1 to 15",`${StartDateOne.setDate(1)}`);
    FirstDate = `${StartDateOne.setDate(15)}-${
      month[StartDateOne.getMonth()]
    }-${StartDateOne.getFullYear()}`;
    FirstDate = `${StartDateOne.getUTCDate()}-${
      month[StartDateOne.getMonth()]
    }-${StartDateOne.getFullYear()}`;
    SecondDate = `${StartDateOne.setDate(StartDateOne.getDate() + 30)}-${
      month[StartDateOne.setMonth(StartDateOne.getMonth() + 1)]
    }-${StartDateOne.getFullYear()}`;
    SecondDate = `${StartDateOne.getUTCDate()}-${
      month[StartDateOne.setMonth()]
    }-${StartDateOne.getFullYear()}`;
    console.log("second date--",SecondDate);
  } else if (StartDateOne.getDate() > 15) {
    console.log("date is between 16 to 30");
    FirstDate = `${StartDateOne.setDate(1)}-${
      month[StartDateOne.setMonth(StartDateOne.getMonth() + 1)]
    }-${StartDateOne.getFullYear()}`;
    FirstDate = `${StartDateOne.getUTCDate()}-${
      month[StartDateOne.getMonth()]
    }-${StartDateOne.getFullYear()}`;
    SecondDate = `${StartDateOne.setDate(15)}-${
      month[StartDateOne.getMonth()]
    }-${StartDateOne.getFullYear()}`;
    SecondDate = `${StartDateOne.getUTCDate()}-${
      month[StartDateOne.getMonth()]
    }-${StartDateOne.getFullYear()}`;
  }
  const [errorMsg, setErrorMsg] = useState("");
  const [installment, setInstallment] = useState();
  const [startDate, setStartDate] = useState();
 
  const confirmProceed = () => {
    if (!installment) {
      setErrorMsg(" *Please select installment");
    } else if (!startDate) {
      setErrorMsg(" *Please select startDate");
    } else {
      navigate("/chitplans/payment", {
        state: {
          _id,
          installment,
          bidValue,
          startDate,
          chit_value
        },
      });
    }
  };
  const bidHandler = (val) => {
    if (val == min_installment) {
      setBidValue(min_bid_payable);
      setInstallment(val);
      setErrorMsg(null);
    } else {
      setBidValue(max_bid_payable);
      setInstallment(val);
      setErrorMsg(null);
    }
  };

  const dateHandler = (val) => {
    setStartDate(val);
    setErrorMsg(null);
  };
  return (
    <div className="wrapper">
      <div className="content main-100">
        <div className="chit-info-div">
          <p className="mychits-title1 orange-txt font-s-20 font-w-700 left-txt">
            Chit plan info
          </p>
          <div className="d-flex f-row">
            <div className="d-flex orange-bg white-txt f-colum flex-13 font-s-14 font-w-500">
              <div className="p-18">Chit Value</div>
              <div className="p-18">Months</div>
              <div className="p-18">Installment</div>
              <div className="p-18">Bid Payable</div>
              <div className="p-18">Start Date</div>
            </div>
            <div className="d-flex f-colum border flex-1 font-s-14 font-w-500">
              <div className="p-18 border-bot">{chit_value}</div>
              <div className="p-18 border-bot">{months}</div>
              <div className="border-bot p-18">
                <div className="d-flex radio-div">
                  <input
                    type="radio"
                    name="bid_installment"
                    value={min_installment}
                    onChange={(e) => bidHandler(e.target.value)}
                  />
                  <label className="ml-10">{min_installment} Min</label>
                  <input
                    type="radio"
                    name="bid_installment"
                    value={max_installment}
                    className="ml-20"
                    onChange={(e) => bidHandler(e.target.value)}
                  />
                  <label className="ml-10">{max_installment} Max</label>
                </div>
              </div>
              <div className="p-18 border-bot">
                {bidValue ? bidValue : "--"}
              </div>
              <div className="p-18 ">
                <div className="d-flex radio-div">
                  <input
                    type="radio"
                    name="startDate"
                    value={FirstDate}
                    onChange={(e) => dateHandler(e.target.value)}
                  />
                  <label className="ml-10">{FirstDate}</label>
                  <input
                    type="radio"
                    name="startDate"
                    value={SecondDate}
                    className="ml-20"
                    onChange={(e) => dateHandler(e.target.value)}
                  />
                  <label className="ml-10">{SecondDate}</label>
                </div>
              </div>
            </div>
          </div>
          {errorMsg && <div className="error">{errorMsg}</div> }
         
          {/* button */}
          <div className="w-25 font-w-700 mx-auto mt-40">
            <Button
              name="Confirm and Proceed"
              onClick={confirmProceed}
              orangeBg={false}
              fontWt={700}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChitPlanInfo;
