//1
var sub = "fullstack";
var wish = `welcome to ${sub}`;
console.log(wish);

//2
var ename = "login_details";
var uname = "admin";
var upwd = "admin";
var sql_query = `select*from ${ename} where Name = ${uname} and Password = ${upwd}`;
console.log(sql_query);

//3
var a = 0;
var b = 10;
const c = a || b;
const d = a && b;
console.log(c);
console.log(d);

//4
var flag = true;
console.log(flag);

//5
var sub1 = ["ram", "rj", "ramnewas", "simran"];
var sub2 = ["monu", "aryan", "joha", "love"];
sub1.forEach(function (el, index) {
  console.log(el, sub2[index]);
});

//6
var obj = {
  Ram: "0004",
  rj: "Ram",
  ramnewas: "singh",
  "simran ": "joha",
};
for (var key in obj) {
  console.log(obj[key]);
}
//7
// var data = 100;
// var data = 200;
// console.log(data); //duplicate variables
// let data = 100;
// let data = 200;
// console.log(data); //SyntaxError: Identifier 'data' has already been declared

//8
// var data = 100;
// {
//   var data = 200;
//   console.log(data);
// }
// console.log(data);

let data = 100;
{
  let data = 200;
  console.log(data);
}
console.log(data);
