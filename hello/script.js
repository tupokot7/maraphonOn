let numberOne = +prompt("Введите первое число: ");
let operation = prompt("Введите одно из: +, -, * или /");
let numberTwo = +prompt("Введите второе число: ");
let result;

   // ----- т.к. до switch не дошли - делаю по ТЗ по пройденным темам :) -----

/* function calc() {
   if (operation === "+") {
      result = numberOne + numberTwo;
   } else if(operation === "-") {
      result = numberOne - numberTwo;
   } else if (operation === "*") {
      result = numberOne * numberTwo;
   } else if (operation === "/") {
      result = numberOne / numberTwo;
   } else if (operation != "+","-","*","/") {
      alert("Error: unknown operation");
      return;
   }
   alert("Результат: " + result);
}
calc(); */

//   ----- переписываем функцию выше на switch-case -----

switch (operation) {
   case '+':
      alert('Результат: ' + (result = numberOne + numberTwo));
      break;
   case '-':
      alert('Результат: ' + (result = numberOne - numberTwo));
      break;
   case '*':
      alert('Результат: ' + (result = numberOne * numberTwo));
      break;
   case '/':
      alert('Результат: ' + (result = numberOne / numberTwo));
      break;
   default:
      alert('Error: unknown operation');
      break;
}