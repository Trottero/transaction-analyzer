import React from 'react';
import * as ExcelParser from '../../parsers/excelparser';
import * as gbu from '../../modules/groupby-utils';


import StackedLineChart from '../../components/graph/StackedLineChart';

const _ = require('lodash');

class Specificview extends React.Component {
  constructor(props) {
    super(props);
    this.aggregrate = this.aggregrate.bind(this);
    this.state = {
      baseData: [{ values: ['s'] }, { values: ['sa'] }],
      selectedData: [],
    };
  }

  componentDidMount() {
    ExcelParser.parse(this.aggregrate);
  }

  aggregrate(dataset) {
    let result = gbu.groupByRecieverSimple(dataset);
    result = result.map(reciever => ({ reciever: reciever.reciever, values: gbu.groupByMonth(reciever.values) }));
    result = result.map(reciever => ({
      reciever: reciever.reciever,
      values:
        reciever.values.map(value => ({
          date: value.date,
          total: Number(String(_.sumBy(value.values, O => Number(O.amount.replace(/,/g, '.')))).replace(/-/g, '')),
        })),
    }));

    // convert it to data usable in the graph
    console.log(result);
    this.setState({
      baseData: result,
    });
  }

  render() {
    return (
      <div>
        <h1>Trends in expenses</h1>
        <StackedLineChart identifier="mastergraph" labels={this.state.baseData[0].values.map(thing => thing.date)} data={this.state.baseData[0].values.map(record => record.total)} />
      </div>);
  }
}

export default Specificview;
