// add whatever parameters you deem necessary
function averagePair(sortedArr, targetAvg) {
  if (sortedArr.length === 0) return false;
  let left = 0;
  let right = sortedArr.length - 1;

  while (left < right) {
    avg = (sortedArr[left] + sortedArr[right]) / 2;
    if (avg === targetAvg) {
      return true;
    } else if (avg < targetAvg) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}





module.exports = averagePair;