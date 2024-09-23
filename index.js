// let arr = [];
// let arr2 = [];
// let len = prompt("Enter the lenght: ");
// for(let i = len - 1 ; i >= 0 ; i--){
//    arr[i] = parseInt(prompt("Enter" + i + "Index no."));
//    console.log(arr);
// }
// for(let i = len - 1 ; i >= 0 ; i--){
//   arr2[(len - 1) - i] = arr[i];
// }
// console.log(arr2);
// for(let i = len - 1 ; i >= 0 ; i--){
//   arr2[i] = arr[i];
// }
// console.log("array2");
// console.log(arr2);

// let arr1 = [];
// let arr2 = [];
// let sum = [];

// let len = prompt("Enter the lenght: ");

// for(let i = 0 ; i < len ; i++){
//   arr1[i] = parseInt(prompt("Enter " + i + "Index No"));
//   console.log("array1");
//   console.log(arr1);
// }
// for(let i = 0 ; i < len ; i++){
//   arr2[i] = parseInt(prompt("Enter " + i + "Index No"));
//   console.log("array2");
//   console.log(arr2);
// }
// for(let i = 0 ; i < len ; i++){
//   sum[i] = arr1[i] + arr2[i];
//   console.log("sum");
//   console.log(sum);

// }


function Add()
{
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  document.getElementById('Output').innerHTML = num1 + num2;
}