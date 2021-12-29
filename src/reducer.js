function capitalize(string) {
  let result = string.split(' ');
  let newArray = result.map(function (item) {
    return item.charAt(0).toUpperCase() + item.slice(1);
  });

  return newArray.join(' ');
};

function reducer(_input, action) {
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

      default:
        functionResult = string;
  }
  return functionResult;

}

module.exports = reducer;
