function clac() {

const FirstNum = document.getElementById("num1");
const SecondNum = document.getElementById("num2");
const operator = document.getElementById("operator");
const result = document.getElementById("result");
  
 console.log(operator.value);
 console.log(typeof operator.value);

  console.log(FirstNum.value);
  console.log(typeof FirstNum.value);

  console.log(SecondNum.value);
  console.log(typeof SecondNum.value);

 switch (operator.value) {
  case "+":
  result.innerText = parseInt(FirstNum.value) + parseInt(SecondNum.value)
  console.log(result.innerText);
  break;
 
  case "-":
  result.innerText = parseInt(FirstNum.value) - parseInt(SecondNum.value)
  console.log(result.innerText);
  break;

  case "*":
  result.innerText = parseInt(FirstNum.value) * parseInt(SecondNum.value)
  console.log(result.innerText);
  break;

  case "/":
  result.innerText = parseInt(FirstNum.value) / parseInt(SecondNum.value)
  console.log(result.innerText);
  break;

  default:
  result.innerText = 0 ;
  break;  

 }

}

