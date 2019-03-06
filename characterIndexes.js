/*myObject = {
l: [0],
i: [1, 10],
g: [2],
h: [3, 5, 13, 15],
t: [4, 12],
o: [6, 16],
u: [7, 17],
s: [8, 18],
e: [9, 14, 19],
n: [11]
}
13:35 start
*/


function listIndexes (input) {
  var myObject = {};
  var currentArray = [];
  var noSpaces = input.replace(/\s+/g, '');
  var splitStr = noSpaces.split('');
    for (var i = 0; i < splitStr.length; i++) {
        if (myObject[splitStr[i]] === undefined) {
            myObject[splitStr[i]] = [i];
        } else {

           myObject[splitStr[i]].push(i);

        }
    }

    return myObject;
}

console.log(listIndexes('lighthouse in the house'));
