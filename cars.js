var car1 = {
    make: 'Mercedes Benz',
    model: 'G-Wagon',
    price: 171580,
    colors: ['black', 'white', 'blue', 'green'],
    engine: 'v8',
    gasMileage: 17,
    warrantyMiles: 40000,
    calcValue: function() {
        this.value = (this.price / (this.gasMileage)) + this.warrantyMiles
    }
};

var car2 = {
    make: 'Jeep',
    model: 'Wrangler',
    price: 34500,
    colors: ['black', 'white', 'blue', 'green', 'orange', 'grey'],
    engine: 'v6',
    gasMileage: 11,
    warrantyMiles: 65000,
    calcValue: function() {
        this.value = (this.price / (this.gasMileage)) + this.warrantyMiles
    } 
};

var car3 = {
    make: 'Ford',
    model: 'F-150',
    price: 41000,
    colors: ['black', 'white', 'blue', 'green', 'red', 'grey', 'pearl'],
    engine: 'v6',
    gasMileage: 26,
    warrantyMiles: 60000,
    calcValue: function() {
        this.value = (this.price / (this.gasMileage)) + this.warrantyMiles
    }
};

var car4 = {
    make: 'Ford',
    model: 'Fusion',
    price: 27000,
    colors: ['black', 'white', 'blue', 'red', 'grey'],
    engine: 'v6',
    gasMileage: 24,
    warrantyMiles: 60000,
    calcValue: function() {
        this.value = (this.price / (this.gasMileage)) + this.warrantyMiles
    },
};

var car5 = {
    make: 'Nissan',
    model: 'Rogue',
    price: 38000,
    colors: ['black', 'white', 'blue', 'red', 'grey', 'pearl'],
    engine: 'v6',
    gasMileage: 27,
    warrantyMiles: 40000,
    calcValue: function() {
        this.value = (this.price / (this.gasMileage)) + this.warrantyMiles
    }
};


priceList = [];
priceList.push(car1.price);
priceList.push(car2.price);
priceList.push(car3.price);
priceList.push(car4.price);
priceList.push(car5.price);
// console.log(priceList);
var setHighest = priceList[0];
for (i = 1; i < priceList.length; i++) {
    if (priceList[i] > setHighest) {
        setHighest = priceList[i];
    }
};
console.log(setHighest);

var setLowest = priceList[0];
for (i = 1; i < priceList.length; i++) {
    if (priceList[i] < setLowest) {
        setLowest = priceList[i];
    }
};
console.log(setLowest);

car1.calcValue();
car2.calcValue();
car3.calcValue();
car4.calcValue();
car5.calcValue();

