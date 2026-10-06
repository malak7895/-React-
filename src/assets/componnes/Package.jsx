
import React from 'react';
import './Package.css'; 

function Packages(props) {
  
  return (
    <div className="package-card">
      
      <h3>{props.name}</h3> 
      
      <p className="package-card-price">
        {props.price} EGP 
      </p>

      <p className="package-description">
        {props.info} 
      </p>

      <ul>
       
        <li>{props.fe1}</li> 
        <li>{props.fe2}</li>
        <li>{props.fe3}</li>
        <li>{props.fe4}</li>
      </ul>

      <button className="choose-package-btn">
        Choose Package
      </button>

    </div>
  );
}

export default Packages;