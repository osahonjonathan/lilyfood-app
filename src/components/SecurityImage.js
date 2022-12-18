import React from "react";

const SecurityImage = ({ image }) => {
  return (
    <div className="login-image-container">
      <img src={image} alt="" className="login-image" />
    </div>
  );
};

export default SecurityImage;
