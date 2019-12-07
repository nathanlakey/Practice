// var johnBills = [100, 100, 100];

// function tipCalc(bill) {
//     if (bill < 50) {
//         return bill * .2;
//     } else if (bill > 50 && bill < 200) {
//         return bill * .15;
//     } else {
//         return bill * .1;
//     }
// };

// var tipList = [];
// var totalList = [];
// var tripTotal = 0;
// var tipTotal = 0;
// var billTotal = 0

// for (i = 0; i < johnBills.length; i++) {
//     tipList.push(tipCalc(johnBills[i]))
//     totalList.push(tipCalc(johnBills[i]) + (johnBills[i]))
//     tripTotal = tripTotal + (tipCalc(johnBills[i]) + (johnBills[i]))
//     tipTotal = tipTotal + (tipCalc(johnBills[i]))
//     billTotal = billTotal + (johnBills[i])
// };

// var avgPercent = tipTotal / billTotal;
// console.log('The average tip percentage was ' + avgPercent * 100 + '%!!!');

// var avgTip = tipTotal / johnBills.length;
// console.log('The average tip was $' + avgTip);

// var avgMeal = tripTotal / johnBills.length;
// console.log('The average meal price was $' + avgMeal);

// console.log(tipList, totalList, tripTotal);


// ******* NEW EXERCISE *******

var john = {
    bills: [100, 100, 100],
    tipCalc: function() {

        this.tipList = [];
        this.totalBill = [];

        for (i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                this.tipList[i] = this.bills[i] * .2
                this.totalBill[i] = this.bills[i] + this.tipList[i]
            } else if (this.bills[i] > 50 && this.bills[i] < 200) {
                this.tipList[i] = this.bills[i] * .15
                this.totalBill[i] = this.bills[i] + this.tipList[i]
            } else {
                this.tipList[i] = this.bills[i] * .1
                this.totalBill[i] = this.bills[i] + this.tipList[i]
            }
        }
    }
};

john.tipCalc();
console.log(john);
