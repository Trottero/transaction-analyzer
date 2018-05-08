import React from 'react';
import Chart from 'chart.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        }],
      },
      options: {
      },
    });
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        {/* <button onClick={this.generateGraph}>click</button> */}
        <canvas id="myChart" width="400" height="400" />
      </div>
    );
  }
}

export default Home;
