var johnScore = [90, 120, 103];
var mikeScore = [90, 120, 103];
var maryScore = [90, 120, 103];

var total = 0
for (var i = 0; i < johnScore.length; i++) {
    total += johnScore[i];
}
var johnAvg = total/johnScore.length;

var total = 0
for (var i = 0; i < mikeScore.length; i++) {
    total += mikeScore[i];
}
var mikeAvg = total/mikeScore.length;

var total = 0
for (var i = 0; i < maryScore.length; i++) {
    total += maryScore[i];
}
var maryAvg = total/maryScore.length;

if (johnAvg == mikeAvg & mikeAvg == maryAvg) {
    console.log('Mike, John, and Mary have tied with the average score of ' + johnAvg + ' points!')
};
// if (mikeAvg > johnAvg) {
//     console.log('Mike is the Winner!!! With the score of ' + mikeAvg + ' points!!!')  
// };
// if (johnAvg > mikeAvg) {
//     console.log('John is the Winner!!! With the score of ' + johnAvg + ' points!!!')
// };

if (johnAvg > mikeAvg & johnAvg > maryAvg){
    console.log('John has the highest average with ' + johnAvg + ' points!!!')
};

if (mikeAvg > maryAvg & mikeAvg > johnAvg){
    console.log('Mike has the highest average with ' + mikeAvg + ' points!!!')
};

if (maryAvg > mikeAvg & maryAvg > johnAvg){
        console.log('Mary has the highest average with ' + maryAvg + ' points!!!')
};



    

