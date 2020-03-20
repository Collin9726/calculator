function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}
    
var num1=parseInt(prompt("Enter num1"));
var num2=parseInt(prompt("Enter num2"));
alert("Addition: " + add(num1,num2));
alert("Subtraction: " + subtract(num1,num2));
alert("Multiplication: " + multiply(num1,num2));
alert("Division: " + divide(num1,num2));
    