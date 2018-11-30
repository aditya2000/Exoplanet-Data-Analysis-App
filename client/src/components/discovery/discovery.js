import React, { Component } from 'react';
import './discovery.css';

class Discovery extends Component {
    
    render() {
        function removeDups(names) {
            let unique = {};
            names.forEach(function(i) {
              if(!unique[i]) {
                unique[i] = true;
              }
            });
            return Object.keys(unique);
        }
        const data = this.props.data;
        let uniqueMethods = removeDups(data.map((planet) => {
                                return planet.DiscoveryMethod;
                            }))
        return(
            <div className="discovery">
                <h1>How To Find Them?</h1>
                <p>
                    You can find exo planets in many different ways. There are no direct ways to observe those planets. So, Astronomers mostly observe the host stars and try to find very small changes that planets have on them. In the past decades, the insturments have become sensitive enough to observe the behaviour of those exo-planets upto a significant level.
                </p>
                <p className="methodListHead">Most common ways to find exoplanets:</p>
                <div className="methodList">
                    {uniqueMethods.map((method) => {
                        switch(method) {
                            case 'RV': 
                            return (
                                <div className="method" key={Math.random()}>
                                        <h3>Radial Velocity</h3>
                                        <p>According to the Planetary Society, the radial velocity method, also known as Doppler spectroscopy, is the most effective method for locating extrasolar planets with existing technology. Though other approaches hold great promise for the future, the vast majority of Exoplanets discovered so far were detected by this method.</p>
                                </div>
                                )
                            case 'transit':
                                return (
                                    <div className="method" key={Math.random()}>
                                        <h3>Transit Photometry</h3>
                                        <p>According to the Planetary Society, this method detects distant planets by measuring the minute dimming of a star as an orbiting planet passes between it and the Earth. The passage of a planet between a star and the Earth is called a "transit." If such a dimming is detected at regular intervals and lasts a fixed length of time, then it is very probable that a planet is orbiting the star and passing in front of it once every orbital period.</p>
                                    </div>
                                )
                            case 'microlensing':
                                return (
                                    <div className="method" key={Math.random()}>
                                        <h3>Microlensing</h3>
                                        <p>According to the Planetary Society, microlensing is the only known method capable of discovering planets at truly great distances from the Earth. Whereas radial velocity searches look for planets in our immediate galactic neighborhood, up to 100 light years from Earth, and transit photometry can potentially detect planets at a distance of hundreds of light-years, microlensing can find planets orbiting stars near the center of the galaxy, thousands of light-years away.</p>
                                    </div>
                                )
                            case 'imaging':
                                return (
                                    <div className="method" key={Math.random()}>
                                        <h3>Direct Imaging</h3>
                                        <p>According to the Planetary Society, direct imaging of exoplanets is extremely difficult, and in most cases impossible. Being small and dim planets are easily lost in the brilliant glare of the giant stars they orbit. Nevertheless, even with existing telescope technology there are special circumstances in which a planet can be directly observed.</p>
                                    </div>
                                )
                            case 'timing':
                                return (
                                    <div className="method" key={Math.random()}>
                                        <h3>Pulsar Timing Method</h3>
                                        <p>According to the Las Cumbres Observatory, Pulsar Timing is the method that was used in 1992 by Aleksander Wolszczan and Dale Frail to detect the first confirmed exoplanets. These exoplanets orbit a pulsar, which is a rapidly rotating neutron star. A neutron star is the extremely dense remnant of a star that exploded as a supernova. As they rotate, pulsars emit intense electromagnetic radiation that is detected on Earth as regular and precisely timed pulses, which are so regular they are more accurate than an atomic clock.</p>
                                    </div>
                                )
                            default:
                                return (
                                    <p key={Math.random()}></p>
                                );
                        }
                    })}   
                </div>
            </div>
        )
    }
}

export default Discovery;