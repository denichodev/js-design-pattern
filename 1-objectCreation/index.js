const newObject = {};

Object.defineProperty(newObject, 'someKey', {
  value: 'for more control over objects value',
  writable: true,
  enumerable: true,
  configurable: true
});

newObject.someKey = 'hehe';

for (const prop in newObject) {
  // console.log(newObject[prop]);
}

const defProp = (obj, key, value) => {
  const config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true,
  };

  Object.defineProperty(obj, key, config);
}

// console.log(newObject);

function Car (model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}

Car.prototype.toString = function() {
  return `${this.model} has done ${this.miles} miles`;
}

const sportCar = new Car('Subaru', '1999', 2000);
const famCar = new Car('Kijang', '2002', 123);

console.log(sportCar.toString());
console.log(famCar.toString());

