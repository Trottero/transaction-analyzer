const _ = require('lodash');

/*
 * Requires the following record:
 * date, reciever, amount
 */
export function splitDates(dataset) {
  return dataset.map(key => ({
    month: `${(new Date(key.date)).getFullYear()}-${(new Date(key.date)).getMonth() + 1}`, day: (new Date(key.date)).getDate(), reciever: key.reciever, amount: key.amount,
  }));
}

export function groupByMonth(dataset) {
  let groupedset = _.groupBy(dataset, 'month');
  groupedset = Object.keys(groupedset)
    .map(key => ({ date: key, values: groupedset[key] }));
  return groupedset;
}

export function groupByYear(dataset) {
  return dataset.map();
}

export function groupByReciever(dataset) {
  const groupedByReciever = dataset.map(record => ({
    date: record.date,
    values:
      Object.keys(_.groupBy(record.values, 'reciever'))
        .map(key => ({ reciever: key, transactions: _.groupBy(record.values, 'reciever')[key] }))
        .map(key => ({ reciever: key.reciever, total: _.sumBy(key.transactions, O => Number(O.amount.replace(/,/g, '.'))) }))
        .filter(key => key.total < 0)
        .map(key => ({ reciever: key.reciever, total: Number(String(key.total).replace(/-/g, '')) })),
  }));
  return groupedByReciever;
}

export function groupByRecieverSimple(dataset) {
  let groupedset = _.groupBy(dataset, 'reciever');
  groupedset = Object.keys(groupedset)
    .map(key => ({ reciever: key, values: groupedset[key] }));
  return groupedset;
}
