function d6() {
    var roll = Math.random();
    // your code here
    roll = Math.ceil(roll*6);
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);
