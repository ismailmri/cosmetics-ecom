import React from 'react'
import '../css/content.css'
import ScrollAnimation from 'react-animate-on-scroll'

const Content = () => {
    return (
        <div className="content">
            <ScrollAnimation animateIn="slideInRight" animateOnce={true}>
                <div className="content-box">
                    <h2>Formula That Started An Industry</h2>
                    <p>Quis risus sed vulputate odio ut enim. Venenatis a 
                        condimentum vitae sapien pellentesque habitant morbi tristique senectus.
                    </p>
                    <button>Learn More</button>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default Content
