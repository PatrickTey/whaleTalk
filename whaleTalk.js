let input = 'a whale of a deal!';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

//loops through and brings out vowels
for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (input[i] === vowels[j]) {
            resultArray.push(input[i])
        }
    }
    if (input[i] === 'e') {
        resultArray.push(input[i])
    }
    if (input[i] === 'u') {
        resultArray.push(input[i])
    }
}

let final = resultArray.join('').toLocaleUpperCase();
console.log(final);


