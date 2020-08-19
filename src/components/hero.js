import React from 'react'
import '../css/hero.css'
import Header from './header'
import Eyebrows from '../images/eyebrowss.jpg'
import '../css/animate.css'

const Hero = () => {
    return (
        <>
            <div className="hero" style={{ 
                backgroundImage: `url(${Eyebrows})`,
                backgroundSize: "cover",
                backgroundPosition: "top center",
                backgroundRepeat: "none",
                backgroundAttachment: "fixed",
                height: "90vh",
                width: "100%",
                margin: 0,
                padding: 0,
                }}>
                <div className="overlay" style={{
                    backgroundColor: "rgba(0,0,0,.2)",
                    width: "100%",
                    height: "90vh",
                    padding: "0",
                    margin: "0"
                }}>
                    <Header />
                        <div className="hero-text animated slideInUp">
                            <h1>Making Your Skin Glow Everyday</h1>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p> */}
                        </div>
                </div>
            </div>
        </>
    )
}

export default Hero
