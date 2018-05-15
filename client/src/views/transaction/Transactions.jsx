import React from 'react';
import { parse } from '../../parsers/rabobank';

const _ = require('lodash');

class Transactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records: ['s', 'da'],
    };
  }

  componentDidMount() {
    parse(this, this.aggregrate);
  }

  aggregrate(componentToUpdate, dataset) {
    const pannekoek = _.groupBy(dataset, 'tegennaam');
    const result = Object.keys(pannekoek)
      .map(key => [(key), pannekoek[key]])
      .map(key => ({ ontvanger: key[0], total: _.sumBy(key[1], O => Number(O.Bedrag.replace(/,/g, '.'))) }));
    console.log(result);
    componentToUpdate.setState({
      records: result,
    });
  }

  render() {
    return (
      <div>
        <h1>Transactions</h1>

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Ontvanger</th>
              <th>Totaal besteed</th>
            </tr>
          </thead>
          <tbody>
            {this.state.records.map(record => (
              <tr key={record.ontvanger}>
                <td>
                  {record.ontvanger}
                </td>
                <td>
                  {record.total}
                </td>
              </tr>))}
          </tbody>
        </table>
      </div>);
  }
}

export default Transactions;
