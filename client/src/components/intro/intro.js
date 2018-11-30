import React, { Component } from 'react';
import './intro.css';

class Intro extends Component {

    render() {
        return(
            <div className="intro">
                <h1>Let's find our new home!</h1>
                <p>A quest to find a suitable exoplanet that can support life</p>

                <div className="scroll">
                    <p>Scroll</p>
                    <i className="fas fa-angle-double-down fa-3x icon"></i>
                </div>
            </div>
        )
    }
}

export default Intro;