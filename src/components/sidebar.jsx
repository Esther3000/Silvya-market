import React from 'react';

const SideBar = () => {
  const w3_open = () => {
    document.getElementById("mySidebar").style.display = "block";
  };

  const w3_close = () => {
    document.getElementById("mySidebar").style.display = "none";
  };

  return (
    <div className="w3-top">
      <div className="w3-white w3-xlarge" >
        <div className="w3-button w3-padding-16 w3-left" onClick={w3_open}>☰</div>
        <div className="w3-right w3-padding-16">Mail</div>
        <div className="w3-center w3-padding-16">Silvya Market</div>
      </div>
    </div>
  );
};

export default SideBar;