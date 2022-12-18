import React from "react";
import FooterLastWrapper from "../wrappers/FooterLastWrapper";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
const FooterLast = () => {
  return (
    <FooterLastWrapper>
      <section className="footer">
        <h4>&copy; 2022, All right reserved</h4>
        <div className="social-links">
          <Link className="social-link" to="#">
            <FaInstagram />
          </Link>
          <Link className="social-link" to="#">
            <FaTwitter />
          </Link>
          <Link className="social-link" to="#">
            <FaYoutube />
          </Link>
        </div>
      </section>
    </FooterLastWrapper>
  );
};

export default FooterLast;
