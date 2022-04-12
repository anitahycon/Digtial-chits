import Footer from "../components/Footer";
import Header from "../components/Header";
import "../../Utils/Layout.css";
import "../../Utils/Common.css";
import "../../Utils/Fonts.css";
import "./index.css";
import "../Common.css";
import { useState } from "react";
import RegButton from "../components/RegButton";
import Input from "../components/Input";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import useTimerValidate from "../../Hooks/useTimerControle";
const Auction = ({ isAuth }) => {
  // if (!isAuth) {
  //     return <Navigate to="/" replace />;
  // }
  const navigate = useNavigate()
  const header = [
    "Chit Number",
    "Chit Value",
    "Min.Bid Value",
    "Auction Date",
    "Auction Time",
    "Ticket No",
  ];
  const data = [
    "FF1TF08",
    "1,00,000",
    "5,000",
    "25-FEB-2022",
    "12:00 PM",
    "34",
  ];
  const userData = useSelector((state) => state.auth.user);
  const [showDetails, setShowDetails] = useState(false);

  // const [countDown, setCountDown] = useState(60 * 5);
  // const [runTimer, setRunTimer] = useState(true);

  // useEffect(() => {
  //   let timerId;
  //   if (runTimer) {
  //     timerId = setInterval(() => {
  //       setCountDown((countDown) => countDown - 1);
  //     }, 1000);
  //   } else {
  //     clearInterval(timerId);
  //   }
  //   return () => clearInterval(timerId);
  // }, [runTimer]);
  // const seconds = String(countDown % 60).padStart(2, 0);
  // const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);
  // useEffect(() => {
  //   if (countDown < 0 && runTimer) {
  //     console.log("expired");
  //     setRunTimer(false);
  //     setCountDown(0);
  //   }
  // }, [countDown, runTimer, minutes, seconds]);
  //   var  botm = 0;
  const biddingCount = () => {
    //  let botm = 0;
    var botm = 0;
    return [...Array(3)].map(() => (
      <div className="pos-abs bidding-row" style={{ bottom: `${botm + 50}px` }}>
        <div className="blue-bg blue-bid-indicator font-s-10 white-txt d-flex center">
          23
        </div>
        <div className="arrow-left"></div>
        <div
          className="user-indicator blue-bg white-txt font-s-15 font-w-400 text-center"
          onMouseEnter={() => setShowDetails(true)}
          onMouseLeave={() => setShowDetails(false)}
        >
          2,333
        </div>
        {/* user details div */}
        {showDetails && (
          <div className="white-bg details-div">
            <p className="font-s-14 font-w-600 lght-blc-txt">Mr. Sai Krishna</p>
            <p className="font-s-14 font-w-400 lght-blc-txt">12:50:40 PM</p>
          </div>
        )}
      </div>
    ));
  };
  //   useEffect(() => {
  //     setInterval(() => biddingCount(), 1000);
  //   }, []);

  const FULL_DASH_ARRAY = 283;
  const TIME_LIMIT = 10;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  let timerInterval = null;

  const [time, setTime] = useState();
  const [dashArray, setDashArray] = useState();

  const startTimer = () => {
    timerInterval = setInterval(() => {
      timePassed++;
      timeLeft = TIME_LIMIT - timePassed;
      setTime(formatTime(timeLeft));
      setCircleDasharray();
      if (timeLeft === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  };
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  };
  const calculateTimeFraction = () => {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  };
  const setCircleDasharray = () => {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    setDashArray(circleDasharray);
  };
  useEffect(() => {
    startTimer();
  }, []);
  return (
    <div className="wrapper">
      {/* <Header /> */}
      <div className="main-section mt-90">
        <div className="left-txt">
          <p className="dark-orange-txt font-s-18">
            Welcome, <b>{userData.username}</b>
          </p>
        </div>
        {/* user details */}
        <div className="orange-bg user-details-div">
          <div className="d-flex">
            {header.map((data, i) => (
              <div
                className="user-header white-txt font-s-14 font-w-400 left-txt"
                key={i}
              >
                {data}
              </div>
            ))}
          </div>
          <div className="d-flex mt-13">
            {data.map((record, i) => (
              <div
                className="user-header white-txt font-s-14 font-w-700 left-txt"
                key={i}
              >
                {record}
              </div>
            ))}
          </div>
        </div>
        {/* bidding row */}
        <div className="bidding-detail-row">
          <div className="d-flex left-txt">
            <div className="bidding-first-div">
              <div className="font-s-14 font-w-400 lght-blc-txt">
                Live Bidding
              </div>
              <div className="font-s-20 font-w-700 lght-blc-txt">5,500</div>
            </div>
            <div className="bidding-second-div">
              <div className="font-s-14 font-w-400 lght-blc-txt">
                Auction Time
              </div>
              <div className="font-s-20 font-w-700 lght-blc-txt">
                12:30PM to 01:00PM
              </div>
            </div>
            <div className="bidding-second-div">
              <div className="font-s-14 font-w-400 lght-blc-txt">
                No of Participants
              </div>
              <div className="font-s-20 font-w-700 lght-blc-txt">20</div>
            </div>
            {/* <div className="bidding-second-div">
                <div className="auctionTimer font-s-12 font-w-900 blue-txt center d-flex">{minutes}:{seconds}</div>  
            </div>    */}
            <div class="base-timer">
              <svg
                className="base-timer__svg"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  class="base-timer__path-remaining base-timer__circle"
                  cx="50"
                  cy="50"
                  r="45"
                  stroke-dasharray={dashArray ? dashArray : "283"}
                ></circle>
                {/* <g className="base-timer__circle"> 
                  <path
                    // id="base-timer-path-remaining"
                    stroke-dasharray={dashArray ? dashArray : "283"}
                    className={"base-timer__path-remaining "}
                    d="
                        M 50, 50
                        m -45, 0
                        a 45,45 0 1,0 90,0
                        a 45,45 0 1,0 -90,0
                      "
                  ></path>
                </g> */}
              </svg>
              <span id="base-timer-label" class="base-timer__label">
                {time}
              </span>
            </div>
          </div>
        </div>
        {/* bidding history row */}
        <div className="bidding-history-row">
          <div className="font-s-20 font-w-700 left-txt orange-txt">
            Live Bidding History
          </div>
          <div className="d-flex f-row mt-40">
            {/* bidding indicator */}
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ width: "570px" }}>
                <div className="font-s-10 font-w-700 dark-orange-txt">
                  Rs. 25000
                </div>
                <div
                  className="pos-abs"
                  style={{ height: "310px", width: "400px" }}
                >
                  <div className="pos-abs red-circle"></div>
                  <div className="pos-abs orange-bg bid-indicator"></div>
                  {biddingCount()}
                  <div className="pos-abs green-circle"></div>
                  <div className="pos-abs font-s-10 font-w-700 green-txt min-bid">
                    Rs. 5000
                  </div>
                </div>
              </div>

              {/* bidding value */}
              <div style={{ width: "470px", padding: "50px 70px 30px" }}>
                <div className="d-flex f-row justify-space f-wrap btn-row">
                  <RegButton
                    name="+100"
                    borderRad={0}
                    onClick=""
                    bgColor="white"
                    txtColor="#FEA47F"
                    btnWidth={130}
                    btnHeight={30}
                    borderColor="#FEA47F"
                  />
                  <RegButton
                    name="+200"
                    borderRad={0}
                    onClick=""
                    bgColor="white"
                    txtColor="#FEA47F"
                    btnWidth={130}
                    btnHeight={30}
                    borderColor="#FEA47F"
                  />
                  <RegButton
                    name="+500"
                    borderRad={0}
                    onClick=""
                    bgColor="white"
                    txtColor="#FEA47F"
                    btnWidth={130}
                    btnHeight={30}
                    borderColor="#FEA47F"
                  />
                  <RegButton
                    name="+1,000"
                    borderRad={0}
                    onClick=""
                    bgColor="white"
                    txtColor="#FEA47F"
                    btnWidth={130}
                    btnHeight={30}
                    borderColor="#FEA47F"
                  />
                  <RegButton
                    name="+5,000"
                    borderRad={0}
                    onClick=""
                    bgColor="white"
                    txtColor="#FEA47F"
                    btnWidth={130}
                    btnHeight={30}
                    borderColor="#FEA47F"
                  />
                  <RegButton
                    name="+10,00"
                    borderRad={0}
                    onClick=""
                    bgColor="white"
                    txtColor="#FEA47F"
                    btnWidth={130}
                    btnHeight={30}
                    borderColor="#FEA47F"
                  />
                </div>
                {/* input field */}
                <div className="bidding-input-div">
                  <Input
                    borderColor="white"
                    category="number"
                    placeholder="Enter bidding value"
                    onUpdate=""
                  />
                  <p className="recheck lght-blc-txt">
                    ** Please re-check before entering
                  </p>
                  <div className="d-flex f-row recheck mt-13">
                    <RegButton
                      name="Cancel"
                      borderRad={0}
                      onClick=""
                      bgColor="white"
                      txtColor="#1B9CFC"
                      btnWidth={120}
                      btnHeight={30}
                      borderColor="#1B9CFC"
                    />
                    <div className="recheck ">
                      <RegButton
                        name="Enter"
                        borderRad={0}
                        onClick={()=>navigate('/auction/wheel')}
                        bgColor="#1B9CFC"
                        txtColor="white"
                        btnWidth={120}
                        btnHeight={30}
                        borderColor="#1B9CFC"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* bidding value */}

            {/* bidder names */}
            <div></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Auction;
