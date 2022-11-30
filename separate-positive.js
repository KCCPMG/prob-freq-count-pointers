// add whatever parameters you deem necessary
function separatePositive(arr) {
  let left = 0;
  let right = arr.length-1;
  while (left < right) {
    if (arr[right] > 0) {
      if (arr[left] < 0) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
      } else {
        left++;
      }
    } else {
      right--;
    }
  }

  return arr;
}

module.exports = separatePositive;