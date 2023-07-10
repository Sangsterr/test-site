import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import styled from 'styled-components';
import noWinShape from '../Images/no-win-shape.png'
import ukRegBadge from '../Images/uk-reg-badge.svg'
import secureSign from '../Images/secure-sign.png'
import imageOne from '../Images/image-1.png'
import imageTwo from '../Images/image-2.png'
import imageThree from '../Images/image-3.png'
import imageFour from '../Images/image-4.png'
import imageFive from '../Images/image-5.png'

function Home() {

const [inputValue, setInputValue] = useState('');
const [isButtonClicked, setIsButtonClicked] = useState(false); // Track button click


const handleInputChange = (event) => {
    setInputValue(event.target.value);
}

const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    // Add your submission logic here, such as making an API request or handling the entered value
    console.log('Submitted value:', inputValue);
    setIsButtonClicked(true);
  };
 
  return (

    <header id="home-header">
<div className="left-side">
    <h1 className="left-side_text">Find Out If You Can Claim

You could be owed up to </h1>
<h1 className="left-side_numbers">£10,000</h1>
<h1 className="left-side_text">
 per vehicle in diesel claims</h1>
 <div className="no-win_image-container">
 <img src={noWinShape} className="no-win-image"/>
 <h2 className="no-win-text">NO WIN, NO FEE</h2>
 </div>
 <h2>FREE check in 30 seconds</h2>
        <h2>No phone calls so no hassle</h2>
</div>

        <div className="right-side">
      <h1>Enter your reg to check</h1>
      <h2 className="sub-heading-text">Then click 'Check Vehicle'</h2>
      
      <form onSubmit={handleSubmit}>
        <input type="text"              placeholder="ENTER YOUR REG"
value={inputValue} onChange={handleInputChange} className="reg-input-box"/>
<br/>
        <button type="submit" className="submit-button">Check Vehicle </button>
      </form>
      {isButtonClicked && <p>You entered: {inputValue}</p>} 
        <img src={secureSign} className="secure-sign-image"/>
       
        </div>
        <div className="bottom-div-image-container">
            <h1>5 Great Reasons To Make A Diesel Claim With Us</h1>
            <div className="bottom-div-image-wrapper">
               <div className="image-pair">
            <img src={imageOne} alt="Image One" />
            <h2 className="h3">Up to £10,000 per vehicle</h2>
            <h3>Claim for more than one vehicle too</h3>
          </div>
          <div className="image-pair">
            <img src={imageTwo} alt="Image Two" />
            <h2 className="h3">Join 100,000s of others</h2>
            <h3>Get what’s yours</h3>
          </div>
          <div className="image-pair">
            <img src={imageThree} alt="Image Three" />
            <h2 className="h3">Quick & easy</h2>
            <h3>Less than 30 seconds to check</h3>
          </div>
          <div className="image-pair">
            <img src={imageFour} alt="Image Four" />
            <h2 className="h3">Claims experts</h2>
            <h3>Working for you</h3>
          </div>
          <div className="image-pair">
            <img src={imageFive} alt="Image Five" />
            <h2 className="h3">No win, no fee</h2>
            <h3>There’s absolutely no risk</h3>
          </div>
            </div>
  
        </div>
    </header>
  
  );
}

export default Home;

