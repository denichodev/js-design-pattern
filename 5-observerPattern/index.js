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

function Observer(){
  this.update = function(){
    // ...
  };
}

///
function extend(obj, extension) {
  for (var key in extension) {
    obj[key] = extension[key];
  }
}

let controlCheckbox = document.getElementById('mainCheckbox');
let addBtn = document.getElementById('addNewObserver');
let container = document.getElementById('observersContainer');

console.log('test', controlCheckbox)

extend(controlCheckbox, new Subject());

controlCheckbox.onclick = function() {
  controlCheckbox.notify(controlCheckbox.checked);  
}

addBtn.onclick = addNewObserver;

function addNewObserver() {
  const check = document.createElement('input');
  check.type = 'checkbox';

  extend(check, new Observer());
  check.update = function(val) {
    this.checked = val;
  };

  controlCheckbox.addObserver(check);
  container.appendChild(check);
}

