
import React from 'react';

const DropDownMenu = () => {
  const w3_open = () => {
    document.getElementById("mySidebar").style.display = "block";
  };

  const w3_close = () => {
    document.getElementById("mySidebar").style.display = "none";
  };

  return (
    <nav className="w3-sidebar w3-bar-block w3-card w3-top w3-xlarge w3-animate-left" style={{display: 'none', zIndex: 6, width: '40%', minWidth: 300, marginTop: '50px' }} id="mySidebar">
      <a href="javascript:void(0)" onClick={w3_close} className="w3-bar-item w3-button">Close Menu</a>
      <a href="#food" onClick={w3_close} className="w3-bar-item w3-button">Food</a>
      <a href="#about" onClick={w3_close} className="w3-bar-item w3-button">About</a>
    </nav>
  );
};

export default DropDownMenu;







