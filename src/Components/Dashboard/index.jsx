import "../../Utils/Colos.css";
import "../../Utils/Fonts.css";
import "../../Utils/Layout.css";
import "../../Utils/Common.css";
import "./index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import RegButton from "../components/RegButton";
import CommonTable from "../components/Table";

import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

import "../Common.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const userData = useSelector((state) => state.auth.user);
  const availableChits = useSelector(
    (state) => state.userchit.saveChitUserDatails
  );
  const chitDetailsData = [];
  const navigate = useNavigate();
  if (!userData.isLoginIn) {
    return <Navigate to="/" replace />;
  }
  const getAvailableChits = () => {
    for (let i = 0; i < availableChits.length; i++) {
       
      //  if(availableChits[i].chitDetails.user_id == userData._id){
        chitDetailsData.push(availableChits[i]);
      //  } 
    }
     
    // if (availableChits.length == 1 && (availableChits[0].chitDetails.user_id == userData._id)) {
    if (availableChits.length == 1) {
      console.log("availableChits lenght is 1",availableChits.length)
      return availableChits;
    } else return chitDetailsData;
  };
  const chitPlan = () => {
    navigate("/dashboard/chitplans");
  };
  const tableHeader = [
    "Chit Number",
    "Chit Value",
    "Current Installment",
    "Total Due",
    "Auction Date",
    "Auction Time",
    "",
  ];
  const tableKeys = ["", "chitValue", "installment", "", "", ""];
  return (
    <div className="wrapper">
      <div className="content h-100">
        <div className="container-div container-main">
          <div
            className="user-image" 
          >
            <img alt="noimage" width={100} height={100} src={userData.profilePicUrl}/>
            {!userData.profilePicUrl && (
              <p className="white-txt font-s-15">
                Randomly system generated image
              </p>
            )}
          </div>

          <div className="user-details dark-orange-txt name-email-div">
            <p className="font-s-18 ">{userData.username} </p>
            <p className="user-email font-s-16">{userData.email}</p>
          </div>
          <div className="user-details float-right lght-blc-txt">
            <p className="font-s-18 ">Member Id: </p>
            <p className="font-s-16">{userData._id}</p>
          </div>
        </div>
        {/* my chits */}
        <div className="mychits-title">
          <p className="orange-txt font-s-20 font-w-700 left-txt">My Chits</p>
        </div>
        {availableChits.length > 0 ? (
          <div className="table-div">
            <CommonTable
              header={tableHeader}
              data={getAvailableChits()}
              tableKeys={tableKeys}
              btnColor="rgba(27, 156, 252, 0.4)"
              btnName="Participate"
              action={() => {navigate('/dashboard/auction')}}
            />
          </div>
        ) : (
          <div className="chits-empty-plan-div">
            <div className="empty-chit-plan">
              <p className="font-w-500">You didn’t joined any chit plans.</p>
              <Button
                name="Explore Available Chit Plans"
                onClick={chitPlan}
                orangeBg={false}
              />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
