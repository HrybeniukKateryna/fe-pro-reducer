
function reducer(string, action) {
  let functionResult;

  switch (action) {

    case 'capitalize':
      functionResult = capitalize(string);
      break;

    case 'toUpperCase':
      functionResult = string.toUpperCase();
      break;

    case 'toLowerCase':
      functionResult = string.toLowerCase();
      break;

  }
  return functionResult;

};

function capitalize(string) {
  let result = string.split(' ');
  let newArray = result.map(function (item) {
    return item.charAt(0).toUpperCase() + item.slice(1);
  });

  return newArray.join(' ');
};

module.exports = reducer;
