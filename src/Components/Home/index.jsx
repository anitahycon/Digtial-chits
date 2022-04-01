import '../../Utils/Colos.css'
import '../../Utils/Fonts.css'
import '../../Utils/Layout.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './index.css'
import '../Common.css'
const Home = () =>{
    const secondList = [
        'Digital Chits is the largest chit funds entity in india. The trusted household Savings & Investments service provider, a pioneer in Micro Finance in india. The inexorable growth registered by Digital chits in recent years not only indicates the usefulness of this ancient instrument, but it is also a reflection of the customers trust in the Digital chits Group. The Annual Auction Turnover of our Chit Companies is touching Rs.3,000 crores.(US$ 715 million).',
        'Digital Chits boasts the best record for timely disbursement of funds among all Chit Funds and offers excellent customer service for a community of 22,00,000 Subscribers.',
        'Digital Chits started operations in 1974 with a single branch. Today, our Chit Companies operate in Andhra Pradesh, Karnataka, Maharashtra, Puducherry (Pondicherry) and Tamil Nadu, through 465 Branch offices, employing 6,000 people and 65,000 Agents.',
        'Using state-of-the-art technology and a transparent accounting system, Digital Chits has transformed this 3,000 year old instrument into an attractive, contemporary alternative to the Banking System.'
    ]
    return(
        <div className="wrapper">
            {/* <Header /> */}
            <div className="content">
                <div className="white-txt first-section">
                     
                    <p className='font-s-40 '>Helping Create Wealth.<br/>
                    Empowering people through prosperity. Resulting in inclusive growth.
                    </p>
                </div>
            {/* second section */}
            <div className = "second-section">
                {
                   secondList.map((data , i)=>(
                       <p key={i} className='second-list font-s-18'>{data}</p>
                   )) 
                }  
            </div>
            {/* third section */}
            <div className="orange-txt first-section">
                <div className='video-div'>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/hsUHq1Yv1Q4" title="YouTube video player" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
                </div>
            </div>
            {/* forth section */}
            <div className="orange-bg four-section white-txt">
                <p className="digital-chits-txt">Digital Chits app</p>
                <p>Now Digital Chits will be just a pocket away</p>
                <div style={{diplay : 'flex',width : '100%'}}>
                    <div style={{width : '50%'}}>
                        <ul className="four-list">
                            <li>Subscribe and manage all your chits</li>
                            <li>Digital Payments; pay securely online</li>
                            <li>See dues and payment schedule</li>
                            <li>Get payment and reminder notifications</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
         
        <Footer />
        </div>
    )
}

export default Home;