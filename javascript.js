// 1.output

const a = { x: 1, y: 2 };
const b = a;
b.x = 3;
console.log(a);
console.log(b);

// 2.output
const a = {};
const b = { name: "ram" };
const c = { name: "rahul" };
a[b] = "indian";
a[c] = "rjram";
console.log("hello", a[b]);

// 3.Find the sum of all elements/numbers of a given array?
// method-1
var arr = [1, 2, 5, 10, 20];
var res = arr.reduce((a, i) => {
  return a + i;
});
console.log(res);

// method-2
var res = 0;
let i;
for (i in arr) {
  res = res + arr[i];
}
console.log(res);

// 4. output
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(a[i]), 1000);
}

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(a[i]), 1000);
}

// 5. output

const number = undefined + 11;
if (number === NaN) {
  document.write("NaN");
} else if (number === 11) {
  document.write("11");
} else {
  document.write("other");
}

// 6.Reverse a given string using JavaScript?
var name = "ramnewas Singh";
var output = name.split("").reverse().join("");
console.log(output);


