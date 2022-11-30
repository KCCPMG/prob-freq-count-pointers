// add whatever parameters you deem necessary
function constructNote(letters, msg) {
  const letterFreq = freqCounter(letters);
  const msgFreq = freqCounter(msg);
  for (let ch of Object.keys(letterFreq)){
    if (letterFreq[ch] > msgFreq[ch] || !msgFreq[ch]) return false;
  }
  return true;
}


function freqCounter(str) {
  const obj = {}
  for (let ch of str.split("")) {
    obj[ch] = obj[ch] + 1 || 1;
  }
  return obj;
}

module.exports = constructNote;