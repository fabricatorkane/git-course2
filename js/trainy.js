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