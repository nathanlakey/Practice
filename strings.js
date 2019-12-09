function drEvil(amt) {
    if (amt == 1000000) {
        return (amt + ' dollars (pinky)')
    } else {
        return (amt + ' dollars')
    }
};

console.log(drEvil(500));

///////// ******** NEW EXERCISE ******** ///////////////

function mixUp(word1, word2) {
    var charOne = word1.slice(0, 2);
    var charTwo = word2.slice(0, 2);
    var switchOne = word1.replace(charOne, charTwo);
    var switchTwo = word2.replace(charTwo, charOne);
    return (switchOne + ' ' + switchTwo); 
};

console.log(mixUp('dog', 'cat'));
