

var rows = 5;
var number = 1;

for (var i = 1; i <= rows; i++) {
    var line = "";
    
    for (var j = 1; j <= i; j++) {
        line = line + number + " ";
        number = number + 1;
    }
    
    console.log(line);
}
