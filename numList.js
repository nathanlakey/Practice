function makeList(num) {
    numList = []; 
    for (i = 1; i <= num; i++) {
        numList.push(i);
    }
    return(numList);
};

var list20 = makeList(20);
console.log(list20);

var list100 = makeList(100);
console.log(list100);