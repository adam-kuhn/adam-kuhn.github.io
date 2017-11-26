
window.onload = function (){

document.getElementById("0").addEventListener("click", display0);
document.getElementById("1").addEventListener("click", display1);
document.getElementById("2").addEventListener("click", display2);
document.getElementById("3").addEventListener("click", display3);
document.getElementById("4").addEventListener("click", display4);
document.getElementById("5").addEventListener("click", display5);
document.getElementById("6").addEventListener("click", display6);
document.getElementById("7").addEventListener("click", display7);
document.getElementById("8").addEventListener("click", display8);
document.getElementById("9").addEventListener("click", display9);

document.getElementById("plus").addEventListener("click", displayPlus);
document.getElementById("minus").addEventListener("click", displayMinus);
document.getElementById("times").addEventListener("click", displayTimes);
document.getElementById("divide").addEventListener("click", displayDivide);
document.getElementById("equals").addEventListener("click", displayAnswer);
document.getElementById("clear").addEventListener("click", clear);

}

let equation = []


//functions to display numbers/operators and push to the equation array, which will be used to perform the calculation
function displayEquation(){
  document.getElementById("calc-equation").innerHTML = equation.join("")

  if (equation.length > 20){
    return document.getElementById("calc-equation").innerHTML = "screen too small!"
  }
}
function display0(){
  document.getElementById("calc-screen").innerHTML = 0
  equation.push(0)
  displayEquation()

}
function display1(){
  document.getElementById("calc-screen").innerHTML = 1
  equation.push(1)
  displayEquation()
}

function display2(){
  document.getElementById("calc-screen").innerHTML = 2
  equation.push(2)
  displayEquation()
}

function display3(){
  document.getElementById("calc-screen").innerHTML = 3
  equation.push(3)
  displayEquation()
}

function display4(){
  document.getElementById("calc-screen").innerHTML = 4
  equation.push(4)
  displayEquation()
}

function display5(){
  document.getElementById("calc-screen").innerHTML = 5
  equation.push(5)
  displayEquation()
}

function display6(){
  document.getElementById("calc-screen").innerHTML = 6
  equation.push(6)
  displayEquation()
}

function display7(){
  document.getElementById("calc-screen").innerHTML = 7
  equation.push(7)
  displayEquation()
}

function display8(){
  document.getElementById("calc-screen").innerHTML = 8
  equation.push(8)
  displayEquation()
}

function display9(){
  document.getElementById("calc-screen").innerHTML = 9
  equation.push(9)
  displayEquation()
}

//operator functions
function displayPlus(){
  document.getElementById("calc-screen").innerHTML = "+"
  equation.push("+")
  displayEquation()
}

function displayMinus(){
  document.getElementById("calc-screen").innerHTML = "-"
  equation.push("-")
  displayEquation()
}

function displayTimes(){
  document.getElementById("calc-screen").innerHTML = "*"
  equation.push("*")
  displayEquation()
}

function displayDivide(){
  document.getElementById("calc-screen").innerHTML = "/"
  equation.push("/")
  displayEquation()
}

//clear everything button
function clear (){
  window.location.reload();
}

function displayAnswer(){
  //calcuates and displays the answer eval() calculates a string
  document.getElementById("calc-screen").innerHTML = eval(equation.join(""))

}
