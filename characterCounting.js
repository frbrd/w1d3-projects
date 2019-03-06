function countLetters (input) {
  var myObject = {};
  var noSpaces = input.replace(/\s+/g, '');
    for (var i = 0; i < noSpaces.length; i++) {
        var character = noSpaces.charAt(i);
        if (myObject[character]) {
           myObject[character]++;
        } else {
           myObject[character] = 1;
        }
    }

    return myObject;
}

console.log(countLetters('lighthouse in the house'));