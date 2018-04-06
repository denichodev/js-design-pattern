const myRevealingModule = (() => {
  let privateVar = 'Ben Cherry';
  let publicVar = 'Hey There!';

  privateFunction = () => {
    console.log(`Name: ${privateVar}`);
  }

  publicSetName = (strName) => {
    privateVar = strName;
  }

  publicGetName = () => {
    privateFunction();
  }

  return {
    setName: publicSetName,
    greeting: publicVar,
    getName: publicGetName,
  };
})();

myRevealingModule.setName('Paul Kinlan');

console.log(myRevealingModule.greeting);
myRevealingModule.getName();
