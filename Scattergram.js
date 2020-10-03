import React, { Component } from 'react';
import CanvasJSReact from './assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class ScatterChart extends Component {
  render() {
    const options = {
      theme: "dark2",
      animationEnabled: true,
      zoomEnabled: true,
      title:{
        text: "Average Ratings for CIOs"
      },
      axisX: {
        title:"CIOs",
        valueFormatString: " ",
        crosshair: {
          enabled: true,
          snapToDataPoint: true
        }
      },
      axisY:{
        title: "Ratings",
        includeZero: false,
        crosshair: {
          enabled: true,
          snapToDataPoint: true
        }
      },
      data: [{
        type: "scatter",
        markerSize: 15,
        toolTipContent: "<b>CIO: </b>{x}<br/><b>Rating: </b>{y}",
        dataPoints: [
          { x: 1, y: 4},
          { x: 2, y: 4.2},
          { x: 3, y: 4.5},
        ]
      }]
    }
    
    return (
    <div>
      <h1>React Scatter Chart</h1>
      <CanvasJSChart options = {options} 
        /* onRef={ref => this.chart = ref} */
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      <p>
        CIO Key:
      </p>
      <p>
        1 - Women in Computing Science
      </p>
      <p>
        2 - NotAReal Engineering Club
      </p>
      <p>
        3 - NotAReal Robotics Team
      </p>
    </div>
    );
  }
}

export default ScatterChart;