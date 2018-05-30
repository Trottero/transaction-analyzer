export function transform(dataset) {
  return dataset.map(record => ({ date: record.Datum, reciever: record['Naam tegenpartij'], amount: record.Bedrag }));
}
