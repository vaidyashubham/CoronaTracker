import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section id="lab_social_icon_footer">
      <hr />
      <div className="container text-center center-block">
        &copy; 2020 Copyright:{" "}
        <a
          href="https://vaidyashubham.github.io/mywebsite/MyPortfolio/"
          className="profile-link"
        >
          Shubham Vaidya
        </a>
      </div>
    </section>
  );
};

export default Footer;
