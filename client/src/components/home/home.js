import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import Intro from '../intro/intro';
import Discovery from '../discovery/discovery';
import SurfaceTemp from '../surTemp/surTemp';
import Metallicity from '../metallicity/metallicity';
import PlanetaryMass from '../planetaryMass/planetaryMass';
import Distance from '../distance/distance';
import Trends from '../trends/trends';
import Conclusion from '../conclusion/conclusion';
import './home.css';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('/api/data')
        .then(res => res.json())
        .then(data => this.setState({data: data}))
    }
    render() {
        return(
            <div className="home">
                <Navbar/>
                <Intro/>
                <Discovery data={this.state.data}/>
                <SurfaceTemp data={this.state.data}/>
                <Metallicity data={this.state.data}/>
                <PlanetaryMass data={this.state.data}/>
                <Distance data={this.state.data}/>
                <Trends data={this.state.data}/>
                <Conclusion />
            </div>
        )
    }
}

export default Home;