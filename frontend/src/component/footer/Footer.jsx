import React from 'react'
import "./Footer.css";
import logo from "../../assets/logo.jpg"

const Footer = () => {
  return (
    <>
    <footer>
        <div className="footer-section-one">
            <img src={logo} alt="" />
            <p>Subscribe to our newsletter for the latest features and updates delivered to you.</p>
            <div className="input-field">
                <input type="text"  placeholder='Your email here'/>
                <button>Join</button>
            </div>
            <p>By subscribing, you consent to our Privacy Policy and agree to receive updates.</p>
        </div>
        <div className="footer-section-two">
            <h6>Usefull Links</h6>
                <p><a href="HomePage">Home Page</a></p>
                <p><a href="aboutus">About us</a></p>
                <p><a href="contactus">Contact us</a></p>
                <p><a href="blogposts">Blog Posts</a></p>
                <p><a href="faqs">FAQs</a></p>
        </div>
        <div className="footer-section-three">
            <h6>Resources</h6>
        
                <p><a href="HomePage">Help Center</a></p>
                <p><a href="aboutus">User Guide</a></p>
                <p><a href="contactus">Community Forum</a></p>
                <p><a href="blogposts">Feedback</a></p>
                <p><a href="faqs">Support</a></p>
         
        </div>
        <div className="footer-section-four">
            <h6>Connect With Us</h6>
         
                <p><i class="fa-brands fa-facebook" style={{color: "#ff4054"}}></i><a href="HomePage">Facebook</a></p>
                <p><i class="fa-brands fa-instagram" style={{color: "#ff4054"}}></i><a href="aboutus">Instagram</a></p>
                <p><i class="fa-brands fa-linkedin" style={{color: "#ff4054"}}></i><a href="contactus">Linkdln</a></p>
                <p><i class="fa-brands fa-x-twitter" style={{color: "#ff4054"}}></i><a href="blogposts">X</a></p>
                <p><i class="fa-brands fa-youtube" style={{color: "#ff4054"}}></i><a href="faqs">Youtube</a></p>
           
        </div>
        
    </footer>
    <hr />
    <div className="rights">
        <p>© 2024 Osumare. All rights reserved.</p>
        <div className="rights-links">
            <a href="">Privacy Policy</a>
            <a href="">Terms of Service</a>
            <a href="">Cookies Settings</a>
        </div>
    </div>
    </>
  )
}

export default Footer