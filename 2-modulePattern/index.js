const myModule = {
  myProp: 'Some value',
  myConfig: {
    useCaching: true,
    lang: 'en'
  },
  saySomething: function() {
    console.log('Where in the world is Paul Irish today?');
  },
  reportMyConfig: function() {
    console.log(
      `Cahing is ${this.myConfig.useCaching ? 'enabled' : 'disabled'}`
    );
  },
  updateMyConfig: function(newConfig) {
    this.myConfig = newConfig;
    console.log(this.myConfig.lang);
  }
};

// myModule.saySomething();
// myModule.reportMyConfig();

// myModule.updateMyConfig({
//   useCaching: false,
//   lang: 'id',
// });

// myModule.reportMyConfig();

/// ===== The Module Pattern ======

const testModule = (function() {
  let counter = 0;

  return {
    increment: () => {
      return counter++;
    },
    reset: () => {
      console.log(`Counter value prior to reset: ${counter}`);
      counter = 0;
    }
  };
})();

// testModule.increment();
// testModule.increment();
// testModule.reset();

/// === Shopping Basket ===

const basketModule = (function() {
  const basket = [];

  function doSomethingPrivate() {
    console.log('do something private');
  }

  function doSomethingElsePrivate() {
    console.log('do something else private');
  }

  return {
    addItem: values => {
      basket.push(values);
    },
    getCount: () => {
      return basket.length;
    },
    doSomething: doSomethingPrivate,
    getTotal: function() {
      let count = this.getCount();
      let totalPrice = 0;

      while (count--) {
        totalPrice += basket[count].price;
      }

      return totalPrice;
    }
  };
})();

basketModule.addItem({
  name: 'bread',
  price: 5000
});

basketModule.addItem({
  name: 'sausage',
  price: 20000
});

console.log(basketModule.getTotal());
