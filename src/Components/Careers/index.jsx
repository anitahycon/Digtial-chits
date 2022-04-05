import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import RegButton from "../components/RegButton";
import "./index.css";
import { CareerData } from "../../career";
const Careers = () => {
  const navigate = useNavigate();
  const careersCard = () => {
    return CareerData.map((data, i) => (
      <div className="careerCards p-24 white-txt mb-25" key={i}>
        <div className="d-flex d-row justify-space">
          <span className="font-s-20 font-w-500">{data.positionName}</span>
          <RegButton
            fontSize={10}
            btnWidth={80}
            btnHeight={24}
            name={data.workMode}
            bgColor="white"
            txtColor="#FEA47F"
          />
        </div>
        <div className="font-s-14 font-w-400 mx-11">
          {data.city},{data.country}
        </div>
        <div
          className="font-w-700 font-s-12 mt-90 pointer-cursor"
          onClick={() => navigate("/career/apply",{
            state : data
          })}
        >
          View & Apply
        </div>
      </div>
    ));
  };

  return (
    <div className="wrapper">
      <div className="content main-100">
        <div className="chit-info-div mt-40">
          <p className="mychits-title1 orange-txt font-s-34 font-w-700 left-txt ">
            Careers
          </p>
          <div className="w-100 text-center mt-40">
            <p className="orange-txt font-w-700 font-s-34">Open Positions</p>
          </div>
          {/* career cards */}
          <div className="mt-13 d-flex justify-space f-wrap">
            {careersCard()}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
