let a = [8, 1, 1, 7, 4, 0];  
let b = [5, 8, 5, 4, 8];

var x = 0;
var y = 0;
    
    
for (var inX = 0;inX <= a.length-1; inX= inX + 1) {
        x = x + a[inX];
        
    }
for (var inY = 0; inY <= b.length-1; inY= inY + 1) {
        y = y + b[inY];
    }

console.log(x + y);

let aB = 'abcd';
let bC = '123456'
console.log(aB.concat(bC)); // объединил 2 строки 
console.log(aB.concat(bC).split('')); // разбили строки на массивы
console.log(aB.concat(bC).split('').reverse()); // отзеркалили элементы массива
console.log(aB.concat(bC).split('').reverse().join('')); //объединили массивы в строку
console.log(aB.concat(bC).split('').reverse().join('').concat('Иванов')); // добавили к массиву "Иванов"

var myDate1 = new Date()  //текущая дата и текущее время
var myDate2 = new Date("December 14, 1975 12:10:00") //Sun Dec 14 1975 12:10:00 GMT+0300 (RTZ 2 (зима))
var myDate3 = new Date(1989, 6, 14)  //Fri Jul 14 1989 00:00:00 GMT+0400 (RTZ 2 (лето))
var myDate4 = new Date(1998, 6, 14, 11, 20, 00) //Tue Jul 14 1998 11:20:00 GMT+0400 (RTZ 2 (лето)) 
console.log(myDate1);
console.log(myDate2);
console.log(myDate3);
console.log(myDate4);