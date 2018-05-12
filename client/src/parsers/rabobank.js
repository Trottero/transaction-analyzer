const csv = window.require('fast-csv');
const _ = require('lodash');

export function parse() {
  // create two different types of arrays
  const dataarray = [];
  csv
    .fromPath('client/src/excels/test.csv', { headers: true, objectMode: true })
    .on('data', (data) => {
      dataarray.push(data);
      // console.log(data);
    })
    .on('end', () => {
      console.log('done');
    });
  const chocolade = [{ color: 'blue', naam: 'blue color 1' }, { color: 'yellow', naam: 'yellow color 1' }, { color: 'blue', naam: 'blue color 2' }];

  // print them both to make sure they are the same format
  console.log(dataarray);
  console.log(chocolade);

  // groupbys, one returns a proper object the other one is messed up
  const pannekoek = _.groupBy(dataarray, 'color');
  const banaan = _.groupBy(chocolade, 'color');

  // print results
  console.log(pannekoek);
  console.log(banaan);

  // ???
  return dataarray;
}

// const groupby = function (xs, key) { return xs.reduce((rv, x) => { const v = key instanceof Function ? key(x) : x[key]; const el = rv.find(r => r && r.key === v); if (el) { el.values.push(x); } else { rv.push({ key: v, values: [x] }); } return rv; }, []); };
