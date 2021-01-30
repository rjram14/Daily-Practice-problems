/**1 : Return the provided string with the first letter of each word capitalized */
function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function (val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

var res = titleCase("I'm a little tea pot");
console.log(res);

/**2 : Copy each element of the first array into the second array */
function frankenSplice(arr1, arr2, n) {
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}
var result = frankenSplice([1, 2, 3], [4, 5, 6], 1);
console.log(result);

/**3 : Remove all falsy values from an array */
function bouncer(arr) {
  return arr.filter(Boolean);
}

var falsyVal = bouncer([7, true, "", false, 9, NaN]);
console.log(falsyVal);

/**4 : Return the lowest index  */
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr.indexOf(num);
}
var index = getIndexToIns([40, 60], 50);
console.log(index);
//second method
function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

var index = getIndexToIns([1, 3, 4], 2);
console.log(index);

/**5:(mutations) Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array. */
function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}
var mute = mutation(["hello", "hey"]);
console.log(mute);
//second soln
function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function (letter) {
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
}
var mute = mutation(["hello", "hhello"]);
console.log(mute);

/**6 : returns them as a two-dimensional array.

 */
function chunkArrayInGroups(arr, size) {
  var arr2 = [];
  for (var i = 0; i < arr.length; i += size) {
    arr2.push(arr.slice(i, i + size));
  }
  return arr2;
}

var chunks = chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(chunks);
//2nd soln
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

var chunks = chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(chunks);

//3rd soln
function chunkArrayInGroups(arr, size) {
  if (arr.length <= size) {
    return [arr];
  } else {
    return [arr.slice(0, size)].concat(
      chunkArrayInGroups(arr.slice(size), size)
    );
  }
}
var chunks = chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(chunks);
