const firstName = "Naum"
const lastName='Tarnog'
var friend='Ya'
//name='Mar'

console.log('Имя человека: ' + firstName + ', а фамилия: ' + lastName)
//alert('Имя человека: ' + firstName + ', а фамилия: ' + lastName)
//const Age = prompt('Введите что-нибудь')
//alert(Age + ' ' + firstName)

const currentYear=2021
const birthYear=1993
const age = currentYear - birthYear

hiJack = (friend == "Jack") ? "Hi, Jack!" : "Hi"+ ', ' + friend;
console.log(hiJack);

//учим циклы
for (let i = 1; i <= 5; i = i + 1) {
    console.log("i = " + i);
  };

  function printText() {                   //Определение функции
    document.write("Hello, World!");        //Тело функции - вывод текста в документ
  };

  printText();
  var printText = function(a) {document.write(a);}("\n Hello World!");
  var printText = function(a) {document.write(a);}(" Тадааам");

  let age_1 = prompt('Сколько тебе лет?', 100); //задаем вопрос и дефолтное значение (100) в поле для ввода
  let areYouSure = confirm("Уверен?");
  alert(`Тебе ${age_1} лет!`); // Тебе 100 лет! - выводятся данные
  document.write(` Тебе ${age_1} лет! Неудачник!`)
