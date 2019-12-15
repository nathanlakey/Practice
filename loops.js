var numbers = [];
for (i = 1; i <= 10; i++) {
    numbers.push(i);
};
console.log(numbers);

// string variable if its between 0-5 char say its a small string. if between 6-15 make it a medium everything else is a large

function measureString(stringOne) {
    if (stringOne.length < 5) {
        console.log('This is a small string size')
    } else if (stringOne.length > 5 && stringOne.length <= 15) {
        console.log('This is a medium string size')
    } else {
        console.log('This is a large string size')
    }
};

measureString('this is a test of the string function that tells me what size string');

//  have an array of 5 numbers. if a number is between 1-100 say its a small number. 101-1000 is medium. > 1000 is large



function numberSize(numbers) {
    var smallNumbers = [];
    var mediumNumbers = [];
    var largeNumbers = [];
    for (i = 0; i < numbers.length; i++)
        if (numbers[i] < 100) {
            smallNumbers.push(numbers[i])
        } else if (numbers[i] > 100 && numbers[i] <= 1000) {
            mediumNumbers.push(numbers[i])
        } else {
            largeNumbers.push(numbers[i])
        }
    console.log('These are my small numbers: ' + smallNumbers + '. These are my medium numbers: ' + mediumNumbers + '. These are my large numbers: ' + largeNumbers + '.');
};

numberSize([567, 4476, 8899, 11, 179, 543, 6533, 67, 556]);


////////////// ******* NEW EXERCISE ******** //////////////////



