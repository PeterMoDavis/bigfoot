import React from "react";
import costume from "./adult-bigfoot-costume.png";

const styles = {
  costume: {
    width: "100px",
  },
};

const Footer = () => {
  return (
    <div className="d-flex flex-column align-items-center mt-3 mb-3">
      <h3>BIGFOOT ENCOUNTERS</h3>
      <img style={styles.costume} src={costume} alt="" />
      <small>© 2021 Peter MoDavis All Rights Reserved</small>
    </div>
  );
};

export default Footer;
