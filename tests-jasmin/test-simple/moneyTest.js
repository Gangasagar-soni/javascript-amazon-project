import formatCurrency from '../../scripts/utils/money.js';
console.log("test suite: formate currency")
console.log("testing normal decimal")
if (formatCurrency(2001) === '20.01'){
  console.log("passed");
}else {
  console.log("failed");
}
console.log("testing wiht zero")
if(formatCurrency(2000) === '20.00'){
  console.log("passed");
}else{
  console.log("failed");
}
console.log("testing the decimal")
if(formatCurrency(2000.1) === '20.00'){
  console.log("passed");
}else{
  console.log("failed");
}