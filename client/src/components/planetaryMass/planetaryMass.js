import React, { Component } from 'react';
import './planetaryMass.css';

class PlanetaryMass extends Component {
    render() {
       const data = this.props.data;
        let planetaryMass = data.map(planet => planet.PlanetaryMassJpt )
                                .filter(word => word !== "")
                                .map(element => Number(element))
                                .filter(pm => pm>=0.003 && pm <=0.009)
        
        let habitablePlanets = data.map((planet) => {
            if(planetaryMass.indexOf(Number(planet.PlanetaryMassJpt))>=0) {
                return planet.PlanetIdentifier
            }
            return undefined
        }).filter(word => word !== undefined)
        //console.log(data.filter(planet => planet.PlanetIdentifier === 'Earth'))
        return(
            <div className="planetaryMass">
                <h1>Planetary Mass</h1>
                <p>According to wikipedia,Planetary mass is a measure of the mass of a planet-like object. Within the Solar System, planets are usually measured in the astronomical system of units, where the unit of mass is the solar mass (M☉), the mass of the Sun. In the study of extrasolar planets, the unit of measure is typically the mass of Jupiter (MJ) for large gas giant planets, and the mass of Earth (M⊕) for smaller rocky terrestrial planets.</p>
                <p>There are many different planets could lie in the suitable range of planetary mass.Here is the list of some:</p>
                <div className="planetary-mass">
                    {habitablePlanets.map(planet => <div key={Math.random()}>{planet}</div>)}
                </div>
            </div>
        )
    }
}

export default PlanetaryMass;