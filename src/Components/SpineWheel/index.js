import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import "./index.css";
const SpineWheel = () => {
  const userData = useSelector((state) => state.auth.user);
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
  return (
    <div className="wrapper">
      <div className="content main-100 mb-50 mx-136">
        <div className="left-txt mt-40">
          <p className="dark-orange-txt font-s-18">
            Welcome, <b>{userData.username}</b>
          </p>
        </div>
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
        {/* wheel */}
        <div className="pinCodeBorder w-100 mt-13">
          <div class="circ">
            <div class="sect">1</div>
            <div class="sect">2</div>
            <div class="sect">3</div>
            <div class="sect">4</div>
            <div class="sect">5</div>
            <div class="sect">6</div>
            <div class="sect">7</div>
            <div class="sect">8</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SpineWheel;
