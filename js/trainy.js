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



console.log(x + y)