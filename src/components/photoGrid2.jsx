import React from 'react';

const SecondPhotoGrid = () => {
  return (
    <div className="w3-row-padding w3-padding-16 w3-center">
      <div className="w3-quarter">
        <img src="https://www.w3schools.com/w3images/popsicle.jpg" alt="Popsicle"  />
        <h3>All I Need Is a Popsicle</h3>
        <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
      </div>
      <div className="w3-quarter">
        <img src="https://www.w3schools.com/w3images/salmon.jpg" alt="Salmon"  />
        <h3>Salmon For Your Skin</h3>
        <p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
      </div>
      <div className="w3-quarter">
        <img src="https://www.w3schools.com/w3images/sandwich.jpg" alt="Sandwich"  />
        <h3>The Perfect Sandwich, A Real Classic</h3>
        <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
      </div>
      <div className="w3-quarter">
        <img src="https://www.w3schools.com/w3images/croissant.jpg" alt="Croissant"  />
        <h3>Le French</h3>
        <p>Lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
      </div>
    </div>
  );
};

export default SecondPhotoGrid;