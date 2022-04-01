import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoaderPopup from "../components/LoaderPopup";
import RegButton from "../components/RegButton";
import CommonTable from "../components/Table";
import { getChits } from "../../Features/UserChits/UserChitsSlice";
import "./index.css";
import { Config } from "../../Config";
const ChitPlans = () => {
  const useData = useSelector((state) => state.auth.user);
  const { isLoginIn , accessToken } = useData
  const [chitPlanData, setChitPlanData] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch()
  const apiInfo = {
    method: "GET",
    headers: {
      'Authorization': `Bearer ${accessToken}`
    },
  };

  const getData = () => {
    setIsLoading(true)
    fetch(
      Config.API_URL + Config.API.AVLCHITS,
      apiInfo
    )
      .then((response) => response.json())
      .then((data) => {
        setChitPlanData(data);
        setIsLoading(false)
      });
  };
  useEffect(() => {
    getData();
  }, []);
  if (!isLoginIn) {
    return <Navigate to="/" replace />;
  }
  const tableHeader = [
    "Chit Value",
    "Months",
    "Min.Installment",
    "Max.Installment",
    "Min.Bid Payable",
    "Max.Bid Payable",
    "",
  ];
  const tableKeys = [
    "chit_value",
    "months",
    "min_installment",
    "max_installment",
    "min_bid_payable",
    "max_bid_payable"
    
  ];

  return (
    <div className="wrapper">
      <div className="main h-100">
        <div className="main-section ">
          <div className="mychits-title1">
            <p className="orange-txt font-s-20 font-w-700 left-txt">
              Available Chit Plans
            </p>
          </div>
          {chitPlanData.length > 0 && (
            <CommonTable
              header={tableHeader}
              data={chitPlanData}
              tableKeys={tableKeys}
              btnColor="#1B9CFC"
              btnName="Join"
              
              action={(data) => {dispatch(getChits(data));
              navigate('/chitplans/chitplaninfo',{
                state: {
                   data
                }
              })} }
            />
          )}
        </div>
      </div>
      <Footer />
      {
        isLoading && <LoaderPopup />
      }
    </div>
  );
};

export default ChitPlans;
