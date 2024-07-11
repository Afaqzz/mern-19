//constant

// {
//   const a = 1;
//   console.log("a before scope", a);

//   {
//     const a = "new value";

//     console.log("a within the scope", a);
//   }

//   console.log("a after scope", a);
// }

//let

// {
//   let a;
//   console.log("a before scope", a);

//   {
//     let a = 1;
//     console.log("a within the scope but without update", a);

//     a = "new value";
//     console.log("a within the scope", a);
//   }

//   console.log("a after scope", a);
// }

// var

var a = "outer scope";
console.log(a);

{
  var a = "inner scope";
  console.log(a);
}

console.log(a);
