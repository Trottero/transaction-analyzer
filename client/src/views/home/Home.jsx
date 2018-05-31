import React from 'react';
import Chart from 'chart.js';
import * as ExcelParser from '../../parsers/excelparser';
import * as gbu from '../../modules/groupby-utils';

import DoughnutGraph from '../../components/graph/DoughnutGraph';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.generateChartData = this.generateChartData.bind(this);
    this.state = {
      graphdata: [{ date: '1', values: ['s'] }, { date: '2', values: ['sa'] }],
    };
  }

  componentDidMount() {
    ExcelParser.parse(this.generateChartData);
  }

  generateChartData(dataset) {
    let result = gbu.groupByMonth(dataset);
    result = gbu.groupByReciever(result);

    this.setState({
      graphdata: result,
    });
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>

        {this.state.graphdata.map(daterecord => (
          <div key={daterecord.date}>
            <DoughnutGraph identifier={daterecord.date} labels={daterecord.values.map(record => record.reciever)} data={daterecord.values.map(record => record.total)} />
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
