let num1 = 0;
let num2 = 0;
let op = "";

function calcular(num1, num2, op){
  switch (op){
    case "+":
        return num1 + num2;
    case "-":
        return num1 - num2;
    case "*":
        return num1 * num2;
    case "/":
        return num1 / num2;
    default:
        return "operacion no val"    
  }
}
function asignarValor(valor){
    if (!op){
        valor1 = valor;
    }else{
        valor2 = valor;
    }
};

document.getElementById("display").innerText="0";

const btNum1 = document.querySelector("#num1")
const btNum2 = document.querySelector("#num2")
const btnOpSum = document.querySelector("#opSum")
const btnOpIgual = document.querySelector("#opIgual")
const btNum3 = document.querySelector("#num3")
const btNum4 = document.querySelector("#num4")
const btNum5 = document.querySelector("#num5")

btNum1.addEventListener("click",function (){
    document.getElementById("display").innerText = "0";
    console.log("Button 1 clicked");
    num1 = 1;
});

btNum2.addEventListener("click", function (){
    document.getElementById("display").innerText = "2";
    num2 = 2;
});

btnOpSum.addEventListener("click", function(){
    op = "+";
});

btnOpIgual.addEventListener("click",function(){
    const total = calcular(num1, num2, op );
    document.getElementById("display").innerText = total;
});