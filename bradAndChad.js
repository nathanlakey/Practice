var user1 = {
    fullName: 'Chad Michael Murry',
    dateOfBirth: '12/12/1986',
    country: 'United States',
    salary: 143000,
    married: false, 
    previousSalaries: [36000, 43000, 91000],
    stringLength: function() {
        this.nameLength = this.fullName.length;
        return this.nameLength;
    },
    taxAmount: function() {
        if (this.country == 'United States') { 
            console.log(user1.fullName + ' pays $' + (this.salary * .17) + ' in taxes.')
        } else if (this.country == 'Canada') {
            console.log(user2.fullName + ' pays $' + (this.salary * .43) + ' in taxes.')
        } else {
            console.log('Not enough information to calculate tax data for ' + user1.fullName + '.')
        }
    },
    averageSalary: function() {
        this.totalSalary = this.salary;
        for (i = 0; i < this.previousSalaries.length; i++) {
            this.totalSalary = this.totalSalary + this.previousSalaries[i];
        }
        this.avgSalary = this.totalSalary / (this.previousSalaries.length + 1);
        console.log(this.avgSalary);
    }
};

var user2 = {
    fullName: 'Brad Bradburry',
    dateOfBirth: '06/01/1989',
    country: 'Canada',
    salary: 142000,
    married: true,
    previousSalaries: [22000, 49000, 101000],
    stringLength: function() {
        this.nameLength = this.fullName.length;
        return this.nameLength;
    },
    taxAmount: function() {
        if (this.country == 'United States') { 
            console.log(user1.fullName + ' pays $' + (this.salary * .17) + ' in taxes.')
        } else if (this.country == 'Canada') {
            console.log(user2.fullName + ' pays $' + (this.salary * .43) + ' in taxes.')
        } else {
            console.log('Not enough information to calculate tax data for ' + user2.fullName + '.')
        }
    },
    averageSalary: function() {
        this.totalSalary = this.salary;
        for (i = 0; i < this.previousSalaries.length; i++) {
            this.totalSalary = this.totalSalary + this.previousSalaries[i];
        }
        this.avgSalary = this.totalSalary / (this.previousSalaries.length + 1);
        console.log(this.avgSalary);
    }
};

user1.stringLength();
user2.stringLength();
user1.taxAmount();
user2.taxAmount();
user1.averageSalary();
user2.averageSalary();

function checkLength(a, b) {
    if (a > b) {
        console.log(user1.fullName + ' has the longer name with ' + a + ' characters!')
    } else if (b > a) {
        console.log(user2.fullName + ' has the longer name with ' + b + ' characters!')
    } else {
        console.log(user1.fullName + ' & ' + user2.fullName + ' have the same amount of characters in their names with ' + a)
    }
};

function checkSalary(a, b) {
    if (a > b) {
        console.log(user1.fullName + ' has the higher salary with ' + '$' + a)
    } else if (user2.salary > user1.salary) {
        console.log(user2.fullName + ' has the higher salary with ' + '$' + b)
    } else {
        console.log(user1.fullName + ' & ' + user2.fullName + ' have the same salary with ' + '$' + a)
    }
};

function checkMarried(a, b) {
    if (a == true && b == false) {
        console.log(user1.fullName + ' is married!!!')
    } else if (b == true && a == false) {
        console.log(user2.fullName + ' is married!!!')
    } else if (a == true && b == true) {
        console.log('Both ' + user1.fullName + ' & ' + user2.fullName + ' are married!!!')
    } else {
        console.log('Neither ' + user1.fullName + ' or ' + user2.fullName + ' are married.')
    }
};

function higherSalary(a, b) {
    if (a > b) {
        console.log(user1.fullName + ' has a higher average salary over the past 4 years with an average salary of $' + user1.avgSalary + '!!')
    } else if (b > a) {
        console.log(user2.fullName + ' has a higher average salary over the past 4 years with an average salary of $' + user2.avgSalary + '!!')
    } else {
        console.log(user1.fullName + user2.fullName + ' have had the same average salary over the past 4 years with an average salary of $' + user1.avgSalary + '!!!')
    }
};

checkSalary(user1.salary, user2.salary);
checkLength(user1.nameLength, user2.nameLength);
checkMarried(user1.married, user2.married);
higherSalary(user1.avgSalary, user2.avgSalary);