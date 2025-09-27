import facebook from '../assets/images/facebook.svg';
import instagram from '../assets/images/instagram.svg';
import linkedin from '../assets/images/linkedin.svg';
import mock146x53 from '../assets/images/mock146x53.png';
import twitter from '../assets/images/twitter.svg';
import youtube from '../assets/images/youtube.svg';
import footerStyles from './footer.module.scss';


// import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className={footerStyles.section}>
      <div className={footerStyles.footer_top}>
        <img alt="Company Logo" src={mock146x53} />
        <span className="text-medium text-bold-700 text-center">Connecting Talent with Opportunity</span>
      </div>
      <div className={footerStyles.divider}></div>
      <div className={footerStyles.footer_bot}>
          <div className={footerStyles.links}>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
          <div className={footerStyles.socials}>
            <a href="#" target="blank"><img alt="linkedin" src={linkedin} /></a>
            <a href="#" target="blank"><img alt="facebook" src={facebook} /></a>
            <a href="#" target="blank"><img alt="twitter" src={twitter} /></a>
            <a href="#" target="blank"><img alt="youtube" src={youtube} /></a>
            <a href="#" target="blank"><img alt="instagram" src={instagram} /></a>
        </div>
      </div>
  </footer>
  )
}

export default Footer;