const mySingleton = (function() {
  let instance;

  init = () => {
    privateMethod = () => {
      console.log('I am private method');
    }

    const privateVar = 'I am also private';
    const privateRandomNumber = Math.random();

    return {
      publicMethod: () => {
        console.log('The public can see me!');
      },
      publicProperty: 'I am also public',
      getRandomNumber: () => {
        return privateRandomNumber;
      }
    }
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = init();
      }

      return instance;
    }
  }
})();

console.log(mySingleton.getInstance().getRandomNumber());
console.log(mySingleton.getInstance().getRandomNumber());
console.log(mySingleton.getInstance().getRandomNumber());
console.log(mySingleton.getInstance().getRandomNumber());
console.log(mySingleton.getInstance().getRandomNumber());
console.log(mySingleton.getInstance().getRandomNumber());
