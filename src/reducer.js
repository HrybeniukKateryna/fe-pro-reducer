
function capitalize(string) {
  let a = string.split(' ');
  return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()});
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


module.exports = reducer;
