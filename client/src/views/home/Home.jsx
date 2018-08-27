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
      lastmonthdonut: { date: '1', values: ['s'] },
    };
  }

  componentDidMount() {
    ExcelParser.parse(this.generateChartData);
  }

  generateChartData(dataset) {
    let result = gbu.groupByMonth(dataset);
    result = gbu.groupByReciever(result);

    console.log(result);

    const lastmonth = new Date();
    lastmonth.setMonth(lastmonth.getMonth() - 1);
    this.setState({
      graphdata: result,
      lastmonthdonut: result.find(element => element.date === `${lastmonth.getFullYear()}-${lastmonth.getMonth() + 1}`),
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <h1>Dashboard</h1>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="panel">
              <div className="panel-heading">
                Money spent during {this.state.lastmonthdonut.date}
              </div>
              <div className="panel-body" key={this.state.lastmonthdonut.date}>
                <DoughnutGraph identifier={this.state.lastmonthdonut.date} labels={this.state.lastmonthdonut.values.map(record => record.reciever)} data={this.state.lastmonthdonut.values.map(record => record.total)} />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="panel">
              <div className="panel-heading">
                Panel heading
              </div>
              <div className="panel-body full-height">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor quam, tempus quis tortor facilisis, dictum facilisis ex. Integer nec tempor nunc, eget placerat ex. Nulla ullamcorper consequat diam ut ornare. Etiam lobortis lacus est, at mollis odio lobortis vitae. Donec efficitur metus id eros interdum, ut dapibus ipsum ullamcorper.
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel">
              <div className="panel-heading">
                Panel heading
              </div>
              <div className="panel-body" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor quam, tempus quis tortor facilisis, dictum facilisis ex. Integer nec tempor nunc, eget placerat ex. Nulla ullamcorper consequat diam ut ornare. Etiam lobortis lacus est, at mollis odio lobortis vitae. Donec efficitur metus id eros interdum, ut dapibus ipsum ullamcorper.
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="panel">
              <div className="panel-heading">
                Previous Month
              </div>
              <div className="panel-body" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor quam, tempus quis tortor facilisis, dictum facilisis ex. Integer nec tempor nunc, eget placerat ex. Nulla ullamcorper consequat diam ut ornare. Etiam lobortis lacus est, at mollis odio lobortis vitae. Donec efficitur metus id eros interdum, ut dapibus ipsum ullamcorper.
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel">
              <div className="panel-heading">
                Panel heading
              </div>
              <div className="panel-body" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor quam, tempus quis tortor facilisis, dictum facilisis ex. Integer nec tempor nunc, eget placerat ex. Nulla ullamcorper consequat diam ut ornare. Etiam lobortis lacus est, at mollis odio lobortis vitae. Donec efficitur metus id eros interdum, ut dapibus ipsum ullamcorper.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
