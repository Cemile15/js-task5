//1

const arr = function (number) {
    let newarray = [];
    while (number !== 1) {
        if (number % 2 === 0) {
            number = number / 2;
        } else {
            number = number * 3 + 1;
        }
        console.log(number);
    }
    newarray.push(number);
    return newarray
}
console.log(arr(15));



//2


let array = [4, 8.13, 20, 34, 45]
let maxNumber = array[0];
let minNumber = array[0];

for (let i = 0; i < array.length; i++) {
    if (array[i] > maxNumber) {
        maxNumber = array[i];
    }
    if (array[i] < minNumber) {
        minNumber = array[i];
    }
}

let ferq = maxNumber - minNumber
console.log(ferq);


//3

let arrays = [7, 13, 32, 6, 10, 23, 30]
let number = 23;
function MyFunc(arrays, number) {
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i] === number) {
            return "Arraya daxildir!";
        }
    }
    return "Arraya daxil deyil!"
}
console.log(MyFunc(arrays, number))