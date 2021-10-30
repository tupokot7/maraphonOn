let a = prompt("Введите первое число:");
let op = prompt("Введите одно из: '+' '-' '*' '/'");
let b = prompt("Введите второе число:");
let result;

function result() {
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
   } else if (a || b != Number) {
      alert("Error")
   }
   alert("Результат: " + result);
}
result();