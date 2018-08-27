import * as rabobank from './rabobank';
import * as gbu from '../modules/groupby-utils';

const csv = window.require('fast-csv');

export function parse(callback) {
  const dataarray = [];
  csv
    .fromPath('client/src/excels/export3.csv', { headers: true, objectMode: true })
    .on('data', (data) => {
      dataarray.push(data);
      // console.log(data);
    })
    .on('end', () => {
      // should do transformation to common format here

      // Detect which bank the csv is from using BIC

      // Transform accordingly, for now only rabobank is supported.
      let transformedArray = rabobank.transform(dataarray);

      // split the dates for further procesing
      transformedArray = gbu.splitDates(transformedArray);

      // debugging
      // console.log(transformedArray);

      callback(transformedArray);
    });
}
