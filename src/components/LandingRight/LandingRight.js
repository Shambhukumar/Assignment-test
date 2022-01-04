import React from 'react';
import "./landingRight.scss";
import backgroundSVG from "../Assets/backgound.svg";
const LandingRright = () => {
    return (
        <div className='LandingRight'>
            <div className='LandingRight-text'>
            A few clicks away from an awesome writing experience
            </div>
            <div className='LandingRight-image'>
                <img src={backgroundSVG} alt="text background" />
                <div className='LandingRight-image-text'><span className='LandingRight-image-text-bold'>50K+</span>Peppertypers<br/> trust us with their content</div>
            </div>
        </div>
    )
}

export default LandingRright
