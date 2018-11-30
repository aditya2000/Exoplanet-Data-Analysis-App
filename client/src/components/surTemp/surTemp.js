import React, { Component } from 'react';
import './surTemp.css';

class SurfaceTemp extends Component {
    render() {
        const data = this.props.data;
        let habitablePlanetsTemp = data.map(planet => planet.SurfaceTempK )
                                .filter(word => word !== "")
                                .map(element => Number(element))
                                .filter(temp => temp >250 && temp<300)
        let habitablePlanets = data.map((planet) => {
            if(habitablePlanetsTemp.indexOf(Number(planet.SurfaceTempK))>=0) {
                return planet.PlanetIdentifier
            }
            return undefined
        }).filter(word => word !== undefined)
        //console.log(data.filter(planet => planet.PlanetIdentifier === 'Earth'))
        return(
            <div className="surTemp">
                <h1>Surface Temperature</h1>
                <p>A habitable planet must have a suitable temperature to support life. It should have an atmosphere dense enough to trap the heat from it's host star and should maintain it's temperature.Let's some planets that we know have somewhat suitable surface temperature</p>
                <div className="planets">
                    {habitablePlanets.map(planet => <div key={Math.random()}>{planet}</div>)}
                </div>
            </div>
        )
    }
}

export default SurfaceTemp;