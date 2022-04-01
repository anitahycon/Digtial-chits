import "./index.css";
import "../../../Utils/Colos.css";
import { useNavigate } from "react-router-dom";
import "../../../Utils/Layout.css";
import RegButton from "../RegButton";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../Features/Auth/AuthSlice";
import { useState } from "react";
const Header = ({ isAuth }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const downArrow = require("../../../assets/Images/down_arrow.png");
  const upArrow = require("../../../assets/Images/up_arrow.png");
  const [showList, setShowList] = useState(false);

  const userName = useSelector((state) => state.auth.user.username)
 
  const logoutClick = () => { 
    dispatch(logout());
    setShowList(false);
    navigate("/");
  };
  
  return (
    <div className="header orange-bg">
      <div style={{ width: "70%" }}>
        <div className="logo1 font-s-18 font-w-700"></div>
      </div>
      <ul className="header-list font-w-500 font-s-16">
        <li>Home</li>
        <li onClick={()=>navigate('/career')}>Career</li>
        <li>Contact Us</li>
      </ul>
      {!isAuth && (
        <div className="loginBtn font-s-16">
          <RegButton
            name="Login"
            onClick={()=>navigate("/login")}
            bgColor="white"
            txtColor="#FF4A00"
          />
        </div>
      )}
      {isAuth && (
        <div className="dropdown">
          <button
            className="dropbtn font-s-16 center d-flex"
            onClick={() => {console.log("clicking",showList);setShowList(!showList)}}
          >
            {userName ? userName : 'User name'}<img src={showList ? upArrow : downArrow} width={15} />   
          </button>
          {showList && (
            <div className="dropdown-content font-s-16">
              <div onClick={() =>{setShowList(false); navigate("/dashboard")}}>Dashboard</div>
              <div>Notifications</div>
              <div onClick={() =>{setShowList(false);navigate("/dashboard/chitplans")}}>
                Available chits
              </div>
              <div onClick={logoutClick}>Logout</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
