/// ObserverList data structure
function ObserverList() {
  this.observerList = [];
}

ObserverList.prototype.add = function(obj) {
  return this.observerList.push(obj);
};

ObserverList.prototype.count = function() {
  return this.observerList.length;
};

ObserverList.prototype.get = function(index) {
  if (index > -1 && index < this.observerList.length) {
    return this.observerList[index];
  }
};

ObserverList.prototype.indexOf = function(obj, startIndex) {
  let i = startIndex;

  while (i < this.observerList.length) {
    if (this.observerList[i] === obj) {
      return i;
    }
    i++;
  }

  return -1;
};

ObserverList.prototype.removeAt = function(index) {
  this.observerList.splice(index, 1);
};

/// Subject
function Subject() {
  this.observers = new ObserverList();
}

Subject.prototype.addObserver = function(observer) {
  this.observers.add(observer);
};

Subject.prototype.removeObserver = function(index) {
  this.observers.removeAt(index);
};

Subject.prototype.notify = function(context) {
  const observerCount = this.observers.count();

  for (let i = 0; i < observerCount; i++) {
    this.observers.get(i).update(context);
  }
};

Subject.prototype.forEach = function(func) {
  for(let i = 0; i < this.observers.count(); i++) {
    func(this.observers.get(i));
  }
}

/// Observers
function Media(name, rate) {
  this.name = name;
  this.rate = rate;
  this.marketValue = 0;

  this.showNews = function() {
    console.log(`Current media value is: ${this.rate * this.marketValue}`);
  }

  this.update = function(context) {
    this.marketValue = context;
  };
}

// ConcreteObservers
const firstMedia = Object.create(new Media('TV One', 3000));
const secondMedia = Object.create(new Media('TV Second', 1000));
const thirdMedia = Object.create(new Media('TV Third', 12000));

/// ConcreteSubject
const bank = Object.create(new Subject());
bank.addObserver(firstMedia);
bank.addObserver(secondMedia);
bank.addObserver(thirdMedia);

bank.forEach((obs) => {
  obs.showNews();
});

bank.notify(30);

bank.forEach((obs) => {
  obs.showNews();
});
