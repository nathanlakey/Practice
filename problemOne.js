function greatNum(list) {
    
    var largeNum = list[0];
    for (i = 1; i < numList.length; i++) {
        if (list[i] > largeNum) {
            largeNum = list[i];
        }
    }
    return(largeNum);
};

var numList = [34, 65, 12, 68, 26, 12];
var diffList = [2, 8, 34, 78, 3];

var bigNum = greatNum(numList);
var otherBigNum = greatNum(diffList);
console.log(bigNum);
console.log(otherBigNum);

////////////// ********* NEW EXERCISE ************* ////////////////

function calcAvg(list) {
    var total = 0;
    for (i = 0; i < list.length; i++) {
        total += list[i];
    }
    return(total / list.length);
};


var studentOne = {
    fullName: 'Jim Halpert',
    gradeList: [74, 87, 65, 79],
    gender: 'Male'
};

var studentTwo = {
    fullName: 'Pam Beesly',
    gradeList: [87, 93, 98, 88],
    gender: 'Female'
};

var studentThree = {
    fullName: 'Ryan Howard',
    gradeList: [57, 74, 66, 37],
    gender: 'Female'
};

studentOne.average =  calcAvg(studentOne.gradeList);
studentTwo.average =  calcAvg(studentTwo.gradeList);
studentThree.average =  calcAvg(studentThree.gradeList);

function letterGrade(avg) {
    if (avg >= 90) {
        return('A')
    } else if (avg < 90 && avg >= 80) {
        return('B')
    } else if (avg < 80 && avg >= 70) {
        return('C')
    } else if (avg < 70 && avg >= 60) {
        return('D')
    } else {
        return('F')
    }
};

studentOne.letterGrade =  letterGrade(studentOne.average);
studentTwo.letterGrade =  letterGrade(studentTwo.average);
studentThree.letterGrade =  letterGrade(studentThree.average);

console.log(studentOne.fullName + ' had an average score of ' + studentOne.average + ' which equalled a letter grade of ' + studentOne.letterGrade);
console.log(studentTwo.fullName + ' had an average score of ' + studentTwo.average + ' which equalled a letter grade of ' + studentTwo.letterGrade);
console.log(studentThree.fullName + ' had an average score of ' + studentThree.average + ' which equalled a letter grade of ' + studentThree.letterGrade);



