const csv = window.require('fast-csv');

export function parse(componentToUpdate, callback) {
  const dataarray = [];
  csv
    .fromPath('client/src/excels/export1.csv', { headers: true, objectMode: true })
    .on('data', (data) => {
      dataarray.push(data);
      // console.log(data);
    })
    .on('end', () => {
      callback(componentToUpdate, dataarray);
    });
}
