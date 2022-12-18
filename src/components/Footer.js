import React from "react";
import FooterWrapper from "../wrappers/FooterWrapper";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <FooterWrapper>
      <section className="footer">
        {/* Company */}
        <div className="company">
          <h3>Company</h3>
          <div className="footer-links">
            <Link to="#">About Us</Link>
            <Link to="#">Career</Link>
            <Link to="#">Contact Us</Link>
          </div>
        </div>
        {/* Support */}
        <div className="support">
          <h3>Support</h3>
          <div className="footer-links">
            <Link to="#">Help Center</Link>
            <Link to="#">Safety Center</Link>
          </div>
        </div>
        {/* Legal */}
        <div className="legal">
          <h3>Legal</h3>
          <div className="footer-links">
            <Link to="#">Cookies Policy</Link>
            <Link to="#">Private Policy</Link>
            <Link to="#">Terms of Service</Link>
            <Link to="#">Dispute Resolution</Link>
          </div>
        </div>
      </section>
    </FooterWrapper>
  );
};

export default Footer;
