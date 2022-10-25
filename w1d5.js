var array = ["a","b","c","d","e","f","g"];
var temp = "";
var x = 0

function reverseArray(arr){
    for(var i=0; i < arr.length/2; i++){
        x= arr.length-1-i;
        temp = arr[x];
        arr[x]= arr[i];
        arr[i] = temp;
    }
}

reverseArray(array);
console.log(array);
