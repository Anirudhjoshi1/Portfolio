import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'


const Footer = () => {

  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>"Built with passion, late nights, and way too much coffee. Let’s create something amazing together!"</p>
            </div>

            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" name='email' placeholder='Enter Your Email' required />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>

        </div>
        <hr />

        <div className="footer-bottom">
            <div className="footer-bottom-left">&#169; 2024 Anirudh Joshi . All rights reserved.</div>

            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <a href="https://www.linkedin.com/in/anirudh-joshi-774a19197/" target='blank'><p>Connect with Me</p></a>
            </div>
        </div>
    </div>
  )
}

export default Footer