import React from 'react';

import { parse } from '../../parsers/rabobank';

class Transactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records: parse(),
    };
  }
  render() {
    return (<div>
      <h1>Transactions</h1>
      <button onClick={parse} className="btn btn-default">click me</button>

      <table>
        <tbody>
          {this.state.records.map(record => (<tr>
            <td>
              {record[4]}
            </td>
            <td>
              {record[6]}
            </td>
            <td>
              {record[7]}
            </td>
            <td>
              {record[9]}
            </td>
          </tr>))}
        </tbody>
      </table>
    </div>);
  }
}

export default Transactions;
