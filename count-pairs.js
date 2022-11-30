// add whatever parameters you deem necessary
function countPairs(arr, sum) {
  sumCount = 0;
  for (let left=0; left<arr.length-1; left++) {
    for (let right=left+1; right<arr.length; right++) {
      if (arr[left] + arr[right] === sum) sumCount++;
    }
  }

  return sumCount;
}

module.exports = countPairs;