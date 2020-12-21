
/**
 * convert a string of tab-separated values to json
 * @param {string} tsv 
 * @return {object}
 */
function tsvToJson(tsv) {
  let records = [];
  let fieldNames = ["time","title","link"];
  let iter = tsv.matchAll(/.+/g);
  iter.next();
  for(const record of iter) {
      let fields = record[0].split('\t');
      records.push(fieldNames.reduce((data,field,index)=>{
          data[field] = fields[index];
          return data;
      },{}));
  }
  return records;
}
