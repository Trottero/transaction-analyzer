import React from 'react';
import * as ExcelParser from '../../parsers/excelparser';
import * as gbu from '../../modules/groupby-utils';

const _ = require('lodash');

class Transactions extends React.Component {
  constructor(props) {
    super(props);
    this.aggregrate = this.aggregrate.bind(this);
    this.state = {
      records: [{ values: ['s'] }, { values: ['sa'] }],
    };
  }

  componentDidMount() {
    ExcelParser.parse(this.aggregrate);
  }

  aggregrate(dataset) {
    let result = gbu.groupByMonth(dataset);
    result = gbu.groupByReciever(result);
    result = result.map(record => ({ date: record.date, values: _.orderBy(record.values, ['total'], ['desc']) }));
    this.setState({
      records: result,
    });
  }

  render() {
    return (
      <div>
        <h1>Transactions</h1>

        {this.state.records.map(record => (
          <table className="table">
            <thead className="thead-light" key={record.date}>
              <tr>
                <th>Ontvanger {record.date}</th>
                <th>Totaal besteed</th>
              </tr>
            </thead>
            <tbody>
              {record.values.map(recievers => (
                <tr key={recievers.reciever + record.date}>
                  <td>
                    {recievers.reciever}
                  </td>
                  <td>
                    {recievers.total}
                  </td>
                </tr>))
              }
            </tbody>
          </table>
        ))}

      </div>);
  }
}

export default Transactions;
