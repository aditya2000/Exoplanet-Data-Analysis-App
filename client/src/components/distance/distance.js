import React, { Component } from 'react';
import './distance.css';

class Distance extends Component {
    render() {
        const data = this.props.data;
        let distFromSun = data.map(planet => planet.DistFromSunParsec )
                                .filter(word => word !== "")
                                .map(element => Number(element))
                                .filter(dist => dist < 10)
        
        let nearestPlanets = data.map((planet) => {
            if(distFromSun.indexOf(Number(planet.PlanetaryMassJpt))>=0) {
                return planet.PlanetIdentifier
            }
            return undefined
        }).filter(word => word !== undefined)

        return(
            <div className="distance">
                <h1>Distance</h1>
                <p>There are hundereds of billions of exo planets out there that are waiting for you to inhabit them. There are many factors that determine if the planet is habitable or not, but one of the most important factors to consider is distance of exoplanet from Earth. It must be close enough so that we could cover that journey within our lifetime. Otherwise it makes no sense to explore that planet.</p>
                <p>These are the planets which are closer than 10 light years:</p>
                <div className="planets-dist">
                    {nearestPlanets.map(planet => <div key={Math.random()}>{planet}</div>)}
                </div>
            </div>
        )
    }
}

export default Distance;