var markWeight = 89
var johnWeight = 94

var markHeight = 1.8
var johnHeight = 2.1

markBmi = markWeight / (markHeight * markHeight)
console.log(markBmi)
johnBmi = johnWeight / (johnHeight * johnHeight)
console.log(johnBmi)

 var markHigherBmi = markBmi > johnBmi
 var markHeavier = markWeight > johnWeight
 var markTaller = markHeight > johnHeight

 console.log('Does Mark have a higher BMI? ' + markHigherBmi + '. Is Mark heavier than John? ' + markHeavier + '. Is Mark taller than John? ' + markTaller + '.')

 alert('Mark\'s weight is ' + markWeight + 'kg. ' + ' John\'s weight is ' + johnWeight + 'kg.')
 console.log('Mark\'s height is ' + markHeight + ' meters.' + ' John\'s height is ' + johnHeight + ' meters.')