// 1.Find the missing number in a given integer array of 1 to 100
const FindMissingNo = (a, n) => {
  let total = Math.floor(((n + 1) * (n + 2)) / 2);
  for (let i = 0; i < n; i++) {
    total -= a[i];
  }
  return total;
};
let arr = [1, 2, 4, 5];
let n = arr.length;
let MissingNo = FindMissingNo(arr, n);
console.log(MissingNo);
//METHOD
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];
const findMissingNum = (arr) => {
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      return arr[i] + 1;
    }
  }

  return false;
};
console.log(findMissingNum(arr));
