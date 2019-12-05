var johnBills = [100, 100, 100];

function tipCalc(bill) {
    if (bill < 50) {
        return bill * .2;
    } else if (bill > 50 && bill < 200) {
        return bill * .15;
    } else {
        return bill * .1;
    }
};

var tipList = [];
var totalList = [];
var tripTotal = 0; 

for (i = 0; i < johnBills.length; i++) {
    tipList.push(tipCalc(johnBills[i]))
    totalList.push(tipCalc(johnBills[i]) + (johnBills[i]))
    tripTotal = tripTotal + (tipCalc(johnBills[i]) + (johnBills[i]))
};
console.log(tipList, totalList, tripTotal);


