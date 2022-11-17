import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footr-wrapper">
            <div className="footer-header">
              <h2>VKUS KG</h2>
            </div>
            <div className="footer-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quo
              reiciendis quam corporis cumque repellat inventore optio facilis
              enim labore dignissimos, incidunt facere animi similique,
              asperiores ipsam, voluptatibus doloribus. Voluptas?
            </div>
            <div className="footer-icons">
              <a href="https://www.whatsapp.com/?lang=ru">
                <div className="whatsApp">
                  <WhatsAppIcon fontSize="large" color="success" />
                </div>
              </a>
              <a href="https://www.instagram.com/">
                <div className="instagram">
                  <InstagramIcon fontSize="large" color="secondary" />
                </div>
              </a>
              <a href="https://ru-ru.facebook.com/">
                <div className="facebook">
                  <FacebookIcon fontSize="large" color="primary" />
                </div>
              </a>
            </div>
            <div className="phone-number">
              <LocalPhoneIcon />
              <p>+7 (962) 907 38 93</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
