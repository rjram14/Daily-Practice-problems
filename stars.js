//1
for (var i = 5; i >= 1; i--) {
  for (var j = i; j >= 1; j--) {
    // console.log("@ ".repeat(j));
    console.log(j);
  }
  console.log("\t");
}
//2
for (var i = 5; i >= 1; i--) {
  console.log("*".repeat(i));
}
//3
var i, j;
for (i = 1; i <= 5; i++) {
  for (j = 1; j <= i; j++) {
    console.log(5 - (i - j));
  }
  console.log(" \t");
}

//4

var a = "";
var n = 5;
var m = n - 1;
for (i = 1; i <= n; i++) {
  a = a.trim();
  a = " ".repeat(m) + a + (i > 1 ? " " : "") + "*";
  console.log(a);
  m--;
}

//5
function stars(n) {
  var str = "";
  for (var i = 1; i <= n; i++) {
    for (var k = 1; k <= n - i; k++) {
      str += "\t";
    }
    for (var j = 1; j <= i; j++) {
      str += "*\t\t";
    }
    console.log(str);
    str = "";
  }
}
stars(3);

//6
function stars(n) {
  var str = "";
  for (var i = 1; i <= n; i++) {
    for (var k = 1; k <= n - i; k++) {
      str += "\t";
    }
    for (var j = 1; j <= i; j++) {
      str += "*\t\t";
    }
    console.log(str);
    str = "";
  }
}
stars(3);
