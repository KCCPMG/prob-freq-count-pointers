// add whatever parameters you deem necessary
function isSubsequence(sub, str) {
  let subIndex = 0;
  for (let strIndex in str) {
    if (str[strIndex] === sub[subIndex]) subIndex++;
    if (subIndex === sub.length) return true;
  }

  return false;
}

module.exports = isSubsequence;
