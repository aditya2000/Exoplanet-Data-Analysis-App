import React, { Component } from 'react';
import './metallicity.css';

class Metallicity extends Component {
    render() {
       const data = this.props.data;
        let hostStarMetallicity = data.map(planet => planet.HostStarMetallicity )
                                .filter(word => word !== "")
                                .map(element => Number(element))
                                .filter(met => met>0.2 && met <=0.21)
        
        let habitablePlanets = data.map((planet) => {
            if(hostStarMetallicity.indexOf(Number(planet.HostStarMetallicity))>=0) {
                return planet.PlanetIdentifier
            }
            return undefined
        }).filter(word => word !== undefined)
        return(
            <div className="metallicity">
                <h1>High Metallicity</h1>
                <p>According to wikipedia, while the bulk of material in any star is hydrogen and helium, there is a significant variation in the amount of heavier elements (metals). A high proportion of metals in a star correlates to the amount of heavy material initially available in the protoplanetary disk. A smaller amount of metal makes the formation of planets much less likely, under the solar nebula theory of planetary system formation. Any planets that did form around a metal-poor star would probably be low in mass, and thus unfavorable for life.</p>
                <p>Here are some planets that have a host star with suitable metallicity:</p>
                <div className="planets-met">
                    {habitablePlanets.map(planet => <div key={Math.random()}>{planet}</div>)}
                </div>
            </div>
        )
    }
}

export default Metallicity;