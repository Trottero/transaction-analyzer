import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';

// import classes from './Button.scss';

class StackedLineChart extends React.Component {
  constructor(props) {
    super(props);
    this.generateGraph = this.generateGraph.bind(this);
    this.state = {
      colors: ['#070117', '#0F0230', '#170349', '#1E0462', '#26047A', '#2D0593', '#3506AC', '#3D07C5', '#4208DA', '#4408DC', '#4C09F5 ', '#5D21F7', '#703AF8', '#8151F9', '#936AFA', '#A584FA ', '#B79DFB', '#C8B4FC', '#DACDFD', '#EDE6FE'],
    };
  }

  componentDidMount() {
    this.generateGraph();
  }

  generateGraph() {
    const ctx = document.getElementById(this.props.identifier);
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.props.labels,
        datasets: [{
          label: `Amount of money spent in month${this.props.identifier}`,
          data: this.props.data,
          borderColor: this.state.colors,
          fill: false,
        }],
      },
      options: {
        scales: {
          yAxes: [{
            stacked: true,
          }],
        },
      },
    });
  }

  render() {
    return (
      <canvas id={this.props.identifier} width="600px" height="200px" />
    );
  }
}

// DoughnutGraph.propTypes = {
//   labels: PropTypes.array.isRequired,
//   data: PropTypes.array.isRequired,
//   identifier: PropTypes.string.isRequired,
// };

export default StackedLineChart;
