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
    parse(this.aggregrate);
  }
  // parse() {
  //   const dataarray = [];
  //   csv
  //     .fromPath('client/src/excels/test.csv', { headers: true, objectMode: true })
  //     .on('data', (data) => {
  //       dataarray.push(data);
  //       // console.log(data);
  //     })
  //     .on('end', () => {
  //       const pannekoek = _.groupBy(dataarray, 'color');
  //       const result = Object.keys(pannekoek)
  //         .map(key => [(key), pannekoek[key]])
  //         .map(key => ({ color: key[0], total: _.sumBy(key[1], O => Number(O.numbervalue)) }));
  //       console.log(result);
  //       this.setState({
  //         records: result,
  //       });
  //     });
  // }
  aggregrate(dataset) {
    const pannekoek = _.groupBy(dataset, 'color');
    const result = Object.keys(pannekoek)
      .map(key => [(key), pannekoek[key]])
      .map(key => ({ color: key[0], total: _.sumBy(key[1], O => Number(O.numbervalue)) }));
    console.log(result);
    this.setState({
      records: result,
    });
  }

  render() {
    return (
      <div>
        <h1>Transactions</h1>

        <table>
          <tbody>
            {this.state.records.map(record => (
              <tr key={record.color}>
                <td>
                  {record.color}
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
