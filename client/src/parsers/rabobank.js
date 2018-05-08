const csv = window.require('fast-csv');
const _ = require('lodash');
// const electron = window.require('electron');
export function parse() {
  const dataarray = [];
  csv
    .fromPath('client/src/excels/export1.csv', { headers: true, objectMode: true })
    .on('data', (data) => {
      dataarray.push(data);
      // console.log(data);
    })
    .on('end', () => {
      console.log('done');
    });
  console.log(dataarray);
  const pannekoek = _.chain(dataarray)
    .groupBy(x => x.tegennaam)
    .map((value, key) => ({ name: key, transactions: value }))
    .value();
  console.log(pannekoek);
  return dataarray;
}

// const groupby = function (xs, key) { return xs.reduce((rv, x) => { const v = key instanceof Function ? key(x) : x[key]; const el = rv.find(r => r && r.key === v); if (el) { el.values.push(x); } else { rv.push({ key: v, values: [x] }); } return rv; }, []); };
