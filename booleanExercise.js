// var markWeight = 89;
// var johnWeight = 94;

// var markHeight = 1.8;
// var johnHeight = 2.1;

// markBmi = markWeight / (markHeight * markHeight);
// console.log(markBmi);
// johnBmi = johnWeight / (johnHeight * johnHeight);
// console.log(johnBmi);

//  var markHigherBmi = markBmi > johnBmi;
//  var markHeavier = markWeight > johnWeight;
//  var markTaller = markHeight > johnHeight;

//  console.log('Does Mark have a higher BMI? ' + markHigherBmi + '. Is Mark heavier than John? ' + markHeavier + '. Is Mark taller than John? ' + markTaller + '.');

//  alert('Mark\'s weight is ' + markWeight + 'kg. ' + ' John\'s weight is ' + johnWeight + 'kg.');
//  console.log('Mark\'s height is ' + markHeight + ' meters.' + ' John\'s height is ' + johnHeight + ' meters.');

// ******* NEW EXERCISE *******

var john = {
    fullName: 'John Applebees',
    height: 2.1,
    weight: 94,
    calcBmi: function() {
        this.bmi = this.weight / (this.height * this.height);
        return this.bmi;
    }
};

var mark = {
    fullName: 'Mark Scooter',
    height: 2.1,
    weight: 94,
    calcBmi: function() {
        this.bmi = this.weight / (this.height * this.height);
        return this.bmi;
    }
};

john.calcBmi();
mark.calcBmi();

if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has the highest BMI with ' + mark.bmi + '!!!')
} else if (john.bmi > mark.bmi) {
    console.log(john.fullName + ' has the highest BMI with ' + john.bmi + '!!!')
} else {
    console.log(mark.fullName + ' and ' + john.fullName + ' have the same BMI with ' + mark.bmi)
};