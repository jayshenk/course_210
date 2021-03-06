function indexOf(firstString, secondString) {
  var limit = firstString.length - (secondString.length - 1);
  var matchCount;

  for (var i = 0; i <= limit; i++) {
    matchCount = 0;

    for (var j = 0; j < secondString.length; j++) {
      if (firstString[i + j] === secondString[j]) {
        matchCount++;
      } else {
        break;
      }
    }

    if (matchCount === secondString.length) {
      return i;
    }
  }

  return -1;
}

function lastIndexOf(firstString, secondString) {
  var limit = firstString.length - secondString.length;
  var matchCount;

  for (var i = limit; i >= 0; i--) {
    matchCount = 0;

    for (var j = 0; j < secondString.length; j++) {
      if (firstString[i + j] === secondString[j]) {
        matchCount++;
      } else {
        break;
      }
    }

    if (matchCount === secondString.length) {
      return i;
    }
  }

  return -1;
}

console.log(indexOf('Some strings', 's'));      // 5
console.log(indexOf('Blue Whale', 'Whale'));    // 5
console.log(indexOf('Blue Whale', 'Blute'));    // -1
console.log(indexOf('Blue Whale', 'leB'));      // -1

console.log(lastIndexOf('Some strings', 's'));               // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1