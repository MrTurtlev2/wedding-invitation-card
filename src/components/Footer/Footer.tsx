import './Footer.css'
import FooterImage1 from "../../assets/presentation-images/image1.png";
import FooterImage3 from "../../assets/presentation-images/image2.png";
import FooterImage2 from "../../assets/presentation-images/image3.png";


const Footer = () => (
    <div className='footer-main'>
        <div className='footer-images'>
            <img className='footer-img' src={FooterImage1} alt=''/>
            <img className='footer-img' src={FooterImage2} alt=''/>
            <img className='footer-img' src={FooterImage3} alt=''/>
        </div>
        <div className='footer-title-wrapper'>
            <h2 className="footer-title">
                Weronika & Marek
            </h2>
        </div>
    </div>
)
export default Footer;
