
function capitalize(string) {
  let a = string.split(' ');
  return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()});
};


function reducer(string, action) {
  let functionResult;

  switch (action) {

    case 'capitalize':
      functionResult = capitalize(string);
      break;

    case 'upperCase':
      functionResult = string.toUpperCase();
      break;

    case 'lowerCase':
      functionResult = string.toLowerCase();
      break;

  }
  return functionResult;

};


module.exports = reducer;
