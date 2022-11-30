// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {

  num1Str = String(num1);
  num2Str = String(num2);

  if (num1Str.length !== num2Str.length) return false;

  num1freq = freqObj(num1Str);
  num2freq = freqObj(num2Str);

  console.log(num1freq, num2freq);

  for (let key of [0,1,2,3,4,5,6,7,8,9]) {
    if (num1freq[key] !== num2freq[key]) {
      return false;
    }
  }
  return true;
}

function freqObj(numStr) {
  const obj = {
    '0': 0,
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
    '7': 0,
    '8': 0,
    '9': 0
  };
  numStr.split("").forEach(ch => { 
    obj[ch] = obj[ch]+1 
  })
  return obj;
}

module.exports = sameFrequency;