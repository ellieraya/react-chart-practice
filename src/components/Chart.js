import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
import './Chart.css';

class Chart extends Component{
  constructor (props){
    super(props);
    this.state = {
      chartData: {
        labels: ['Elmhurst', 'JacksonHeight', 'Sunnyside', 'Woodside', 'Flushing'],
        datasets:[
          {
          label:'Population',
          data:[
          615949,
          281045,
          253060,
          956667,
          3333333
        ],
        backgroundColor:[
          'rgba(255, 99, 190, 0.6)',
          'rgba(255, 162, 90, 0.6)',
          'rgba(255, 226, 255, 0.6)',
          'rgba(173, 256, 47, 0.6)',
          'rgba(147, 112, 219, 0.6)'
        ]
      }
    ]
    }
  }
}
static defaultProps ={
  displayTitle: true,
  displayLegend: true,
  legendPosition: 'top'
}
  render() {
    return (
      <div className= "container chart">
       <div class="row">
         <Bar
          data={this.state.chartData}
         options={{
           title:{
             display: this.props.displayTitle,
             text: 'Largest Cities in Queens BAR CHART',
             fontSize:25,
             position: 'bottom',
           },
           legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
            layout:{
              padding:{
                left: 50,
                right: 0,
                bottom:0,
                top: 0,
              }
            },
            tooltips:{
              enabled: true
            }

         }}
         />
      </div>
      <div className="row">
       <Line
        data={this.state.chartData}
       options={{
         title:{
           display: this.props.displayTitle,
           text: 'Largest Cities in Queens LINE CHART',
           fontSize:25,
           position: 'bottom'
         },
         legend: {
            display: this.props.displayLegend,
            position: this.props.legendPosition,
          },
          layout:{
            padding:{
              left: 50,
              right: 0,
              bottom:0,
              top: 0,
            }
          },
          tooltips:{
            enabled: true
          }

       }}
       />
       </div>
       <div className="row">
         <Pie
          data={this.state.chartData}
         options={{
           title:{
             display: this.props.displayTitle,
             text: 'Largest Cities in Queens PIE CHART',
             fontSize:25,
             position: 'bottom'
           },
           legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
            layout:{
              padding:{
                left: 50,
                right: 0,
                bottom:0,
                top: 0,
              }
            },
            tooltips:{
              enabled: true
            }

         }}
         />
        </div>
      </div>
    )
  }

}
export default Chart;
