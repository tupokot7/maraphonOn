let a = +prompt("Введите первое число: ");
let op = prompt("Введите одно из: +, -, * или /");
let b = +prompt("Введите второе число: ");
let result;

   // ----- т.к. до switch не дошли - делаю по ТЗ по пройденным темам :) -----
function calc() {
   if (op === "+") {
      result = a + b;
   } else if(op === "-") {
      result = a - b;
   } else if (op === "*") {
      result = a * b;
   } else if (op === "/") {
      result = a / b;
   } else if (op != "+","-","*","/") {
      alert("Error: unknown operation");
   }
   alert("Результат: " + result);
}
calc();