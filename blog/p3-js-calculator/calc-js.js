
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

let digits = document.getElementsByClassName("nbr-btn")
let operator = document.getElementsByClassName("opr-btn")
}
let equation = []
let operator = []
let numbers = []
let multDiv = []

//add a function where equation.length is TOO big --> respone with OK smarty


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
  //this will call on a variable "answer" that I will define below to be the result of the equation
  document.getElementById("calc-screen").innerHTML = eval(equation.join(""))

  //old functions that worked as a simple calculator but doesn't account for order of operations
  //getEquation();
  //calculate()

}
//operator will always be at an odd placement, 1,3,5. True but not used in my code
function getEquation(){
  //split the numbers out
let operation = equation.join("");
  getNumbers = operation.split(/\D/g); //removes everything but digits
  for (x=0; x<getNumbers.length; x++){
    getNumbers[x] = Number(getNumbers[x]) //converts string to a number
    numbers.push(getNumbers[x])
  }

  console.log(numbers)

//split the operators
getOperators = operation.split(/\d/g) //removes everything but operator
for (j=0; j < getOperators.length; j++){
  if (getOperators[j] == "+" || getOperators[j] == "-" || getOperators[j] == "x" || getOperators[j] == "/" ){ //sending operators to new array (no white space)
    operator.push(getOperators[j])
  }
  /*if (getOperators[j] == "x" || getOperators[j] == "/" ){ //sending x and / to new array (no white space) to determine BEDMAS
    multDiv.push(getOperators[j])
  }*/
}
  //console.log("operators " + operator)
  //console.log("multDiv " + multDiv)

    //console.log("length " + operator.length)

}


let answer = 0;
function calculate(){


//working calc
  for (i=0; i<operator.length; i++){
  //2 number equations
  if (numbers.length <= 2) {
    if (operator[i] == "+"){
       answer = numbers[i] + numbers[i+1]
    }
   else if (operator[i] == "-"){
     answer = numbers[i] - numbers[i+1]
   }
   else if (operator[i] == "x"){
     answer = numbers[i] * numbers[i+1]
   }
   else if (operator[i] == "/"){
     answer = numbers[i] / numbers[i+1]
   }
 }

//equations with more than 2 numbers
//look for x or / first, because of order of operations
//if answer == 0 then this is the first term
//need to prob do recursion for the + and - to order properly
//0 messes up the + and -
else if (numbers.length > 2){



 if (operator[i] == "x"){
    if (i == 0){
      answer = numbers[i] * numbers[i+1]
    } else {
      answer = answer * numbers[i+1]
    }
  }
  else if (operator[i] == "/"){
    if (i == 0){
      answer = numbers[i] / numbers[i+1]
    } else {
      answer = answer / numbers[i+1]
    }
  }
  else if (operator[i] == "+"){
    if (i == 0) {
      answer = numbers[i] + numbers[i+1]
    }
    else{
      answer = answer + numbers[i+1]
    }
  }

  else if (operator[i] == "-"){
    if (i == 0)
    {
      answer = numbers[i] - numbers[i+1]
    } else{
      answer = answer - numbers[i+1]
    }



}
}

}

  document.getElementById("calc-screen").innerHTML = answer
}

//code attempting to correctly respond to the order of operations. However the solution does not require this, so I have stopped...doesn't work right now anyway
  /* if (operator[i] == "x" && answer == 0){
    answer = numbers[i] * numbers[i+1]
    for (j=1; j<operator.length; j++){
      if (operator[j] == "x"){
        answer = answer * numbers[i+1]


      } else if (operator[j] == "/")
      answer = answer / numbers[i+1]
    }
    for (h=0; h<operator.length; h++){
      if (operator[h] == "+"){
        answer = answer + numbers[h+1]
      }
      else if (operator[h] == "-"){
        answer = answer - numbers[h+1]
      }
    }

  } else if (operator[i] == "/" && answer == 0){
    answer = numbers[i] / numbers [i+1]
    for (j=1; j<operator.length; j++){
      if (operator[j] == "x"){
        answer = answer * numbers[i+1]
      } else if (operator[j] == "/")
      answer = answer / numbers[i+1]
    }
  } */
