const csv = window.require('fast-csv');

const electron = window.require('electron');
export function parse() {
  const dataarray = [];
  csv
    .fromPath('client/src/excels/export1.csv')
    .on('data', (data) => {
      dataarray.push(data);
      // console.log(data);
    })
    .on('end', () => {
      console.log('done');
    });
  console.log(dataarray);
  return dataarray;
}

var groupby = function(xs, key) { return xs.reduce(function (rv, x) { let v = key instanceof Function ? key(x) : x[key]; let el = rv.find((r) => r && r.key === v); if (el) { el.values.push(x); } else { rv.push({ key: v, values: [x] }); } return rv; }, []); } 