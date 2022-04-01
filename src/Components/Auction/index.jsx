import Footer from "../components/Footer";
import Header from "../components/Header";
import '../../Utils/Layout.css'
import '../../Utils/Common.css'
import '../../Utils/Fonts.css'
import './index.css'
import '../Common.css'
import { useState } from "react";
import RegButton from "../components/RegButton";
import Input from "../components/Input";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
const Auction = ({isAuth}) =>{
    // if (!isAuth) {
    //     return <Navigate to="/" replace />;
    // }
    const header = ["Chit Number","Chit Value","Min.Bid Value","Auction Date","Auction Time","Ticket No"]
    const data = ["FF1TF08","1,00,000","5,000","25-FEB-2022","12:00 PM","34"]
    const [showDetails , setShowDetails] = useState(false)
    let botm = 0;
    const biddingCount = () => {
        return (
            <div className="pos-abs bidding-row" style={{ bottom: `${botm + 50}px`}} >
                <div className="blue-bg blue-bid-indicator font-s-10 white-txt d-flex center" >23</div>  
                <div className="arrow-left"></div>
                <div className="user-indicator blue-bg white-txt font-s-15 font-w-400 text-center" onMouseEnter={() => setShowDetails(true)}
                onMouseLeave={() => setShowDetails(false)}>2,333</div>
                    {/* user details div */}
                    {showDetails && <div className="white-bg details-div">
                    <p className="font-s-14 font-w-600 lght-blc-txt">Mr. Sai Krishna</p> 
                    <p className="font-s-14 font-w-400 lght-blc-txt">12:50:40 PM</p>     
                    </div>
                }
            </div>   
            
        )  
        
    }
    // useEffect(()=>{
    //     setInterval(()=>
    //         biddingCount()
    //     ,1000)
        
    // },[])
    return(
        <div className="wrapper">
            {/* <Header /> */}
            <div className="main-section">
              <div className="left-txt">
                  <p className="dark-orange-txt font-s-18">Welcome, <b>Aakash A</b></p>
              </div>
              {/* user details */}
              <div className="orange-bg user-details-div">
                    <div className="d-flex">
                        {header.map((data,i)=>(<div className="user-header white-txt font-s-14 font-w-400 left-txt" key={i}>{data}</div>))}
                    </div>
                    <div className="d-flex mt-13">
                        {data.map((record,i)=>(<div className="user-header white-txt font-s-14 font-w-700 left-txt" key={i}>{record}</div>))}
                    </div>
                </div>   
                {/* bidding row */}
                <div className="bidding-detail-row">
                    <div className="d-flex left-txt">
                        <div className="bidding-first-div">
                            <div className="font-s-14 font-w-400 lght-blc-txt">Live Bidding</div>
                            <div className="font-s-20 font-w-700 lght-blc-txt">5,500</div>
                        </div>
                        <div className="bidding-second-div">
                            <div className="font-s-14 font-w-400 lght-blc-txt">Auction Time</div>
                            <div className="font-s-20 font-w-700 lght-blc-txt">12:30PM  to  01:00PM</div>
                        </div>
                        <div className="bidding-second-div">
                            <div className="font-s-14 font-w-400 lght-blc-txt">No of Participants</div>
                            <div className="font-s-20 font-w-700 lght-blc-txt">20</div>
                        </div>
                    </div>
                </div>
                {/* bidding history row */}
                <div className="bidding-history-row">
                    <div className="font-s-20 font-w-700 left-txt orange-txt">Live Bidding History</div>
                    <div className="d-flex f-row mt-40">
                        {/* bidding indicator */}
                        <div style={{display:'flex',flexDirection :'row'}}>
                            <div style={{width:'570px'}} >
                                <div className="font-s-10 font-w-700 dark-orange-txt">Rs. 25000</div>
                                <div className="pos-abs" style={{height:'310px',width : '400px',}}>
                                    <div className="pos-abs red-circle"></div>
                                    <div className="pos-abs orange-bg bid-indicator"></div>
                                    {biddingCount()}
                                    <div className="pos-abs green-circle"></div>
                                    <div className="pos-abs font-s-10 font-w-700 green-txt min-bid">Rs. 5000</div>
                                </div>
                            
                            </div >

                            {/* bidding value */}
                            <div style={{width:'470px',padding : '50px 70px 30px'}}>
                                <div className="d-flex f-row justify-space f-wrap btn-row" >
                                    <RegButton name="+100" borderRad={0} onClick="" 
                                        bgColor ="white" txtColor = "#FEA47F" 
                                        btnWidth={130} btnHeight = {30}
                                        borderColor = "#FEA47F" />
                                    <RegButton name="+200" borderRad={0} onClick="" 
                                        bgColor ="white" txtColor = "#FEA47F" 
                                        btnWidth={130} btnHeight = {30}
                                        borderColor = "#FEA47F" />
                                    <RegButton name="+500" borderRad={0} onClick="" 
                                        bgColor ="white" txtColor = "#FEA47F" 
                                        btnWidth={130} btnHeight = {30}
                                        borderColor = "#FEA47F" />
                                    <RegButton name="+1,000" borderRad={0} onClick="" 
                                        bgColor ="white" txtColor = "#FEA47F" 
                                        btnWidth={130} btnHeight = {30}
                                        borderColor = "#FEA47F" />
                                    <RegButton name="+5,000" borderRad={0} onClick="" 
                                        bgColor ="white" txtColor = "#FEA47F" 
                                        btnWidth={130} btnHeight = {30}
                                        borderColor = "#FEA47F" />
                                    <RegButton name="+10,00" borderRad={0} onClick="" 
                                        bgColor ="white" txtColor = "#FEA47F" 
                                        btnWidth={130} btnHeight = {30}
                                        borderColor = "#FEA47F" />
                                </div>
                                {/* input field */}
                                <div className="bidding-input-div">
                                    <Input borderColor="white" category="number" placeholder="Enter bidding value" onUpdate="" />
                                    <p className="recheck lght-blc-txt">** Please re-check before entering</p>
                                    <div className="d-flex f-row recheck mt-13">
                                        <RegButton name="Cancel" borderRad={0} onClick="" 
                                            bgColor ="white" txtColor = "#1B9CFC" 
                                            btnWidth={120} btnHeight = {30}
                                            borderColor = "#1B9CFC" />
                                        <div className="recheck ">
                                            <RegButton name="Enter" borderRad={0} onClick="" 
                                            bgColor ="#1B9CFC" txtColor = "white" 
                                            btnWidth={120} btnHeight = {30}
                                            borderColor = "#1B9CFC" />
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
    )
}
 
export default Auction;