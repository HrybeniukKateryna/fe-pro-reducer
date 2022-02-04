
const string = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam dolor velit quas soluta dicta sunt nesciunt repellendus quia error minus assumenda, autem animi esse rem suscipit ut quaerat deserunt inventore.';


function capitalize(string) {
  let a = string.split(' ');
  return string.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()});
};


function reducer(input, action) {
  let functionResult;

  switch (action) {

    case 'capitalize':
      functionResult = capitalize(input);
      break;

    case 'upperCase':
      functionResult = input.toUpperCase();
      break;

    case 'lowerCase':
      functionResult = input.toLowerCase();
      break;

  }
  return functionResult;

};


console.log(reducer(string, 'capitalize')); // => lorem ipsum....


module.exports = reducer;
