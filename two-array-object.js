// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
  const obj = {}
  for (let keyIndex in keys) {
    obj[keys[keyIndex]] = values[keyIndex] || null;
  }
  return obj;
}


module.exports = twoArrayObject;