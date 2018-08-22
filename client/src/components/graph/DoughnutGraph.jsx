import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';

import classes from './Button.scss';

class DoughnutGraph extends React.Component {
  constructor(props) {
    super(props);
    this.generateGraph = this.generateGraph.bind(this);
    this.state = {
      colors: ['#070117', '#0F0230', '#170349', '#1E0462', '#26047A', '#2D0593', '#3506AC', '#3D07C5', '#4208DA', '#4408DC', '#4C09F5 ', '#5D21F7', '#703AF8', '#8151F9', '#936AFA', '#A584FA ', '#B79DFB', '#C8B4FC', '#DACDFD', '#EDE6FE'],
    };
  }

  componentDidMount() {
    // generate a graph here using the charts.js library
    this.generateGraph();
    console.log('Graph component mounted');
  }

  generateGraph() {
    const ctx = document.getElementById(this.props.identifier);
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: this.props.labels,
        datasets: [{
          label: `Amount of money spent in month${this.props.identifier}`,
          data: this.props.data,
          backgroundColor: this.state.colors,
          borderWidth: 0,
        }],
      },
      options: {
        legend: {
          display: false,
        },
      },
    });
  }
  componentDidUpdate() {
    // this.generateGraph();
  }

  render() {
    console.log('rendered graph component');
    return (
      <canvas id={this.props.identifier} width="100%" height="100%" />
    );
  }
}

// DoughnutGraph.propTypes = {
//   labels: PropTypes.array.isRequired,
//   data: PropTypes.array.isRequired,
//   identifier: PropTypes.string.isRequired,
// };

export default DoughnutGraph;
