import React, { Component } from 'react';
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries, ChartLabel} from 'react-vis';
import './trends.css';

class Trends extends Component {
    render() {
        function getYears(names) {
            let unique = {};
            
            names.forEach((i) => {
                unique[i] = 1+(unique[i] || 0)
            });
            return unique;
        }
        const data = this.props.data;
        let uniqueYears = getYears(data.map((planet) => {
                                return planet.DiscoveryYear;
                            }))
        const trendData = []
        for(var i in uniqueYears) {
            trendData.push({x: Number(i), y: uniqueYears[i]})
        }
        
        return(
            <div className="trends">
                <h1>Trends</h1>
                <p>We can clearly see from the plot how the number of Exoplanets discovered in recent years is increasing over time. This is all because of the recent developments of new techniques and tools.</p>
                <XYPlot height={300} width= {1100} xDomain={[2000, 2016]} className="plot">
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <ChartLabel 
                        text="Year"
                        className="alt-x-label"
                        includeMargin={false}
                        xPercent={0.95}
                        yPercent={1.01}
                    />
                     <ChartLabel 
                        text="No. of Exo-planets Discovered"
                        className="alt-y-label"
                        includeMargin={false}
                        xPercent={0.01}
                        yPercent={0.06}
                        style={{
                        transform: 'rotate(-90)',
                        textAnchor: 'end'
                        }}
                    />
                    <LineSeries color="#43A047" data={trendData} style={{fill: 'transparent', strokeWidth: 3}}/>
                </XYPlot>
            </div>
        )
    }
}

export default Trends;