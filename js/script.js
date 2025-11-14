//Створіть дві змінні для зберігання значень двох текстових полів. Перевірте, чи обидві змінні не є порожніми. Якщо обидва поля заповнені, вивести повідомлення "Обидва поля заповнені", якщо ні — "Не всі поля заповнені".
let areaOne = "Yo";
let areaTwo = "Yo";
let answer;

if (areaOne && areaTwo) {
  answer = "Обидва поля заповнені";
} else {
  answer = "Не всі поля заповнені";
}

console.log(answer);

//Створіть дві змінні для зберігання числових значень. Обчисліть їх суму. Якщо сума більше 10 — виведіть "Сума більша за 10", якщо ні — "Сума менша або дорівнює 10".
let firstNumber = 5;
let secondNumber = 4;
let messege;

if (firstNumber + secondNumber > 10) {
  messege = "Сума більша за 10";
}
if (firstNumber + secondNumber <= 10) {
  messege = "Сума менша або дорівнює 10";
}

console.log(messege);

//Створіть змінну для зберігання тексту. Перевірте, чи містить цей текст слово "JavaScript". Якщо містить, виведіть "Текст містить слово JavaScript", якщо ні — "Текст не містить слово JavaScript".
let text = "JavaScript is good";
let messegeJava;

if (text.includes("JavaScript")) {
  messegeJava = "Текст містить слово JavaScript";
} else {
  messegeJava = "Текст не містить слово JavaScript";
}

console.log(messegeJava);

//Створіть змінну для зберігання числа. Перевірте, чи це число більше 10 і менше 20. Якщо так — виведіть "Число входить в діапазон від 10 до 20", якщо ні — "Число не входить в діапазон від 10 до 20".
let myNumber = 10;
let range;

if (myNumber >= 10 && myNumber <= 20) {
  range = "Число входить в діапазон від 10 до 20";
} else {
  range = "Число не входить в діапазон від 10 до 20";
}

console.log(range);

//Створіть змінні для зберігання значень полів (ім'я, email, пароль). Перевірте, чи ім'я містить не менше 3 символів, чи email містить символ @ та крапку після нього, а пароль не менше 6 символів. Якщо всі умови виконані — виведіть "Перенаправлення на іншу сторінку", якщо ні — "Помилка: неправильне заповнення".
let name = "Stas";
let email = "pespatron@gmail.com";
let password = "100100173";
let login;

if (name.length > 3 && email.includes("@") && password.length > 6) {
  login = "Перенаправлення на іншу сторінку";
} else {
  login = "Помилка: неправильне заповнення";
}

console.log(login);
