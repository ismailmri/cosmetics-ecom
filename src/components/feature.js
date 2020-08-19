import React from 'react'
import '../css/feature.css'
import mascara from '../images/mascara.jpg'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Feature = () => {
    return (
        <div className="feature">
            <div className="feature-left">
                <ScrollAnimation animateIn="fadeInLeft">
                    <img className="feature-left-img" src={mascara} alt="" />
                </ScrollAnimation>
            </div>
            <div className="feature-right">
                <ScrollAnimation animateIn="fadeInRight" >
                    <div className="feature-right-text">
                        <button className="line"></button>
                        <h3>For Better Eyebrows</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Diam vulputate ut pharetra sit amet aliquam. 
                            Odio morbi quis commodo odio aenean sed adipiscing diam. 
                        </p>
                        {/* <button>Learn More</button> */}
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default Feature