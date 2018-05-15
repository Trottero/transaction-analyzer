const csv = window.require('fast-csv');

export function parse(callback) {
  const dataarray = [];
  csv
    .fromPath('client/src/excels/test.csv', { headers: true, objectMode: true })
    .on('data', (data) => {
      dataarray.push(data);
      // console.log(data);
    })
    .on('end', () => {
      callback(dataarray);
    });
}
