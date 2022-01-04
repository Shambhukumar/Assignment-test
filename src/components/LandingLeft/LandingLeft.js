import React from 'react'
import "./landingLeft.scss";
import Logo from "../Assets/Logo.svg";
import Help from "../Assets/Help.svg";
const LandingLeft = () => {
    return (
        <div className='LandingLeft'>
            <header>
            <img src={Logo}  alt="Logo"/>
            </header>
            <div className='LandingLeft-main'>

                <div className='LandingLeft-main-content'>
                    <div className='LandingLeft-main-content-text-name'>Hi Siva
                    <span role="img" aria-labelledby="wave"> 👋</span>
                    </div>
                    <div className='LandingLeft-main-content-text-greeting'>
                        Welcome to Peppertype.ai
                    </div >
                    <p className='LandingLeft-main-content-text-congrats'>Congratulations on taking your first step towards creating content, the modern way!</p>
                    <p className='LandingLeft-main-content-text-response'>Help us tailor an amazing experience for you by answering these three questions</p>
                    <div className='LandingLeft-main-content-buttons'>
                        <span className='LandingLeft-main-content-buttons-skip'>Skip for now</span>
                        <span className='LandingLeft-main-content-buttons-continue'>Continue</span>
                    </div>

                    <div className='LandingLeft-main-content-text-links'>
                        Get the most out of it - <span>Book a live demo</span>
                    </div>
                </div>

            </div>
            <span className='help'><img src={Help} alt='Help icon'/>Need Help?</span>
        </div>
    )
}

export default LandingLeft
