//1

let numbers = [1, 2, 3, 4, 5];
let reversed = [];

for (let i = numbers.length - 1; i >= 0; i--) {
    reversed.push(numbers[i]);
}

console.log("Original array: " + numbers);
console.log("Reversed array: " + reversed);

//2

let numbers = [1, 0, 5, 0, 8, 3];
let result = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== 0) {
        result.push(numbers[i]);
    }
}

console.log("Original array: " + numbers);
console.log("Array without zeros: " + result);

//3

let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];
let result = [];

for (let i = 0; i < firstArray.length; i++) {
    result.push(firstArray[i]);
}

for (let i = 0; i < secondArray.length; i++) {
    result.push(secondArray[i]);
}

console.log("First array: " + firstArray);
console.log("Second array: " + secondArray);
console.log("Combined array: " + result);

//4

let numbers = [2, 5, 3, 5, 8, 5, 1];
let searchNumber = 5;
let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === searchNumber) {
        count++;
    }
}

console.log("Array: " + numbers);
console.log("Number: " + searchNumber);
console.log("Occurrences: " + count);

//5

let numbers = [1, 2, 3, 4, 5];
let sorted = true;

for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] > numbers[i + 1]) {
        sorted = false;
    }
}

console.log("Array: " + numbers);
console.log("Sorted in ascending order: " + sorted);

//6

let numbers = [2, 5, 3, 5, 8, 3, 1];
let repeated = false;
let result = 0;

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
        if (numbers[i] === numbers[j]) {
            result = numbers[i];
            repeated = true;
            break;
        }
    }

    if (repeated === true) {
        break;
    }
}

if (repeated === true) {
    console.log("First repeated number: " + result);
} 
else {
    console.log("There are no repeated numbers.");
}

//7

let numbers = [1, 2, 3, 4, 5];

if (numbers.length > 1) {
    let temp = numbers[0];

    numbers[0] = numbers[numbers.length - 1];
    numbers[numbers.length - 1] = temp;
}

console.log("Array after swapping: " + numbers);

//8

let numbers = [1, 2, 3, 2, 4, 1, 5];
let unique = [];

for (let i = 0; i < numbers.length; i++) {
    let found = false;

    for (let j = 0; j < unique.length; j++) {
        if (numbers[i] === unique[j]) {
            found = true;
        }
    }

    if (found === false) {
        unique.push(numbers[i]);
    }
}

console.log("Original array: " + numbers);
console.log("Unique elements: " + unique);

//9

let words = ["apple", "banana", "watermelon", "kiwi", "orange"];
let longest = words[0];

for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
        longest = words[i];
    }
}

console.log("Words: " + words);
console.log("Longest string: " + longest);
console.log("Length: " + longest.length);

//10

let numbers = [5, 2, 8, 1, 3];

for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
        if (numbers[j] > numbers[j + 1]) {
            let temp = numbers[j];

            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}

console.log("Sorted array: " + numbers);