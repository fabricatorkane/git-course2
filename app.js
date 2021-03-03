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
  document.write(` Тебе ${age_1} лет! Неудачник!`);
 
  //метод
  var person = {};                                 //Объявляем объект person
  person.sayAge = function(n) {                    //Объявляем метод sayAge для объекта person
  console.log("Person is " + n + " years old");  //Тело метода sayAge - вывод текста
  };

  person.sayAge(age_1);

  var person = {
      name : "Ivan",
      age : 25,
      hiredYear : 2017
    }
    
    person.sayAll = function() {
      for (var i in this) {
        console.log(i + " is " + this[i]);
      }
    };
    var cat = "Cat";
    console.log(cat.length); 